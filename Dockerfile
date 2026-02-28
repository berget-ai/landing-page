FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build SSG (pre-renders marketing pages to dist/client/)
RUN npm run build:ssg

# Build SPA shell for React Router routes (/models, /blog, /signup etc.)
# Output goes to dist/spa/ — used as nginx fallback for non-SSG routes
RUN npm run build:spa

RUN npm audit --omit=dev

FROM nginx:alpine AS production
# SSG output: pre-rendered HTML for marketing pages
COPY --from=builder /app/dist/client /usr/share/nginx/html
# SPA shell: React Router fallback for /models, /blog etc.
COPY --from=builder /app/dist/spa/index.html /usr/share/nginx/html/spa.html
COPY k8s/base/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

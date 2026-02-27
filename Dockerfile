FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build:ssg
RUN npm audit --omit=dev

FROM nginx:alpine AS production
COPY --from=builder /app/dist/client /usr/share/nginx/html
COPY k8s/base/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BERGET_API_URL='https://stage-api.berget.ai/v1'
ENV VITE_BERGET_API_URL=${VITE_BERGET_API_URL}

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY k8s/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

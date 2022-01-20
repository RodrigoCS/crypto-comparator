FROM node:17.2-alpine3.14 AS builder
ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:1.21.5-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
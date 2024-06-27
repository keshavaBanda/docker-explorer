#stage 1
FROM node:latest as angdoc
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=angdoc /app/dist/angular-docker-test2 /usr/share/nginx/html
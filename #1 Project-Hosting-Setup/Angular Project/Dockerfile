#stage 1
FROM node:14.17.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
### MAINTAINER AND PROJECT TAGS
  LABEL developer="Evvo-IN"
  LABEL packager="Evvo-SG"
  LABEL release-date="15-01-2024"
  LABEL environment="PRODUCTION"
  LABEL app-name="MEGA_WEB_ADMIN"
  LABEL project_name="MEGA_ADVENTURE"
FROM nginx:alpine
COPY --from=node /app/dist/megaeventadmin /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]


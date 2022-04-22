FROM node:14.16.1-alpine as build
WORKDIR /front

ENV PATH /front/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent

COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build /front/build /usr/share/nginx/html
# COPY ./.nginx/nginx.conf.template /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#Stage 3
FROM build
ENV HOME /front
WORKDIR $HOME
RUN adduser --disabled-password --home $HOME --shell /bin/bash deploy

COPY --chown=deploy:deploy . .
COPY --chown=deploy:deploy --from=build $HOME/build ./build

USER deploy
EXPOSE 3000
CMD ["node", "server.js"]
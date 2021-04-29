FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn global add @quasar/cli
RUN yarn install

COPY . .

EXPOSE 8080

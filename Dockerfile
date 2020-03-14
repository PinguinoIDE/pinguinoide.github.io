FROM node:12-alpine
WORKDIR /usr/src
RUN yarn global add vuepress babel-loader

FROM node:12-alpine
WORKDIR /usr/src
RUN yarn global add vitepress babel-loader

FROM node:21-alpine
WORKDIR /usr/src
RUN yarn global add vuepress babel-loader @vuepress/plugin-google-analytics

FROM node:16-alpine
WORKDIR /usr/src
RUN yarn global add vuepress babel-loader @vuepress/plugin-google-analytics

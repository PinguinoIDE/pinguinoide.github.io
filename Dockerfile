FROM node:22-alpine
WORKDIR /app
RUN apk add --no-cache git
RUN yarn global add vitepress babel-loader

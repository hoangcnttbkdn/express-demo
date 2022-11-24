FROM node:16.18.0-alpine

WORKDIR /JenkinsGithub

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ./*.js ./

CMD [ "node", "index.js" ]
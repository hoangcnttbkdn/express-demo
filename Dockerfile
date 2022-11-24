FROM node:16.18.0

WORKDIR /JenkinsGithub

COPY ["package.json", "package-lock.json*", "./"]

COPY ./node_modules ./node_modules

COPY ./*.js ./

CMD [ "node", "index.js" ]
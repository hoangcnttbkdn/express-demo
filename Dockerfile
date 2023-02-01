ARG NODE_IMAGE=node:16.19.0-alpine
ARG APP_PORT=3000

# =====================================
FROM ${NODE_IMAGE}

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

EXPOSE ${APP_PORT}

CMD ["npm", "start"]

# CMD [ "node", "index.js" ]
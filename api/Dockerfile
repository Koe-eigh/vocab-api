FROM node:20-alpine

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm install \
    && npm ci \
    && npm cache clean --force \
    && mv /app/node_modules /node_modules

ENV PORT ${PORT}

EXPOSE ${PORT}

COPY --chown=node:node . .

RUN npm run build

USER node

CMD ["npm", "run", "start"]

FROM node:20-alpine

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm ci \
    && npm cache clean --force \
    && mv /app/node_modules /node_modules

ENV PORT ${PORT}

EXPOSE ${PORT}

COPY --chown=node:node . .

USER node

CMD ["npm", "run", "start"]

FROM node

WORKDIR /app

COPY . .
RUN yarn

EXPOSE 3001

USER node

ENTRYPOINT [ "node", "index.js" ]
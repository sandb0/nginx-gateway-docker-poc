FROM node

WORKDIR /app

COPY . .
RUN yarn

EXPOSE 3000

USER node

ENTRYPOINT [ "node", "index.js" ]
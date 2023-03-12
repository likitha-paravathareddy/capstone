FROM node:18

WORKDIR /usr/src/app

COPY mvc/package*.json ./


RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","server/mvc/index.js"]
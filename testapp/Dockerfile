FROM node:23-alpine

COPY package*.json ./
COPY app.js ./

RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]
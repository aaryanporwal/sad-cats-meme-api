FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY index.js .
COPY public ./public
CMD [ "node", "index.js" ]

FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN wget https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh -O wait-for-it.sh && chmod +x wait-for-it.sh

EXPOSE 4301




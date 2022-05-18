FROM node:16.15.0-alpine

WORKDIR /app

COPY package* ./

RUN npm i 

COPY src/ ./

ENV PORT=80

ARG version=0.1.0

ENV VERSION $version

CMD ["npm", "start"]
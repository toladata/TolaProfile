FROM node:6.11.0

MAINTAINER Denis Neuling (denisneuling@gmail.com)

COPY . /app
WORKDIR /app

EXPOSE 9000

RUN npm install
RUN npm install -g ng
RUN node_modules/@angular/cli/bin/ng build

CMD ["node", "server.js"]

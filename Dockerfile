FROM node:15.6.0-alpine
# create app directory
WORKDIR /usr/src/app

ENV X_FORWARDED_HOST=localhost:5000

ADD src ./src
ADD config ./config
COPY package*.json ./

RUN npm install
RUN npm run build

RUN rm -r src config

EXPOSE 3000
CMD ["node", "build/bundle.js"]
FROM node:15.6.0-alpine
# create app directory
WORKDIR /usr/src/app

ENV X_FORWARDED_HOST=localhost:3000

COPY src ./
COPY config ./
COPY package*.json ./
RUN ls -la
RUN npm install

RUN npm run build

RUN rm -r src
RUN ls -la

EXPOSE 3000
CMD ["node", "build/bundle.js"]
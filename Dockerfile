FROM node:15.6.0-alpine
# create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "build/bundle.js"]
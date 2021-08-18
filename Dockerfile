FROM node:15.6.0-alpine
# create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN ls -la
RUN npm run build

EXPOSE 3000
CMD ["node", "build/bundle.js"]
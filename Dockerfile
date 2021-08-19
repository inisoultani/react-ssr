FROM node:15.6.0-alpine
# create app directory
WORKDIR /usr/src/app

ENV X_FORWARDED_HOST=localhost:5000

COPY . .

RUN npm install
RUN ls -la
RUN npm run build

EXPOSE 3000
CMD ["node", "build/bundle.js"]
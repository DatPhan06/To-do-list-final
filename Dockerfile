# syntax=docker/dockerfile:1

FROM node:21


WORKDIR /src
COPY package.json package-lock.json ./

COPY . .

RUN npm install express morgan mysql2 handlebars-helpers express-handlebars sequelize nodemon


EXPOSE 3000

CMD ["npm", "start"]
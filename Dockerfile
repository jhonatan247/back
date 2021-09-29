FROM node:14

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD [ "yarn", "run:dev" ]
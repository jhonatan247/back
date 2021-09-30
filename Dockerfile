FROM node:16

RUN mkdir /back
WORKDIR /back
COPY package*.json ./
RUN yarn
RUN yarn global add nodemon webpack webpack-cli
COPY . .
EXPOSE 3000
CMD [ "yarn", "build" ]
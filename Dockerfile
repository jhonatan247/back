FROM node:14

RUN mkdir /back
WORKDIR /back
COPY package*.json ./
RUN yarn
RUN yarn global add nodemon
COPY . .
EXPOSE 3000
CMD [ "yarn", "build" ]
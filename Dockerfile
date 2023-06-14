FROM node:18.16.0
WORKDIR /portfolio-server
COPY package.json /portfolio-server
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
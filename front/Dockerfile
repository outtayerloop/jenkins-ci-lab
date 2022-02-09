FROM node:latest
WORKDIR /app
COPY * ./
COPY ./public ./public
COPY ./src ./src
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
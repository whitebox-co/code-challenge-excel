FROM node:12.18.1
WORKDIR /bin
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
FROM node:10

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm i

COPY [".", "/usr/src/"]

EXPOSE 3070

CMD [ "npm", "start" ]

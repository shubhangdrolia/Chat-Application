FROM node:latest

WORKDIR /var/lib/jenkins/workspace/Chat-Application


COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
COPY . .

EXPOSE 5000
CMD ["node", "index.js"]

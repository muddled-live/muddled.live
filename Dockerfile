FROM node:18.3.0-alpine3.14

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]


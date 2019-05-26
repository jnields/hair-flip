FROM node:10-alpine

COPY . /opt/hair-flip
WORKDIR /opt/hair-flip


RUN npm i \
  && npm run build \
  && npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 5000

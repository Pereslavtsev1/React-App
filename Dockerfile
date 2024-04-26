FROM node:20.12.0-apline
WORKDIR /app 
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY . ./
CMD ["npm","start"]
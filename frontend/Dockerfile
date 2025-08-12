FROM node:20.17.0

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN npm install

COPY . /app/frontend/

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

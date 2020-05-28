# Lightweight node image
FROM node:12-slim
# App directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
# Copy dist into WORKDIR
COPY . ./
# Run the SSR app
CMD [ "node", "dist/small-test/server/main.js" ]
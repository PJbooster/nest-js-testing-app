# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./apps/server/package*.json ./

# Install app dependencies

WORKDIR /usr/src/app/apps/server
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which the app will run
EXPOSE 3001

# Start the server using the production build
CMD ["npm", "run", "dev"]
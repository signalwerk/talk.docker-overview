FROM node:20-alpine 

# app directory
WORKDIR /usr/src/app

# Install pm2 to run the app
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 8080

RUN ls -la

# Start the server using the production build
CMD [ "pm2-runtime", "--watch", "index.js" ]
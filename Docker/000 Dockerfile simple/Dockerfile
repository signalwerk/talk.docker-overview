
# To run;
# docker image rm teamtalk/000-test
# docker build --tag teamtalk/000-test .
# docker images
# docker container rm 000-test-server
# docker run --detach --name 000-test-server -p 80:8080 -e TEST=MyValueHere teamtalk/000-test
# docker ps
# docker exec -it "000-test-server" /bin/sh
# docker stop 000-test-server

FROM node:20-alpine 

# Create app directory
WORKDIR /usr/src/app
RUN chown node:node /usr/src/app

# Bundle app source
COPY --chown=node:node . .

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Use the node user from the image (instead of the root user)
USER node

# Expose the port the app runs on
EXPOSE 8080

# Start the server using the production build
CMD [ "node", "index.js" ]
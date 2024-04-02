
# To run;
# docker image rm teamtalk/200-test
# docker build --tag teamtalk/200-test .
# docker images
# docker container rm 200-test-server
# docker run --detach --name 200-test-server -p 80:8080 -e TEST=MyValueHere teamtalk/200-test
# docker ps
# docker exec -it "200-test-server" /bin/sh
# docker stop 200-test-server

# ----------------------------------------------------------------
# Build
# ----------------------------------------------------------------
FROM node:20-alpine As build

# Create app directory
WORKDIR /usr/src/app
RUN chown node:node /usr/src/app

# Bundle app source
COPY --chown=node:node . .

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory.
# Passing in --only=production ensures that only the production dependencies are installed.
# This ensures that the node_modules directory is as optimized as possible.
RUN npm ci --only=production && npm cache clean --force

# ----------------------------------------------------------------
# Production
# ----------------------------------------------------------------
FROM node:20-alpine As production

# Create app directory
WORKDIR /usr/src/app
RUN chown node:node /usr/src/app

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules

# Use the node user from the image (instead of the root user)
USER node

# Expose the port the app runs on
EXPOSE 8080

# Start the server using the production build
CMD [ "node", "index.js" ]
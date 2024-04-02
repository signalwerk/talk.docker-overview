
# To run;
# docker images rm teamtalk/100-test
# docker build --tag teamtalk/100-test .
# docker images
# docker container rm 100-test-server
# docker run --detach --name 100-test-server -p 80:8080 -e TEST=MyValueHere -v "$(pwd):/data" teamtalk/100-test
# docker ps
# docker exec -it "100-test-server" /bin/sh
# docker stop 100-test-server

FROM node:20-alpine 

# Install pm2 to run the app
RUN npm install pm2 -g

# app directory
WORKDIR /data

# Expose the port the app runs on
EXPOSE 8080

# Start the server using the production build
CMD [ "pm2-runtime", "--watch", "index.js" ]
FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Setup startup script
COPY ./docker/app/startup.sh /usr/local/bin/startup.sh

EXPOSE 3000
CMD [ "/bin/bash", "/usr/local/bin/startup.sh" ]
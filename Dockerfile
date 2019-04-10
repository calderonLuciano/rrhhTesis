FROM node:jessie

# Create app directory
RUN mkdir -p /usr/src/rrhh-backend-api
WORKDIR /usr/src/rrhh-backend-api

# Install app dependencies
COPY package.json /usr/src/rrhh-backend-api
RUN npm install

# Bundle app source
COPY . /usr/src/rrhh-backend-api

# Build arguments
ARG NODE_VERSION=10.15.3

# Environment
ENV NODE_VERSION $NODE_VERSION
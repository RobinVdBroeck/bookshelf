FROM mcr.microsoft.com/devcontainers/javascript-node:0-16

RUN apt-get update \
	&& apt-get install -y python g++ make
COPY ./package.json ./package-lock.json ./
RUN npm install

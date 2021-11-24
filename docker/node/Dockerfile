FROM node:16.13.0

RUN apt-get update && apt-get -y install yarn python git

WORKDIR /usr/src/app

RUN yarn global add nx @angular/cli

ENTRYPOINT bash

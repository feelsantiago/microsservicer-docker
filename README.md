# Motivation

The propose for this repository is to store a example on how to setup [NestJs Microservices](https://docs.nestjs.com/microservices/basics) with [RabbitMQ](https://www.rabbitmq.com/getstarted.html) on [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/) debug options to docker containers.

This project use multiple build Dockerfiles and Docker Compose for development and production build.

## How to run

The docker compose only loads a file called `.env` to fill up the variables on `.yml` file. So you have to make sure that only one file is labeled as `.env` on the root directory.

### For Production

> This is the default configuration on this repository.

Change the `production.env` file to `.env`, than run:

```bash
$ docker-compose up --build -V -d
$ docker-compose up
```

### For Development

Change the `development.env` file to `.env`, than run:

```bash
$ docker-compose -f development.compose.yml  up --build -V -d
$ docker-compose -f development.compose.yml up
```

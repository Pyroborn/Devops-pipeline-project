# Todo-App Frontend

Welcome to the frontend of Todo app project. This part of the application is built using [Vue.js](https://vuejs.org), a JavaScript framework. To interact with backend APIs [Axios](https://axios-http.com) used. For testing, [Cypress](https://www.cypress.io) used for acceptance tests and [Vue Test Utils](https://vue-test-utils.vuejs.org) used for unit tests. To containerize frontend [Docker](https://www.docker.com) used and [Nginx](https://www.nginx.com) used as a proxy. Finally, to host the application [Google Cloud Platform](https://cloud.google.com) Virtual Machine used.

## Vue

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

## Docker
* Create `Dockerfile`
* Create `docker-compose.yml`

## Nginx
* Create `nginx.conf`

## Gitlab
* Create a repository with <project-name>
* Create `.gitlab-ci.yml`
* Add Variables

### Git
```sh
$ git init
$ git add .
$ git commit -m "Initial commit"
$ git branch -M <branch>
$ git remote add origin https://gitlab.com/<username>/<project-name>.gi
$ git push -u origin <branch>
```

### Variables
* `CI_REGISTRY_USER: <gitlab-username>`
* `CI_REGISTRY_PASSWORD:` [<gitlab-personal-access-token>](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
* `SERVER_USER: <VM-user>`

### Runner
* Create a runner with a specific tag
* register runner to VM with `shell` executor
* Add tag of this runner to steps of gitlab-ci.yml that you want runner to use

## VM
* install [docker](https://docs.docker.com/engine/install/ubuntu/) to VM
* install and register gitlab runner
* Use `docker login registry.gitlab.com` to login gitlab.com registry using docker

### Commands
* To run docker compose
```sh
$ cd production
$ docker compose up -d
```
* To check docker containers `docker ps -a`
* To run gitlab runner `gitlab-runner run`

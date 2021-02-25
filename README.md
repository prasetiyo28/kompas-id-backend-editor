# Backend API - EDITOR ARTIKEL . id
Rest Api Service Backend dibangun menggunakan NodeJS(ExpressJS) , MySql dan Redis sebaga data storage

# Running With Docker Compose
## Requirement
- Docker installed
- Docker Compose installed

## How to running
- runing with docker compose
>  $ docker-compese up

- go to docker container and run sh with :
> $ docker-exec -it api-editor_backend_1 sh

- running migration and seeding on your backend container with :
> $ sequelize db:migrate 
  
> $ sequelize db:seed:all
* if error "sequelize command not found" install sequelize cli with this command :
> $ npm install -g sequelize-cli


you will get a port to access the API 
    

# Local Running

## Requirement
- local redis on port 6379
- NPM version 6.90

## Instalasi
- install package
>  $ npm install
- copy environment
> $ cp .example.env .env

config .env with your data

## migrate db
> $ sequelize db:migrate

## seeding
>$ sequelize db:seed:all

## Running
>$ npm run start



# Credential to Login
- username : author1 or author@kompas.id
- password : author

# Postman Collection :
Download Postman Collection [here](https://raw.githubusercontent.com/prasetiyo28/sejutacita-backend/main/SEJUTACITA.postman_collection.json)


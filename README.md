# placesapp
An API developed in Typescript + NodeJS + Express to create users and places to eat, share experiences and recommendations


# Project dependencies:
```
1. Hace docker installed in your computer
2. Have docker-compose installed in your computer
```

## How to install and use it

1. The first step that you will have to do is build the docker image that contains all project infrastucture wich we need to run the API. ¿how you can do that?
2. In the root path `/placesapp` you need move to `/placesapp/docker` folder and just need run `docker-compose build` command so that the orchestrator build the docker image wich mount our app.
3. Leaving in the same folder `/placesapp/docker` you just need run `docker-compose up` and It mount the app on the `:3000` port.
4. Once server is up and listening on the `:3000` port, you just need use any REST client to testing the endpoints.
5. if you want to know that the app is running correctly, you could send an empty request to `http://localhost:3000` with your REST client and the server say hi to you with this message *"Hi": "Welcome to my API"* or just try access to the same route in your web browser.

Bye!

## Application Setup

* clone to the local machine using `git clone`
* go to directory times-exam-web using `cd times-exam-web` 
* install the node modules using ` npm install`
* run the npm test to ensure that tests are running `npm test`

## Making changes to UI only
When you are planning to make the chnages in the UI and validate against the api server then run the spring boot application and at the same time run the react app
* From the times-exam directory fire `./gradlew bootRun -PisLocal=true` it will run the java application which will give the access to API
* From the times-exam-web directory start the npm `npm start`, this will run the node app


## Testing the APP
Run `./gradlew clean test -PisLocal=true` from the times-exam directory

## Building the APP
Run `./gradlew clean build -PisLocal=true ` from the times-exam directory, this will create the jar which can deployed. The jar will be created in times-exam-api/build/libs folder

## Running the APP
Run `./gradlew bootRun -PisLocal=true` from the times-exam directory, After it is successfully started then you can navigate to http://localhost:8080

## Deploying to Heroku
Follow the documentation at https://devcenter.heroku.com/articles/git


## More Details on the React App, see the Read Me file under the web directory.

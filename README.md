# Project: Let's Get Quizzical

🦋  [![Netlify Status](https://api.netlify.com/api/v1/badges/c3504deb-6376-4b64-abbb-4a4536f23868/deploy-status)](https://app.netlify.com/sites/letsgetquizzical/deploys) 🚀  ![Heroku](https://pyheroku-badge.herokuapp.com/?app=quizzicalquiz&style=flat) ⚖️  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Lockdown has seen a spike in online quizzes and people have been deprived of the party experience. So with that in mind, we wanted to give people a platform to play multiplayer quizzes remotely, mordernise the typical pub quiz by having a neon party theme to bring the party feel to the user!

Let's Get Quizzical is an online quiz game built in fullstack with react and redux on the client, Node.js and Express on the server and a mongoDB database. The game uses Socket.io to allow multiple users to play together, questions and answers are fetched from OpenTrivia API, and it is deployed on Netlify and Heroku.


## How to play
For each game, up to 4 players can play and the host of each game selects the type of quiz they want everyone to play (i.e the number of questions, category, and difficulty). Users are then able to join the game using a unique room name set by the host. Once users have joined the lobby, they can take it in turns to play and the winner is announced at the end of every game and all new and existing scores are then shown on the leaderboard. 

## Installation & usage

Clone or download the repo and navigate to the root directory of this repo.

To run the client, open the terminal:   
`cd react-client`    
`npm install`  
`npm run dev`   

It should automatically load on 0.0.0.0:8080

To run client test suite:    
`npm run tests` 

****

To start the server and use docker compose for the api and database containers, open the terminal and run:    
`bash _scripts/startDev.sh`
- starts api & db services
- runs db migrations
- seeds db for development
- serves api on localhost:3000

To run the server test suite:     
`bash _scripts/startTest.sh`  
- starts api & db services
- runs db migrations
- attaches to api container and triggers full test run
- no ports mapped to local host

MongoDB shell     
`bash _scripts/mongo.sh`     

To teardown docker compose completely:      
`bash _scripts/teardown.sh`  

## Technologies
- HTML, CSS, JavaScript

### Dependencies: 
   - Server: cors, nodemon, socket.io, express, mongodb
   
   - Client: axios, file-loader, react, router-dom, react-redux, react-router-dom, redux, redux-devtools-extensions, redux-thunk, socket.io-client

### DevDependencies:
   - Server: jest, nodemon, supertest
   
   - Client: babel, react-testing-library, jest

## Process 
1. Start by planning out a plan!!! Use of GitHub Projects to set up a Kanban board.
2. Create Figma design plan.  
3. Deploy to Netlify and Heroku!  
4. Set up files and folder structure for docker, react-client with redux, api, db for mongodb and test suites.    
5. Connect API and Socket server to React-Client
6. Connect mongoDB database to API

## Bugs
- [x] issues with routing with mongodb  
- [x] cors error when implementing socket.io
- [x] fetch returns undefined data
- [x] answers are encoded 
- [x] after submitting answer for final question in quiz, page will crash
- [x] sends wrong quiz score to post
- [x] socket and client integration
- [x] scores not showing as percentage
- [x] leaderboard not sorted by descending order
- [x] winner not displayed
- [x] score styling
- [x] network spam for POST request
- [ ] winner crown assignment

## Changelog

### React-Client
1. Set up pages and components   
2. Test suite!
3. Use axios to set up GET request from OpenTrivia API, and POST score data to quizzical-quiz API   
4. Implement socket.io client 

### API
1. Set up server with routes, models and controllers
2. Install socket.io and integrate into client
3. Complete GET, POST, PATCH routes 
4. Test!
5. Create DELETE route to clear database

### db 
1. Initially decided on SQL but changed to noSQL due to simplicity of data needed.   
2. Update config files and install dependencies required for mongodb.
3. Set up connectin string with mongodb and mock connection for testing
4. Set up mongodb atlas and connect to Heroku and code

## Wins & Challenges

### Wins
- Deploying to Heroku and Netlify from one repo! And deploy early!
- Amazing progress after Day 1 - socket connection establisted, routes working on API, react-redux set up!
- Set up connection between api, db and client   
- Responsive!
- Decoded answers from API
- Successful mob programming sessions

<img width="546" alt="Screenshot 2021-04-30 at 02 04 09" src="https://user-images.githubusercontent.com/58271566/116728429-ce5d0000-a9dd-11eb-848b-e2b70150af83.png">

### Challenges
- Understanding and implementing socket.io
- Testing with mongodb
- Testing with react
- Deploying mongodb
- Passing data around - may need to refactor code
- Setting up multiplayer
- React redux testing

## Code Snippet

<img width="500" alt="Screenshot 2021-04-30 at 18 00 45" src="https://user-images.githubusercontent.com/58271566/116728687-1f6cf400-a9de-11eb-9fc6-24fa0bfbc450.png">

## Future Features 
- Login / user accounts with authentication   
- High scores leaderboard for each difficulty  
- Score to include time taken to complete quiz 
- Sound effects
- Full socket.io real time implementation

## Slide Deck

https://www.canva.com/design/DAEcypURzgQ/hUwNi51yfXyb7-FrHAeP4Q/edit#1

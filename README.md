# Project: Let's Get Quizzical

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3504deb-6376-4b64-abbb-4a4536f23868/deploy-status)](https://app.netlify.com/sites/letsgetquizzical/deploys)
 
# Description

# Installation & usage

## Installation
Clone or download the repo.

## Usage

### For our app to be run on your local machine:

Clone this repo and navigate to the root directory of this repo.

Open the terminal:  
`cd react-client`   
`npm install`  
`npm run dev`   

It should automatically load on 0.0.0.0:8080

To start up client test suite:   
`npm run tests` 

****

To start docker compose with api and database containers:  
`bash _scripts/startDev.sh`    
- starts api & db services
- runs db migrations
- seeds db for development
- serves api on localhost:3000

To run our test suite:    
`bash _scripts/startTest.sh` 
- starts api & db services
- runs db migrations
- attaches to api container and triggers full test run
- no ports mapped to local host

MongoDB shell   
`bash _scripts/mongo.sh`    

To teardown docker compose completely:    
`bash _scripts/teardown.sh`  

# Technologies
- HTML, CSS, JavaScript

### Dependencies: 
   - Server: 
   
   
   - Client: 
   

### DevDependencies:
   - Server: 
   
   
   - Client: 
  

# Process 
1. Start by planning out a plan!!! Use of GitHub Projects to set up a Kanban board.
2. Create Figma design plan.  
3. Deploy to Netlify and Heroku!  
4. Set up files and folder structure for docker, react-client with redux, api, db for mongodb and test suites.    

# Bugs
- [x] issues with routing with mongodb  
- [x] cors error when implementing socket.io
- [ ] fetch returns undefined data
- [ ] answers are encoded 
- [ ] after submitting answer for final question in quiz, page will crash

# Changelog

### React-Client
1.

### API
1. Set up server with routes, models and controllers
2. Install socket.io and integrate into client
3. Complete GET, POST, PATCH routes 
4. Test!

### db 
1. Initially decided on SQL but changed to noSQL due to simplicity of data needed.   
2. Update config files and install dependencies required for mongodb.
3. Set up connectin string with mongodb and mock connection for testing
4. Set up mongodb atlas and connect to Heroku and code

# Wins & Challenges

### Wins
- Deploying to Heroku and Netlify from one repo! And deploy early!
- Amazing progress after Day 1 - socket connection establisted, routes working on API, react-redux set up!
- Set up connection between api, db and client

### Challenges
- Understanding and implementing socket.io
- Testing with mongodb
- Deploying mongodb
- Passing data around - may need to refactor code

# Future Features 
- Login / user accounts with authentication   
- High scores leaderboard for each difficulty  
- Score to include time taken to complete quiz  

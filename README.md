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


# Bugs


# Changelog

## Server-side


## Client-side


# Wins & Challenges

## Wins
- Deploying to Heroku and Netlify from one repo! And deploy early!


## Challenges


# Future Features 


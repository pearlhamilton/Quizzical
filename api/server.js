const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


// Root route
server.get('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"))

module.exports = server

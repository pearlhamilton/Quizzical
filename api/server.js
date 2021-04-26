const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


const playersRoutes = require('./routes/players');
const scoresRoutes = require('./routes/scores');

server.use('/players', playersRoutes);
server.use('/scores', scoresRoutes);

// Root route
server.get('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"))

module.exports = server

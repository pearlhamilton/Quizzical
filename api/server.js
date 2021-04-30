const express = require("express")
const cors = require('cors');
const app = express();
// const server = require("http").createServer(app);

app.use(express.json());
app.use(cors());

//ROUTES
const playersRoutes = require('./routes/players');
// const scoresRoutes = require('./routes/scores');

app.use('/players', playersRoutes);
// app.use('/scores', scoresRoutes);

// Root route
app.get('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"));

module.exports = app;

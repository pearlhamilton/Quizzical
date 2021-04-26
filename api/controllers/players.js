const Player = require('../models/Player');

async function index (req, res) {
    try {
        const players = await Player.all;
        res.status(200).json(players);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function show (req, res) {
    try {
        const player = await Player.findById(req.params.id);
        const scores = await player.scores;
        res.status(200).json({ ...player, scores });
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = { index, show }
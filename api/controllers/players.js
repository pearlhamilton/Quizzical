const Player = require('../models/Player');

async function index(req, res) {
    try {
        const players = await Player.all;
        res.status(200).json(players);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function show(req, res) {
    try {
        console.log(req.params.id)

        const player = await Player.findById(req.params.id);
        const scores = await player.scores;
        res.status(200).json({ ...player, scores });
    } catch (err) {
        res.status(500).send(err);
    };
}

async function create(req, res) {
    try {
        const player = await Player.create(req.body);
        res.status(201).json(player)
    } catch (err) {
        res.status(422).json({ err })
    }
}

async function update(req, res) {
    try {
        const player = await Player.findById(req.params.id)
        console.log(player)
        const updatedPlayer = await player.update(req.body.score)
        res.json({ player: updatedPlayer })
        res.status(204).json(updatedPlayer)
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports = { index, show, create, update }
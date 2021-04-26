const Score = require('../models/Score');

async function index (req, res) {
    try {
        const scores = await score.all;
        res.status(200).json(scores)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const score = await Score.findById(req.params.id);
        res.status(200).json(score)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const score = await Score.create(req.body);
        res.status(201).json(score)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function destroy (req, res) {
    try {
        const score = await Score.findById(req.params.id);
        const resp = await score.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, destroy }

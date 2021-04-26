const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players')
const scoresController = require('../controllers/scores')

router.get('/:player', playersController.show)

router.get('/', scoresController.index)
router.get('/:id', scoresController.show)
router.post('/', scoresController.create)
router.delete('/:id', scoresController.destroy)

module.exports = router;
const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

router.get('/', function(req, res, next) {
  res.json({list: [{id: 1, name: 'Kill Bill'}, {id: 2, name: 'Pulp Fiction'}]})
});

router.get('/:id', moviesController.getMovieById);

module.exports = router;

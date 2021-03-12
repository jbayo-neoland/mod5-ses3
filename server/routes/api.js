const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});
router.get('/movies', function(req, res, next) {
  res.json({movies: [{id: 1, name: 'Kill Bill'}]})
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

module.exports = router;

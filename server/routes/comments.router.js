const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments.controller');

/* GET comments listing. */
router.get('/', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

router.get('/:id', commentsController.getCommentById);

module.exports = router;

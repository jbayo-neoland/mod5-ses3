const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');

/* GET comments listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

router.get('/comments/:id', commentsController.getCommentById);

module.exports = router;

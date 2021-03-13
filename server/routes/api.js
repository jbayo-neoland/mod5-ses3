const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');
const usersController = require('../controllers/users');

/* GET comments listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

router.get('/comments/:id', commentsController.getCommentById);

/** GET users */
router.get('/users', usersController.getUsers);



router.get('/movies', function(req, res, next) {
  res.json({list: [{id: 1, name: 'Kill Bill'}, {id: 2, name: 'Pulp Fiction'}]})
});

module.exports = router;

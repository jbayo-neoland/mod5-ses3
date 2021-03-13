const express = require('express');
const router = express.Router();

const moviesRouter = require('./movies');

const commentsController = require('../controllers/comments');
const usersController = require('../controllers/users');


/* GET comments listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

router.get('/comments/:id', commentsController.getCommentById);

/** GET users */
router.get('/users', usersController.getUsers);


router.use('/movies', moviesRouter)

module.exports = router;

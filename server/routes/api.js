const express = require('express');
const router = express.Router();

const commentsRouter = require('./comments');
const moviesRouter = require('./movies');
const usersRouter = require('./users');

router.use('/comments', commentsRouter);
router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

module.exports = router;

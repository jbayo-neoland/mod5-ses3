const express = require('express');
const router = express.Router();

const commentsRouter = require('./comments.router');
const moviesRouter = require('./movies.router');
const usersRouter = require('./users.router');

router.use('/comments', commentsRouter);
router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

router.use('*', (req, res, next)=>{
  res.status(404).json({
    error: 'Not found'
  })
});


module.exports = router;

const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

/** GET users */
router.get('/', usersController.getUsers);

module.exports = router;

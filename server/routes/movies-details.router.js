const express = require("express");
const router = express.Router();

const detailsController = require("../controllers/movies-details-controller");

router.get("/movies/:id", detailsController.getDetailsById);

module.exports = router;

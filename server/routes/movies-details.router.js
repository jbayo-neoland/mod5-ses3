const express = require("express");
const router = express.Router();

const detailsController = require("../controllers/movies-details-controller");

router.get("/details/movies/:id", detailsController.getDetailsById);

module.exports = router;

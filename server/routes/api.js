const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router");
const commentsRouter = require("./comments.router");
const moviesRouter = require("./movies.router");
const usersRouter = require("./users.router");
const moviesDetailsRouter = require("./movies-details.router");

// const routeNeedsAuthMiddleware = require("../middlewares/routeNeedsAuth");
// const tokenIsValidMiddleware = require("../middlewares/tokenIsValid");
// const tokenBelongsToUserMiddleware = require("../middlewares/tokenBelongsToUser");

// router.use(routeNeedsAuthMiddleware);
// router.use(tokenIsValidMiddleware);
// router.use(tokenBelongsToUserMiddleware);

router.use("/auth", authRouter);
router.use("/comments", commentsRouter);
router.use("/movies", moviesRouter);
router.use("/users", usersRouter);
router.use("/movies/:id", moviesDetailsRouter);

router.use("*", (req, res, next) => {
  res.status(404).json({
    error: "Not found",
  });
});

module.exports = router;

const movieModel = require('../models/movie');

module.exports = {
  getMovieById: (async (req, res, next) => {
    let id = req.params.id;
    let movie = await movieModel.findById(id);
    res.json({movie: movie});
  })
}

const movieModel = require('../models/movie.model');

module.exports = {
  getMovieById: (async (req, res, next) => {
    let id = req.params.id;
    try{
      let movie = await movieModel.findById(id);
      return res.json({movie: movie});
    }catch(e){
      console.log('error', e);
    }
  }),
  getMovies: (async (req, res, next) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;

    let movies = await movieModel.find().limit(limit).skip(offset);
    res.json({movies: movies});
  })
}

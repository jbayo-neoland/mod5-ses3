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

 /*  getMovies: (async (req, res, next) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;
    let country = req.query.country ? parseInt(req.query.country) : undefined;
    if (country != undefined) {
      let movies = await movieModel.find({
        "countries": country
      }).limit(limit).skip(offset);

    } else {
      let movies = await movieModel.find().limit(limit).skip(offset);
    }
    res.json({
      movies: movies
    });
  }) */

}

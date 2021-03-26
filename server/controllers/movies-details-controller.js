const movieModel = require("../models/movie.model");

module.exports = {
  getDetailsById: async (req, res, next) => {
    let id = req.params.id;
    try {
      let details = await movieModel.findbyId(id);
      return res.json({ details: details });
    } catch (e) {
      console.log("Ha habido un error", e);
    }
  },
};

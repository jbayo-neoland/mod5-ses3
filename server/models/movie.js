const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ImdbSchema = new Schema({
  "rating": Number,
  "votes": Number,
  "id": Number
})

const RatingSchema = new Schema({
  rating: Number,
  numReviews: Number,
  id: Number
});

const TomatoesSchema = new Schema({
  "viewer": {
    type: RatingSchema
  },
  fresh: {type: Number, default: null},
  rotten: {type: Number, default: null},
  "critic": {
    type: RatingSchema
  },
  "lastUpdated": {
    type: Date
  }
});

var MovieSchema = new Schema({
  "_id": {type: mongoose.Schema.Types.ObjectId, required: true},
  "title": {type: String, required: true},
  "year": {type: Number, required: true},
  "runtime": {type: Number, required: true},
  "released": {type: Date, required: true},
  "poster": {type: String, default: null},
  "rated": {type: String, default: null},
  "plot": {type: String, required: true},
  "fullplot": {type: String, required: true},
  "lastupdated": {type: Date, default: null},
  "type": {type: String, required: true},
  "directors": {type: [String]},
  "imdb": {
    type: ImdbSchema
  },
  "countries": {type: [String]},
  "languages": {type: [String]},
  "cast": {type: [String]},
  "genres": {type: [String]},
  "tomatoes": {
    type: TomatoesSchema
  },
  "num_mflix_comments": {type: Number}
}, {
  timestamps: true
});

module.exports = mongoose.model('movies', MovieSchema);

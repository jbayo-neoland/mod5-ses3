const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    movie_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    text: {type: String, required: true},
    date: {type: Date}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('comments', CommentSchema);

const commentModel = require('../models/comment.model');

module.exports = {
  getCommentById: (async (req, res, next) => {
    let id = req.params.id;
    let comment = await commentModel.findById(id);
    res.json({comment: comment});
  })
}

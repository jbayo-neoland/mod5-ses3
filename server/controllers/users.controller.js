const userModel = require('../models/user.model');

module.exports = {
  getUsers: (async (req, res, next) => {
    let users = await userModel.find();
    res.json({users: users});
  })
}

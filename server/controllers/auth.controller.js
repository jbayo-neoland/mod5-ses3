const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
  login: (async (req, res, next) => {
    let user = await userModel.findOne({email: req.body.email});
    console.log(req.body);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)){
        res.json();
      }
      res.status(400).json({error: 'Password invalid'});
    } else {
      res.status(404).json({error: 'User not found'});
    }
  })
}

const userModel = require('../models/user.model');
module.exports = async function(req, res, next) {
  // if the resource needs auth
  if (req.needsAuth){
    // get the data of the decoded token in req or res
    let decodedToken = req.decodedToken;
    // find a user from the DB by _id or email (better by _id)
    let user = await userModel.findById(decodedToken._id);
    // if we have a user
    if (user) {
      // then next
      req.user = user;
      next();
    } else {
      // else
      // respond with an error
      res.status(403).json({error: 'Forbidden'});
    }
  }
  next();
}

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // if resource needs auth
  if (req.needsAuth){
    // get the token from the header
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }
    const token = authHeader.split('').slice(7).join('').trim();
    // check if the token is (jwt.)
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_KEY);
      // valid => decode the user data and pass it to the next
      if (decodedToken) {
        req.decodedToken = decodedToken;
        next();
      }
    } catch(e) {
      // not valid => res with error
      console.log('token not valid', e);
      const err = new Error('token not valid');
      err.status = 401;
      return next(err);
      // res.status(400).json({error: 'Token invalid'})
    }
  } else {

    next();
  }
}

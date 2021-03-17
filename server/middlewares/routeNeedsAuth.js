
module.exports = function(req, res, next) {
  console.log('routeNeedsAuth middleware executed');
  req.needsAuth = req.originalUrl.indexOf('/auth') === -1;
  next();
}

module.exports = function(req, res, next) {
  // if the resource needs auth
    // get the data of the decoded token in req or res
    // find a user from the DB by _id or email (better by _id)
    // if we have a user
      // then next
    // else
      // respond with an error
}

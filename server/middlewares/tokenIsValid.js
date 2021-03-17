module.exports = function(req, res, next) {
  // if resource needs auth
    // get the token from the header

    // check if the token is (jwt.)
      // valid => decode the user data and pass it to the next
      // not valid => res with error
}

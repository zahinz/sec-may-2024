function isVerifiedUser(req, res, next) {
  // isUser is a placeholder for actual user verification logic
  // check the user from database
  const isUser = true;
  if (isUser) {
    //   if user is verified, call next() to pass the request to the next middleware / controller
    return next();
  }
  const resData = {
    message: "Unauthorized access",
  };
  return res.status(401).json(resData);
}

export default isVerifiedUser;

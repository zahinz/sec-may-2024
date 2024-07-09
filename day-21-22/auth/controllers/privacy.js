function publicPath(req, res) {
  const data = {
    message: "public",
  };
  return res.status(200).json(data);
}

function privatePath(req, res) {
  // get data from decoded token
  // req.user is available because of isAuth middleware
  const userData = req.user;
  const data = {
    message: "private",
    data: userData,
  };
  return res.status(200).json(data);
}

const privacyController = {
  publicPath,
  privatePath,
};

export default privacyController;

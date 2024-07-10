function getHealth(req, res) {
  const name = process.env.npm_package_name;
  const version = process.env.npm_package_version;
  res.json({ status: "ok", name: name, version: version });
}

function postHealth(req, res) {
  const body = req.body;
  res.json({
    status: "ok",
    body,
  });
}

const healthController = {
  getHealth,
  postHealth,
};

export default healthController;

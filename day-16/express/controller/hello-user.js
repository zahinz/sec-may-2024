function helloUser(req, res) {
  const params = req.params;
  console.log(params.name);
  return res.send(`Hello ${params.name}`);
}

export default helloUser;

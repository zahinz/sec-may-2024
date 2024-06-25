function helloUserAge(req, res) {
  const name = req.params.name;
  const dob = req.params.dob;
  // check if dob is a number
  if (isNaN(dob)) {
    return res.send("Please provide a valid date of birth");
  }
  const year = new Date().getFullYear();
  const age = year - dob;
  return res.send(`Hello ${name}, you are ${age} years old`);
}

export default helloUserAge;

import fs from "fs";
import path from "path";

function register(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // 1. validation
  // all fields are required
  // if any field is empty, return error with status code 400
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // 2. check valid email with regex
  // if email is invalid, return error with status code 400
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  // 3. check password and confirmPassword
  // if password and confirmPassword do not match, return error with status code 400
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password and Confirm Password do not match",
    });
  }

  // standard convention for response data
  const resData = {
    message: "User registered successfully",
    data: {
      username,
      email,
    },
  };

  // save to file in data folder file name users.json
  const usersFilePath = path.join(process.cwd(), "data", "users.json");
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  const users = JSON.parse(usersData);

  // check if user already exists
  // if user already exists, return error with status code 400
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // add user to users array
  users.push({
    username,
    email,
    password,
  });

  // write to file
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  return res.json(resData);
}

export default register;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
async function userSignup(req, res) {
  const { username, email, password, radio } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.send("Email already registered.");
  }
  const hassedPassword = await bcrypt.hash(password, 10);
  await userModel.create({
    username: username,
    email: email,
    password: hassedPassword,
    role: radio,
  });
  return res.redirect("/user/login");
}
async function userLogin(req, res) {
  const { email, password } = req.body;
  const isEmail = await userModel.findOne({
    email: email,
  });
  if (!isEmail) {
    return res.send("Email or passwod is invalid");
  }
  const isPassword = await bcrypt.compare(password, isEmail.password);
  if (!isPassword) {
    return res.send("Email or password is invalid");
  }
  const token = jwt.sign({ email: isEmail.email }, process.env.JWT_KEY);
  res.cookie("token", token,{ maxAge: 10 * 365 * 24 * 60 * 60 * 1000});
  res.redirect("/");
}
module.exports = {
  userSignup,
  userLogin,
};

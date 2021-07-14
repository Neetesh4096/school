const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  res.status(200).json({
    status: true,
    content: {
      data: newUser,
    },
  });
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: failed,
      content: "Enter Username and Password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: failed,
      content: "Invalid Username or Password",
    });
  }
  const id = user._id;
  const token = jwt.sign({ id }, "intern");

  res.status(200).json({
    status: true,
    content: {
      data: user,
    },
    token: token,
  });
};

exports.getall = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    status: true,
    content: {
      data: user,
    },
  });
};

exports.getuser = async (req, res, next) => {
  console.log(req.params.id)
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: true,
    content: {
      data: user,
    },
  });
};

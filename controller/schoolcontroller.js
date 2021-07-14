const mongoose = require("mongoose");
const School = require("./../models/schoolModel");

exports.getschool = async (req, res, next) => {
  const school = await School.find();
  res.status(200).json({
    status: true,
    content: {
      data: school,
    },
  });
};

exports.getstudent = async (req, res, next) => {
  const student = await School.find();
};

exports.create = async (req, res, next) => {
  const school = await School.create({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  });

  res.status(200).json({
    status: true,
    content: {
      data: school,
    },
  });
};

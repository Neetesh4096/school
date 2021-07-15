const mongoose = require("mongoose");
const School = require("./../models/schoolModel");
const Student = require("./../models/studentModel");

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
  const school = await School.find();
  var final = [];
  school.forEach((element) => {
    console.log(element._id);
    let student = Student.find({ schoolId: element._id }).then((err) => {
      let result = [{ data: element }, err];
      final.push(result);
    });
  });
  console.log(final);
  res.status(200).json(final);
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

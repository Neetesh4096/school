const Student = require("../models/studentModel");
const mongoose = require("mongoose");

exports.create = async (req, res, next) => {
  const newStudent = await Student.create({
    name: req.body.name,
    userId: req.body.userId,
    schoolId: req.body.schoolId,
  });

  res.status(200).json({
    status: true,
    content: {
      data: newStudent,
    },
  });
};

exports.getall = async (req, res, next) => {
  const student = await Student.find();

  res.status(200).json({
    status: true,
    content: {
      data: student,
    },
  });
};

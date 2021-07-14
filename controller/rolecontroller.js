const mongoose = require("mongoose");
const Role = require("./../models/rolemodel");

exports.create = async (req, res, next) => {
  const newrole = await Role.create({
    name: req.body.name,
    scopes: req.body.scopes,
  });
  res.status(200).json({
    status: true,
    content: {
      data: newrole,
    },
  });
};

exports.getall = async (req, res, next) => {
  const role = await Role.find();
  res.status(200).json({
    status: true,
    content: {
      data: role,
    },
  });
};

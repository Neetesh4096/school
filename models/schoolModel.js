const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const schoolSchema =new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  city: {
    type: String,
    required: [true, "Please enter city"],
  },
  state: {
    type: String,
    required: [true, "Please enter state"],
  },
  country: {
    type: String,
    required: [true, "Please enter country"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: null,
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;

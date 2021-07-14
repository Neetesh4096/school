const { ObjectID } = require("bson");

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  schoolId: {
    ref: "School",
    type: mongoose.Types.ObjectId,
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

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

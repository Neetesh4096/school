const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  id: {
    type: ObjectID,
  },
  name: {
    type: String,
  },
  scopes: {
    type: Array,
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

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const studentRoutes = require("./routes/studentRoutes");
const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());
app.use("/user", userRoutes);
app.use("/role", roleRoutes);
app.use("/student", studentRoutes);
app.use("/school", schoolRoutes);

module.exports = app;

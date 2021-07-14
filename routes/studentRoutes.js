const express = require("express");
const router = express.Router();
const studentcontroller = require("./../controller/studentcontroller");

router.post("/", studentcontroller.create);
router.get("/", studentcontroller.getall);

module.exports = router;

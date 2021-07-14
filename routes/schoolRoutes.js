const express = require("express");
const router = express.Router();
const schoolcontroller = require("./../controller/schoolcontroller");

router.get("/", schoolcontroller.getschool);
router.get("/students", schoolcontroller.getstudent);
router.post("/", schoolcontroller.create);

module.exports = router;

const { Router } = require("express");
const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller");

router.post("/signup", usercontroller.signup);
router.post("/signin", usercontroller.signin);
router.get("/", usercontroller.getall);
router.get("/:id", usercontroller.getuser);

module.exports = router;

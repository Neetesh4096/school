const express = require('express');
const router = express.Router();
const rolecontroller = require('./../controller/rolecontroller')

router.post('/',rolecontroller.create);
router.get('/',rolecontroller.getall);

module.exports = router;
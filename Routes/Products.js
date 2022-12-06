const express = require('express');
const router = express.Router();

const {testing,getallproducts} = require("../Controllers/Products");

router.route("/testing").get(testing);
router.route("/").get(getallproducts);

module.exports = router;
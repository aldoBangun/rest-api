const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/items.controller");

router.route("/").get(getItems);

module.exports = router;

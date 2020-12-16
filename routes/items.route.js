const express = require("express");
const router = express.Router();
const {
   getItems,
   getItem,
   deleteItems,
   deleteItem,
   addItem,
   updateItem,
} = require("../controllers/items.controller");

router.route("/").get(getItems).post(addItem).delete(deleteItems);

router.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

module.exports = router;

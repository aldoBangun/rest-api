const express = require("express");
const router = express.Router();
const {
   addUser,
   getUsers,
   getUser,
   deleteUsers,
   deleteUser,
   updateUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers).post(addUser).delete(deleteUsers);

router.route("/:id").get(getUser).delete(deleteUser).post(updateUser);

module.exports = router;

const {
   addUser,
   getUsers,
   getUser,
   deleteUsers,
   deleteUser,
   updateUser,
} = require("../models/users.model");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
   addUser: (req, res) => {
      const salt = genSaltSync(10);
      req.body.password = hashSync(req.body.password, salt);

      addUser(req.body, (err, results) => {
         if (err) {
            res.status(500).json({
               success: 0,
               message: err.message,
            });
         } else {
            res.status(200).json({
               success: 1,
               data: results,
            });
         }
      });
   },
   getUsers: (req, res) => {
      getUsers((err, results) => {
         if (err) {
            res.status(500).json({
               success: 0,
               message: err.message,
            });
         } else {
            res.status(200).json({
               success: 1,
               data: results,
            });
         }
      });
   },
   getUser: (req, res) => {
      const { id } = req.params;
      getUser(id, (err, results) => {
         if (err) {
            if (err.status === 404) {
               res.status(404).json({
                  success: 0,
                  message: `User with an id of ${id} not found!`,
               });
            } else {
               res.status(500).json({
                  success: 0,
                  message: err.message,
               });
            }
         } else {
            res.status(200).json({
               success: 1,
               data: results,
            });
         }
      });
   },
   deleteUsers: (req, res) => {
      deleteUsers((err, results) => {
         if (err) {
            res.status(500).json({
               success: 0,
               message: err.message,
            });
         } else {
            req.status(200).json({
               success: 0,
               message: "Successfully delete all users",
            });
         }
      });
   },
   deleteUser: (req, res) => {
      const { id } = req.params;
      deleteUser(id, (err, results) => {
         if (err) {
            if (err.status) {
               res.status(err.status).json({
                  success: 0,
                  message: `Cannot proccess request to an id of${id}`,
               });
            } else {
               res.status(500).json({
                  success: 0,
                  message: err.message,
               });
            }
         }
      });
   },
   updateUser: (req, res) => {
      req.body.id = req.params.id;
      const salt = genSaltSync(10);
      req.body.password = hashSync(req.body.password, salt);
      updateUser(req.body, (err, results) => {
         if (err) {
            if (err.status) {
               res.status(err.status).json({
                  success: 0,
                  message: `Cannot proccess request to an id of ${req.params.id}`,
               });
            } else {
               res.status(500).json({
                  success: 0,
                  message: err.message,
               });
            }
         } else {
            res.status(200).json({
               success: 1,
               data: results,
            });
         }
      });
   },
};

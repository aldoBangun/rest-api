const {
   getItems,
   getItem,
   deleteItems,
   deleteItem,
   addItem,
   updateItem,
} = require("../models/items.model");

module.exports = {
   getItems: (req, res) => {
      getItems((err, results) => {
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
   getItem: (req, res) => {
      const { id } = req.params;

      getItem(id, (err, results) => {
         if (err) {
            if (err.status === 404) {
               res.status(404).json({
                  success: 0,
                  message: `Item with id ${id} not found`,
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
   deleteItems: (req, res) => {
      deleteItems((err, results) => {
         if (err) {
            res.status(500).json({
               success: 0,
               message: err.message,
            });
         } else {
            res.status(200).json({
               success: 1,
               message: "Successfully deleted all items",
               results,
            });
         }
      });
   },
   deleteItem: (req, res) => {
      const { id } = req.params;

      deleteItem(id, (err, results) => {
         if (err) {
            if (err.status === 400) {
               res.status(400).json({
                  success: 0,
                  message: `Cannot proccess request to data with an id of ${id}`,
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
               message: `Successfuly deleted an item with an id of ${id}`,
            });
         }
      });
   },
   addItem: (req, res) => {
      addItem(req.body, (err, results) => {
         if (err) {
            if (err.status === 400) {
               res.status(400).json({
                  success: 0,
                  message: "Your data is not valid",
                  data: results,
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
               message: "Data successfully created!",
               data: results,
            });
         }
      });
   },
   updateItem: (req, res) => {
      req.body.id = req.params.id;
      updateItem(req.body, (err, results) => {
         if (err) {
            if (err.status === 400) {
               res.status(400).json({
                  success: 0,
                  message: `Cannot process request to data with an id of ${req.params.id}`,
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
               message: `Successfully update a data with an id of ${req.params.id}`,
               data: results,
            });
         }
      });
   },
};

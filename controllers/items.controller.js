const { getItems } = require("../models/items.model");

module.exports = {
   getItems: (req, res) => {
      getItems((err, results) => {
         if (err) {
            res.status(500).json({
               success: 0,
               message: err.message,
            });
            return;
         }
         res.status(200).json({
            success: 1,
            data: results,
         });
      });
   },
};

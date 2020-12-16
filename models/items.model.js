const sql = require("../config/db.config");

module.exports = {
   getItems: (callback) => {
      sql.query("SELECT * FROM items", (err, results) => {
         if (err) {
            return callback(err);
         }
         callback(null, results);
      });
   },
};

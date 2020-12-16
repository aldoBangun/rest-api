const sql = require("../config/db.config");

module.exports = {
   getItems: (callback) => {
      sql.query("SELECT * FROM items", (err, results) => {
         if (err) return callback(err);
         callback(null, results);
      });
   },
   getItem: (id, callback) => {
      sql.query("SELECT * FROM items WHERE id = ?", [id], (err, results) => {
         if (err) return callback(err);
         if (!results.length) return callback({ status: 404 });
         callback(null, results[0]);
      });
   },
   deleteItems: (callback) => {
      sql.query("DELETE FROM items", (err, results) => {
         if (err) return callback(err);
         callback(null, results);
      });
   },
   deleteItem: (id, callback) => {
      sql.query("DELETE FROM items WHERE id = ?", [id], (err, results) => {
         if (err) return callback(err);
         if (results.affectedRows < 1) return callback({ status: 400 });
         callback(null, results);
      });
   },
   addItem: (newItem, callback) => {
      sql.query("INSERT INTO items SET ?", [newItem], (err, results) => {
         if (err) return callback(err);
         if (results.affectedRows < 1) return callback(null, newItem);
         callback(null, { id: results.insertId, ...newItem });
      });
   },
   updateItem: (newData, callback) => {
      const { name, price, cost, stock, description, id } = newData;
      sql.query(
         "UPDATE items SET name = ?, price = ?, cost = ?, stock = ?, description = ? WHERE id = ?",
         [name, price, cost, stock, description, id],
         (err, results) => {
            if (err) return callback(err);
            if (results.affectedRows < 1) return callback({ status: 400 });
            callback(null, newData);
         }
      );
   },
};

const sql = require("../config/db.config");

module.exports = {
   addUser: (newUser, callback) => {
      sql.query("INSERT INTO users SET ?", [newUser], (err, results) => {
         if (err) return callback(err);
         callback(null, { id: results.insertId, ...newUser });
      });
   },
   getUsers: (callback) => {
      sql.query("SELECT * FROM users", (err, results) => {
         if (err) return callback(err);
         callback(null, results);
      });
   },
   getUser: (id, callback) => {
      sql.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
         if (err) return callback(err);
         if (!results.length) return callback({ status: 404 });
         callback(null, results[0]);
      });
   },
   deleteUsers: (callback) => {
      sql.query("DELETE FROM users", (err, results) => {
         if (err) return callback(err);
         callback(null, results);
      });
   },
   deleteUser: (id, callback) => {
      sql.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
         if (err) return callback(err);
         if (results.affectedRows < 1) return callback({ status: 400 });
         callback(null, results);
      });
   },
   updateUser: (newData, callback) => {
      const { firstName, lastName, email, password, gender, id } = newData;
      sql.query(
         "UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ?, gender = ? WHERE id = ?",
         [firstName, lastName, email, password, gender, id],
         (err, results) => {
            if (err) return callback(err);
            console.log(results);
            if (results.affectedRows < 1) return callback({ status: 400 });
            callback(null, newData);
         }
      );
   },
};

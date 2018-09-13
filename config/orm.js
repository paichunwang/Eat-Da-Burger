// const connection = require("../config/connection.js");
let connection = require("../config/connnection");

let orm = {
  selectAll: (tableInput, cb) => {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (database, tableInput, userInput, cb) => {
    let queryString = `INSERT INTO ${database} (${tableInput}) VALUE ("${userInput}")`;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result); // this gets passed back to burger.js
    });
  },
  updateOne: (tableInput, id, cb) => {
    // console.log("Update Ran")
    // console.log(`${tableInput} ${id.id}`)
    let queryString = `UPDATE ${tableInput} SET devoured=1 WHERE ${id.id};`; // need to chang this to match the object passed from burger and burger_controller.js
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result); // this gets passes back to burger.js
    });
  }
  // update: function(table, objColVals, condition, cb) {
  //   var queryString = "UPDATE " + table;

  //   queryString += " SET ";
  //   queryString += objToSql(objColVals);
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }
};

module.exports = orm;

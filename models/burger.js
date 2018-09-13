const orm = require("../config/orm");

let burger = {
  all: cb => {
    orm.selectAll("burger", res => {
      cb(res);
    });
  },
  create: (tableInput, userInput, cb) => {
    orm.insertOne("burger", tableInput, userInput, res => {
      cb(res); // this gets passed back to burger_controller.js
    });
  },
  update: (id, cb) => {
    console.log("Orm Ran")
    orm.updateOne("burger", id, res => {
      cb(res); // this get passed back to the burger_controller.js
    });
  }
};

module.exports = burger;

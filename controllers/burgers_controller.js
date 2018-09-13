let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", (req, res) => {
  console.log("Default Page /");
  burger.all(data => {
    let burgerObj = {
      burger: data
    };
    // let burgerObj = ["hello"]
    res.render("index", burgerObj);
  });
});

router.post("/api/burger", (req, res) => {
  console.log("Running Add Burger Checking Name");
  burger.create(
    ["burger_name"],
    [req.body.name], // this will need to be change to get the value of text box
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId }); // used to send back the result after burger_controller > burger > orm runs
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  let id = `id = ${req.params.id}`;

  console.log("condition", id);

  burger.update(
    {
      id: id
    },
    result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        console.log("Error Formed");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// router.get("/devoured/:id", (req, res) => {});

module.exports = router; // why does this export custom methods too?

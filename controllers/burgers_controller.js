let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", (req, res) => {
    console.log("Default Page /")
    res.render("index");
});

router.get("/devoured/:id", (req, res) => {
    console.log(`Devoured: ${req.body.id}`)
});

module.exports = router; // why does this export custom methods too?
var express = require("express");
var router = express.Router();
const pool = require("../queries.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  pool.query("SELECT * FROM notes", (error, results) => {
    if (error) {
      res.json({ messgae: "error" });
      throw error;
    }

    res.json(results.rows);
  });
});

module.exports = router;

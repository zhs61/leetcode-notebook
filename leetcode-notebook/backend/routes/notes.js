var express = require("express");
var router = express.Router();
const pool = require("../queries.js");

/* CREATE new post */
router.post("/", function (req, res, next) {
  const { note, tags } = req.body;
  console.log("req body ", req.body);
  console.log("tags ", tags);
  console.log("note ", note);
  pool.query(
    "INSERT INTO notes (note, tags) VALUES ($1, $2)",
    [note, tags],
    (error, results) => {
      if (error) {
        res.json(error);
        throw error;
      }

      res.json({ message: "good" });
    }
  );
});

/* UPDATE new post */
router.put("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  const { note, tags } = req.body;
  pool.query(
    "UPDATE notes SET note = $1, tags = $2 WHERE id = $3",
    [note, tags, id],
    (error, results) => {
      if (error) {
        res.json(error);
        throw error;
      }

      res.json({ message: "Successfully updated" });
    }
  );
});

module.exports = router;

const express = require("express");
const db = require("../dbConfig");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error getting accounts"
      });
    });
});

router.get("/:id", validatePostId, (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/", tooLong, (req, res) => {});

router.post("/", tooLong, (req, res) => {});

// custom middleware

function validatePostId(req, res, next) {
  dataBase.get(req.params.id).then(project => {
    if (!project) {
      res.status(404).send({ message: "No project with the specified ID" });
    } else {
      next();
    }
  });
}

module.exports = router;

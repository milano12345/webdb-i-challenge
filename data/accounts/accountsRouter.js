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

router.get("/:id", (req, res) => {
  db.select("*")
    .from("accounts")
    .where("id", req.params.id)
    .then(accounts => {
      if (accounts < 1) {
        res.status(404).send({ message: "No accounts matching provided ID" });
      } else {
        res.status(200).send(accounts);
      }
    })
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  db.delete("*")
    .from("accounts")
    .where("id", req.params.id)
    .then(accounts => {
      res.status(200).send({ message: "Account was deleted" });
    })
    .catch(err => res.send(err));
});

router.put("/", (req, res) => {});

router.post("/", (req, res) => {});

// custom middleware

module.exports = router;

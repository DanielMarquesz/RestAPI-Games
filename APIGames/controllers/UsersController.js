const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

router.post("/auth/:email", (req, res) => {
  // Find by parameters
  let mail = req.params.email;
  let { email, password } = req.body;

  Users.findAll({ where: { email: mail } })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.send(err));
});

module.exports = router;

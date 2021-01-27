const { response } = require("express");
const express = require("express");
const Joi = require("joi");
const Games = require("../models/Games");
const { gamesSchema } = require("../validations/models/gamesSchema");
const router = express.Router();

router.get("/list", async (req, res) => {
  await Games.findAll()
    .then((games) => {
      res.status(200).json(games);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
});

router.get("/list/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Games.findByPk(id)
      .then((game) => {
        if (game === null) {
          res.sendStatus(404);
        } else {
          res.status(200).json(game);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await gamesSchema.validateAsync(req.body);
  } catch (error) {
    res.send(error);
  }

  // console.log(resultado);

  let { title, description, price, quantity, avaiable, year, cover } = req.body;

  await Games.create({
    title,
    description,
    price,
    avaiable,
    quantity,
    year,
    cover,
  })
    .then((games) => {
      res.status(201).json(games);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    let {
      title,
      description,
      price,
      quantity,
      year,
      avaiable,
      cover,
    } = req.body;

    await Games.update(
      {
        title,
        description,
        price,
        quantity,
        year,
        avaiable,
        cover,
      },
      { where: { id: id } }
    )
      .then(() => Games.findAll({ where: { id: id } }))
      .then((games) => {
        res.status(201).send(games);
      })
      .catch((err) => {
        res.send(err).json(err);
      });
  }
});

router.patch("/edit/:id", async (req, res) => {
  let avaiable = req.body.avaiable;
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Games.update(
      {
        avaiable,
      },
      { where: { id: req.params.id } }
    ).then((game) => {
      res.sendStatus(200);
    });
  }
});

router.delete("/remove/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Games.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

module.exports = router;

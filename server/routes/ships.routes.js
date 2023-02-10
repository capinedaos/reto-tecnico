const express = require("express");

// Controllers
const {
  getAllShips,
  createShip,
  updateShip,
  deleteShip,
} = require("../controllers/ships.controller");

// Utils
const { shipExists } = require("../middlewares/ships.middleware");
const shipsRouter = express.Router();

shipsRouter.post("/", createShip);
shipsRouter.get("/", getAllShips);
shipsRouter.patch("/:id", shipExists, updateShip);
shipsRouter.delete("/:id", shipExists, deleteShip);

module.exports = { shipsRouter };

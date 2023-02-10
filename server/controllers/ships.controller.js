// Models
const { Ship } = require("../models/ship.model");
// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createShip = catchAsync(async (req, res, next) => {
  const { name, typeShip, fuelType, startDate, country } = req.body;

  const newShip = await Ship.create({
    name,
    typeShip,
    fuelType,
    startDate,
    country,
  });

  res.status(201).json({
    status: "success",
    newShip,
  });
});

const getAllShips = catchAsync(async (req, res, next) => {
  const ships = await Ship.findAll();

  if (ships.length === 0) {
    await Ship.create({
      name: "Gemini",
      typeShip: "Vehiculo Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1968-05-21",
      country: "Rusia",
    });
    await Ship.create({
      name: "Apolo",
      typeShip: "Vehiculo Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1547-02-16",
      country: "EEUU",
    });
    await Ship.create({
      name: "Mercury",
      typeShip: "Vehiculo Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1889-11-03",
      country: "Japon",
    });
    await Ship.create({
      name: "Explorer",
      typeShip: "Vehiculo no Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1865-12-30",
      country: "Japon",
    });
    await Ship.create({
      name: "Soho",
      typeShip: "Vehiculo no Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1996-07-18",
      country: "Rusia",
    });
    await Ship.create({
      name: "Mensajero",
      typeShip: "Vehiculo no Tripulado",
      fuelType: "Solido-Queroseno",
      startDate: "1845-03-24",
      country: "EEUU",
    });
    await Ship.create({
      name: "Saturno v",
      typeShip: "Vehiculo de Lanzadera",
      fuelType: "Solido-Queroseno",
      startDate: "1996-08-30",
      country: "EEUU",
    });
    await Ship.create({
      name: "Atlas v",
      typeShip: "Vehiculo de Lanzadera",
      fuelType: "Solido-Queroseno",
      startDate: "1846-08-18",
      country: "Japon",
    });
    await Ship.create({
      name: "Falcon IX",
      typeShip: "Vehiculo de Lanzadera",
      fuelType: "Solido-Queroseno",
      startDate: "1665-06-20",
      country: "Rusia",
    });
  }

  res.status(200).json({
    status: "success",
    ships,
  });
});

const updateShip = catchAsync(async (req, res, next) => {
  const { ship } = req;
  const { name, typeShip, fuelType, startDate, country } = req.body;

  await ship.update({
    name,
    typeShip,
    fuelType,
    startDate,
    country,
  });

  res.status(200).json({ status: "success", ship });
});

const deleteShip = catchAsync(async (req, res, next) => {
  const { ship } = req;
  await ship.destroy();
  res.status(200).json({ status: "success" });
});

module.exports = {
  createShip,
  getAllShips,
  updateShip,
  deleteShip,
};

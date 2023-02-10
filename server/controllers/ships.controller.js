// Models
const { Ship } = require("../models/ship.model");
// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createShip = catchAsync(async (req, res, next) => {
  const {
    name,
    typeShip,
    weight,
    fuelType,
    power,
    autonomy,
    startDate,
    finalDate,
    height,
    country,
  } = req.body;

  const newShip = await Ship.create({
    name,
    typeShip,
    weight,
    fuelType,
    power,
    autonomy,
    startDate,
    finalDate,
    height,
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
      weight: "2500",
      fuelType: "Solido-Queroseno",
      power: "15.000 caballos",
      autonomy: "2500 km",
      startDate: "1968-05-21",
      finalDate: "1993-08-13",
      height: "1800",
      country: "Rusia",
    });
    await Ship.create({
      name: "Apolo",
      typeShip: "Vehiculo Tripulado",
      weight: "3500",
      fuelType: "Solido-Queroseno",
      power: "17.000 caballos",
      autonomy: "2300 km",
      startDate: "1547-02-16",
      finalDate: "1648-06-25",
      height: "1600",
      country: "EEUU",
    });
    await Ship.create({
      name: "Mercury",
      typeShip: "Vehiculo Tripulado",
      weight: "2400",
      fuelType: "Solido-Queroseno",
      power: "14.000 caballos",
      autonomy: "2900 km",
      startDate: "1889-11-03",
      finalDate: "1995-02-18",
      height: "800",
      country: "Japon",
    });
    await Ship.create({
      name: "Explorer",
      typeShip: "Vehiculo no Tripulado",
      weight: "1800",
      fuelType: "Solido-Queroseno",
      power: "1700 caballos",
      autonomy: "9500 km",
      startDate: "1865-12-30",
      finalDate: "1965-10-05",
      height: "2100",
      country: "Japon",
    });
    await Ship.create({
      name: "Soho",
      typeShip: "Vehiculo no Tripulado",
      weight: "2000",
      fuelType: "Solido-Queroseno",
      power: "2300 caballos",
      autonomy: "8300 km",
      startDate: "1996-07-18",
      finalDate: "2013-09-13",
      height: "1300",
      country: "Rusia",
    });
    await Ship.create({
      name: "Mensajero",
      typeShip: "Vehiculo no Tripulado",
      weight: "1856",
      fuelType: "Solido-Queroseno",
      power: "2800 caballos",
      autonomy: "25000 km",
      startDate: "1845-03-24",
      finalDate: "1863-09-14",
      height: "1100",
      country: "EEUU",
    });
    await Ship.create({
      name: "Saturno v",
      typeShip: "Vehiculo de Lanzadera",
      weight: "6500",
      fuelType: "Solido-Queroseno",
      power: "35.000 caballos",
      autonomy: "23000 km",
      startDate: "1996-08-30",
      finalDate: "2014-11-12",
      height: "856",
      country: "EEUU",
    });
    await Ship.create({
      name: "Atlas v",
      typeShip: "Vehiculo de Lanzadera",
      weight: "7200",
      fuelType: "Solido-Queroseno",
      power: "37.000 caballos",
      autonomy: "16000 km",
      startDate: "1846-08-18",
      finalDate: "1896",
      height: "1452",
      country: "Japon",
    });
    await Ship.create({
      name: "Falcon IX",
      typeShip: "Vehiculo de Lanzadera",
      weight: "6523",
      fuelType: "Solido-Queroseno",
      power: "45.000 caballos",
      autonomy: "19333 km",
      startDate: "1665-06-20",
      finalDate: "1758-08-15",
      height: "1900",
      country: "Rusia",
    });
  }

  res.status(200).json({
    status: "success",
    ships,
  });
});

const getShipById = catchAsync(async (req, res, next) => {
  const { ship } = req;

  res.status(200).json({
    status: "success",
    ship,
  });
});

const updateShip = catchAsync(async (req, res, next) => {
  const { ship } = req;
  const {
    name,
    weight,
    fuelType,
    power,
    autonomy,
    startDate,
    finalDate,
    height,
    country,
  } = req.body;

  await ship.update({
    name,
    weight,
    fuelType,
    power,
    autonomy,
    startDate,
    finalDate,
    height,
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
  getShipById,
  updateShip,
  deleteShip,
};

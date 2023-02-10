// Models
const { Ship } = require("../models/ship.model");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const shipExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const ship = await Ship.findOne({ where: { id } });

  if (!ship) {
    return next(new AppError("Vehiculo no encontrado", 404));
  }

  req.ship = ship;
  next();
});

module.exports = { shipExists };

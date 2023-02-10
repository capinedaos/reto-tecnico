const { db, DataTypes } = require("../utils/database.util");

// Create our first model (table)
const Ship = db.define("ship", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeShip: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fuelType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Ship };

const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Booking', {
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE
  });
};

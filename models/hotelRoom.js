const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('HotelRoom', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    availableFrom: DataTypes.DATE,
    availableTo: DataTypes.DATE
  });
};

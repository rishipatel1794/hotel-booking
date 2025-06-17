const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize);
db.HotelRoom = require('./hotelRoom')(sequelize);
db.Booking = require('./booking')(sequelize);

db.User.hasMany(db.HotelRoom, { foreignKey: 'ownerId' });
db.HotelRoom.belongsTo(db.User, { foreignKey: 'ownerId' });

db.User.hasMany(db.Booking);
db.HotelRoom.hasMany(db.Booking);
db.Booking.belongsTo(db.User);
db.Booking.belongsTo(db.HotelRoom);

module.exports = db;

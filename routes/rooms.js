const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { HotelRoom } = require('../models');

// Create room
router.post('/', auth, async (req, res) => {
  const room = await HotelRoom.create({ ...req.body, ownerId: req.user.id });
  res.json(room);
});

// Get all rooms
router.get('/', async (req, res) => {
  const rooms = await HotelRoom.findAll();
  res.json(rooms);
});

// Search rooms
router.get('/search', async (req, res) => {
  const { checkIn, checkOut } = req.query;
  const rooms = await HotelRoom.findAll({
    where: {
      availableFrom: { [require('sequelize').Op.lte]: checkIn },
      availableTo: { [require('sequelize').Op.gte]: checkOut },
    }
  });
  res.json(rooms);
});

// Delete room (owner only)
router.delete('/:id', auth, async (req, res) => {
  const room = await HotelRoom.findByPk(req.params.id);
  if (!room || room.ownerId !== req.user.id)
    return res.status(403).json({ error: 'Forbidden' });
  await room.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;

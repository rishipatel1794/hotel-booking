const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Booking, HotelRoom } = require('../models');

router.post('/', auth, async (req, res) => {
  const { roomId, checkIn, checkOut } = req.body;
  const room = await HotelRoom.findByPk(roomId);
  if (!room) return res.status(404).json({ error: 'Room not found' });

  // Check if booking overlaps
  const existing = await Booking.findOne({
    where: {
      HotelRoomId: roomId,
      checkIn: { [require('sequelize').Op.lt]: checkOut },
      checkOut: { [require('sequelize').Op.gt]: checkIn }
    }
  });
  if (existing) return res.status(400).json({ error: 'Room already booked for these dates' });

  const booking = await Booking.create({
    UserId: req.user.id,
    HotelRoomId: roomId,
    checkIn,
    checkOut
  });
  res.json(booking);
});

module.exports = router;

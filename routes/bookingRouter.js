const express = require('express');
const protect = require('../Middlewares/protect');

const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/checkoutsession/:appointmentId' , protect , bookingController.getCheckoutSession);
router.post('/BookingCheckout' , protect , bookingController.createBookingCheckout);

module.exports = router;

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Appointment = require('../Models/appointmentModel');
const Doctor = require('../Models/doctorModel');
// const Booking = require('../Models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');


// Utility function to create a product
async function createProduct(name) {
  const product = await stripe.products.create({
    name,
  });

  return product;
}

// Utility function to create a price
async function createPrice(product, price, currency) {
  const stripePrice = await stripe.prices.create({
    unit_amount: price * 100,  // Assuming appointment.price is in cents so *100
    currency,     //for egypt 'egp' Replace with the appropriate currency code 'usd' 
    product: product.id,
  });

  return stripePrice;
}

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findById(req.params.appointmentId);
  if (appointment.status == 'booked')
  return next(new AppError("This appointment has been booked before", 401));

  // Create product and price objects
  const product = await createProduct(appointment.type);
  const price = await createPrice(product, appointment.price, 'egp');

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: req.user.email,
    client_reference_id: req.params.appointmentId,
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.client}/success`,
    cancel_url: `${process.env.client}/cancel`,
  });

  res.status(200).json({
    status: 'success',
    session,
  });
});


// Utility function to give the status and appointmentId of paying from strip
async function retrieveSession(sessionId,reqType) {
  return new Promise((resolve, reject) => {
    stripe.checkout.sessions.retrieve(sessionId, function(err, session) {
      if (err) {
        reject(err); // Pass the error to the promise's rejection handler
      } else {
        if(reqType == 'payment_status'){
          resolve(session.payment_status); // Pass the payment_status to the promise's resolution handler
        }else if(reqType == 'client_reference_id'){
          resolve(session.client_reference_id);  // Pass the client_reference_id to the promise's resolution handler
        }
      }
    });
  });
}


exports.createBookingCheckout = catchAsync(async(req,res,next) =>{

  const patientId = req.user._id;
  const { appointmentId , sessionId } = req.body;
  const appointment = await Appointment.findById(appointmentId);
  const doctor = await Doctor.findById(appointment.doctor);
  const price = appointment.price ;
  const paymentStatus = await retrieveSession(sessionId,'payment_status');
  const clientReferenceId = await retrieveSession(sessionId,'client_reference_id');

  if (paymentStatus == "unpaid")
  return next(new AppError("you shoud pay first to book the appointment", 401));

  if (appointmentId != clientReferenceId)
  return next(new AppError("you shoud pay your session first to book the appointment", 401));

  if (!appointmentId)
  return next(new AppError("there is wrong with the appointment id from body req", 401));

  if (!sessionId)
  return next(new AppError("there is wrong with the session id from body req", 401));

  if (appointment.status == 'booked')
  return next(new AppError("This appointment has been booked before but contact us because you have paid to send your mony back", 401));

  appointment.status = 'booked';
  appointment.paid = 'true';
  appointment.patient = patientId;
  appointment.payTime = new Date();
  doctor.patients.push(patientId);
  // await Booking.create({appointmentId , patientId , price});
  await doctor.save({ validateBeforeSave: false });
  await appointment.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
  });

});

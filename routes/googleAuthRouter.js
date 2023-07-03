const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');

const User = require('../Models/userModel');

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const jwtSecret = process.env.JWT_SECRET;

// Initialize Express app
const router = express.Router();

// async function createUser(name, profilePicture, email) {
//   newUser = new User({
//     name,
//     email,
//     profilePicture,
//     confirmed: true,
//     active: true,
//   });
//   await newUser.save({ validateBeforeSave: false });
// }

// Configure passport with GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        picture: profile.photos[0].value,
      };
      //createUser(user.name, user.picture, user.email);
      const token = jwt.sign(user.email, jwtSecret);

      done(null, token);
    }
  )
);

// Google Sign-In route
router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google Sign-In callback route
router.get(
  '/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Redirect or send the JWT to the client
    res.send(`${req.user}`);
  }
);

module.exports = router;

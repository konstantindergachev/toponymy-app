const express = require('express');
const router = express.Router();
const mapApiKey = require('../config/config').mapApiKey;

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', 'Вы не авторизованы');
    res.redirect('/login');
  }
};

router.get('/map', ensureAuthenticated, (req, res) => {
  res.render('map', {
    pageTitle: 'Карта',
    MAP_API_KEY: mapApiKey,
  });
});

module.exports = router;

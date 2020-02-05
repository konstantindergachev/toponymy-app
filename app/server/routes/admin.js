const express = require('express');
const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', 'Вы не авторизованы');
    res.redirect('/login');
  }
};

router.get('/admin', ensureAuthenticated, (req, res) => {
  res.render('admin', {
    pageTitle: 'Admin',
    pageID: 'admin',
  });
});

module.exports = router;

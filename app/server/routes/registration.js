const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.get('/registration', (req, res) => {
  res.render('registration', {
    pageTitle: 'Регистрация',
    pageID: 'registration',
  });
});

router.post('/registration', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  req.checkBody('username', 'Требуется имя').notEmpty();
  req.checkBody('password', 'Требуется пароль').notEmpty();

  const err = req.validationErrors();
  if (err) {
    res.render('registration', { err });
  } else {
    const newUser = new User({ username, password });
    try {
      await User.createUser(newUser);
      res.redirect('/login');
    } catch (err) {
      console.log('Error: ', err);
      return req.flash('error_msg', 'Ошибка. Повторите процедуру регистрации');
    }
  }
});

module.exports = router;

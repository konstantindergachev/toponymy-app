const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Главная',
    pageID: 'index'
  });
});

module.exports = router;

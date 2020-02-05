const express = require('express');
const router = express.Router();
const Article = require('../models/article-model');

router.get('/interesting', (req, res) => {
  res.render('interesting', {
    pageTitle: 'Интересное',
    pageID: 'interesting',
  });
});

router.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).send(articles);
  } catch (err) {
    console.log('Данных нет: ', err);
    return res.status(400).send({ msg: 'Данных нет' });
  }
});

module.exports = router;

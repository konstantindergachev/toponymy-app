const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../config/config').herokuDepl;
const Toponymy = require('../models/toponymy-model');
const objectId = require('mongodb').ObjectID;

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', 'Вы не авторизованы');
    res.redirect('/login');
  }
};

router.get('/toponymy', ensureAuthenticated, (req, res) => {
  res.render('toponymy', {
    pageTitle: 'Топонимики',
    pageID: 'toponymy',
  });
});

router.get('/api/toponymies', async (req, res) => {
  try {
    const docs = await Toponymy.find({});
    res.status(200).send(docs);
    // mongoose.disconnect();
  } catch (err) {
    console.log('Данных нет: ', err);
    return res.status(400).send({ msg: 'Данных нет' });
  }
});

const jsonParse = express.json();
router.post('/api/toponymies', jsonParse, async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const doc = await Toponymy.create(req.body);
    console.log(doc);
    res.status(201).send(doc);
    console.log('Объект record сохранен: ', doc);
    // mongoose.disconnect();
  } catch (err) {
    console.log('Данные не сохранены: ', err);
    return res.status(400).send({ msg: 'Данные не сохранены' });
  }
});

router.put('/api/toponymies', jsonParse, async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const updDoc = await Toponymy.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(req.body);
    // mongoose.disconnect();
  } catch (err) {
    console.log('Не обновил: ', err);
    return res.status(400).send({ msg: 'Запись не обновилась' });
  }
});

router.delete('/api/toponymies/:id', async (req, res) => {
  try {
    const id = new objectId(req.params.id);
    const result = await Toponymy.remove({ _id: id });
    console.log(result);
    res.status(200).send(result);
    // mongoose.disconnect();
  } catch (err) {
    console.log('Ошибка удаления: ', err);
    return res.status(400).send({ msg: 'Ошибка удаления' });
  }
});
module.exports = router;

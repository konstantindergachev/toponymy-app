const express = require('express');
const router = express.Router();

router.get('/error', (req, res) => {
  res.render('error', {
    title: 'Ошибка',
    message: 'Сожалеем. Страница не найдена.',
  });
});

router.use((req, res, next) => {
  const err = {
    message: 'Сожалеем. Страница не найдена.',
    status: 404,
  };
  next(err);
});

router.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
  next();
});

module.exports = router;

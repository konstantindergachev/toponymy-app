const express = require('express');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const localPort = require('./server/config/config').localPort;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  expressValidator({
    errorFormatter(param, msg, value) {
      let namespace = param.split('.');
      let root = namespace.shift();
      let formParam = root;

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param: formParam,
        msg,
        value,
      };
    },
  })
);

app.use(flash());

//global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;

  next();
});

app.use(require('./server/routes/index'));
app.use(require('./server/routes/interesting'));
app.use(require('./server/routes/registration'));
app.use(require('./server/routes/login'));
app.use(require('./server/routes/logout'));
app.use(require('./server/routes/map'));
app.use(require('./server/routes/toponymy'));
app.use(require('./server/routes/admin'));
app.use(require('./server/routes/error'));

/*eslint-disable no-console */
const port = process.env.PORT || localPort;
app.listen(port, () => console.log('Server start on posrt ', port));

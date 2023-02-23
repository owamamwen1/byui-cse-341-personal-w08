const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport = require('passport');
require('./auth/oauth.js');
const logElement = require('./auth/loginElement.js')
const isLoggedIn = require('./middleware/isLoggedIn.js')


const port = process.env.PORT || 3000;
const SECT_SRECT = process.env.SECTION_SRECT
const CRY_SRECT = process.env.CRYPTO_SRECT
const app = express();

//Express-session
app.use(session({
  secret: `${SECT_SRECT}`,
  saveUninitialized: true, // create session until something stored
  resave: false, // dont save session if unmodified
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_API_KEY,
    crypto: {
      secret: `${CRY_SRECT}`
    }
  })
}));


app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
   res.send(`${logElement}`);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/api-docs',
        failureRedirect: '/google/failure'
}));

app.get('/google/failure', (req, res) => {
  res.send('Something went wrong with the authetication...');
});


app.use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', isLoggedIn, require('./routes')); // Middleware (isLoggedIn)

  // LogOut
  app.get('/logout',  (req, res) => {
    req.session.destroy();
    res.send('Goodbye! you have logout.');
    res.redirect('/');
});

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected running on ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect database!', err);
    process.exit();
  });

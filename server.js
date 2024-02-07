// External Modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

// Creates a sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initializes an instance of Express.js
const app = express();
// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure and link session object and connects to Sequelize store
const sess = {
  secret: 'Super secret secret',
  // specifies options for cookies
  cookie: {
    // cookie expires after 1 day
    // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    maxAge: 24 * 60 * 60 * 1000,
    // only store session cookies when the protocol being used to connect to the server is HTTP
    httpOnly: true,
    // only initialize session cookies when the protocol being used is HTTPS
    secure: false,
    // only initialize session cookies when the referrer provided by the client matches the domain the server is hosted from
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Adds express-session and store as Express.js middleware
app.use(session(sess));

// Informs Express.js which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static middleware pointing to public folder to serve assets
app.use(express.static(path.join(__dirname, 'public')));

// sets up routes
app.use(routes);

// connects database then starts express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `Visit local site at http://localhost:${PORT}. Visit API data at http://localhost:${PORT}/api/dataOne or (||)
      /api/dataTwo/, /api/dataThree/ or /api/dataFour/`
    )
  );
});

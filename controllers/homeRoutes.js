const router = require('express').Router();

// Import any models you plan to use for data's routes here

// If you would like to use an authGuard middleware, import it here

// add a get / (landing page) route here
router.get('/', async (req, res) => {
  console.log('Landing page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving landing page');
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get('/login', (req, res) => {
  console.log('Login page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving login page');
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get('/signup', (req, res) => {
  console.log('Signup page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving signup page');
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();

// import any models you plan to use for this data's routes here

// /api/
// add a post user API route here
router.post('/', async (req, res) => {
  try {
    console.log('User attempting to be added');
  } catch (err) {
    console.log('There was an error creating user');
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/login
// add a post login API route here
router.post('/login', async (req, res) => {
  try {
    console.log('User attempting to log in');
  } catch (err) {
    console.log('There was an error logging in');
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/logout
// add a post logout API route here
router.post('/logout', (req, res) => {});

module.exports = router;

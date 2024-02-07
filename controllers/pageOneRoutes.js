const router = require('express').Router();

// import any models you plan to use for this page's routes here

// If you would like to you an authGuard middleware, import it here

// /pageOne
router.get('/', async (req, res) => {
  console.log('Page one attempting to be retrieved');
  try {
    // data retrieval logic would go here
    // handlebar render logic with data passing would go here
  } catch (err) {
    console.log('There was an error retrieving page one');
    res.status(500).json(err);
  }
});

module.exports = router;

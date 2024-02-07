const router = require('express').Router();

// import any models you plan to use for this data's routes here

// If you would like to you an authGuard middleware, import it here

// /api/dataOne
// add a post API route here
router.post('/', async (req, res) => {
  console.log('Data one attempting to be added');
  try {
  } catch (err) {
    console.log('There was an error adding data one');
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a delete API route here
router.delete('/:id', async (req, res) => {
  try {
    const params = req.params;
    console.log(`Data one with ID ${params} attempting to be deleted`);
  } catch (err) {
    console.log(`There was an error deleting data one with ID ${params}`);
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a put API route here
router.put('/:id', async (req, res) => {
  try {
    const params = req.params;
    console.log(`Data one with ID ${params} attempting to be updated`);
  } catch (err) {
    console.log(`There was an error updating data one with ID ${params}`);
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a get API route here
router.get('/:id', async (req, res) => {
  try {
    const params = req.params;
    console.log(`Data one with ID ${params} attempting to be retrieved`);
  } catch (err) {
    console.log(`There was an error retrieving data one with ID ${params}`);
    res.status(500).json(err);
  }
});

module.exports = router;

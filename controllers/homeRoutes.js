const router = require("express").Router();

// Import any models you plan to use for data's routes here
const { ExampleData, User } = require("../models/");

// If you would like to use an authGuard middleware, import it here

// add a get / (landing page) route here
router.get("/", async (req, res) => {
  try {
    const exampleData = await ExampleData.findAll({
      include: [User],
    });

    const examples = exampleData.map((example) => example.get({ plain: true }));

    res.render("home", { examples, loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

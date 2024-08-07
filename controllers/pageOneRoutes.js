const router = require("express").Router();

// import any models you plan to use for this page's routes here
const { ExampleData } = require("../models");

// protects routes from unauthorized access
const { withGuard } = require("../utils/authGuard");

router.get("/", withGuard, async (req, res) => {
  try {
    const databyUser = await ExampleData.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    console.log(req.session.user_id);
    console.log("databyUser:", databyUser); // Should not be undefined
    const userExamples = databyUser.map((example) =>
      example.get({ plain: true })
    );

    res.render("page-one", {
      userExamples,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

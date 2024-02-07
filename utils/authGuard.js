// route guard for api routes/actions that require a logged in user
const withGuard = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

// login/signup route redirect that require a logged in user
const withoutGuard = (req, res, next) => {
  if (!req.session.loggedIn) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { withGuard, withoutGuard };

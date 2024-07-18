const passport = require('../auth/passportConfig');

const authController = {
  googleAuth: passport.authenticate('google', { scope: ['profile'] }),

  googleAuthCallback: passport.authenticate('google', {
    successRedirect: '/products',
    failureRedirect: '/auth/failure'
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};

module.exports = authController;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

passport.use(new LocalStrategy(
  function(username, password, done) {
    Customer.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user || !user.validPassword) {
        return done(null, false, { message: 'Incorrect username or password' });
      } 
      return done(null, user);
    });
  }
));
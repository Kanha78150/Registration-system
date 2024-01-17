var express = require('express');
var router = express.Router();

const userModel = require("./users");

// Export Passport
const passport = require('passport');
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/hello', function (req, res, next) {
  res.render('hello');
});

router.post('/register', function (req, res, next) {
  let userdata = new userModel({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    birth: req.body.birth
  });
  userModel.register(userdata, req.body.password)
    .then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/hello");
      });
    });
});

module.exports = router;

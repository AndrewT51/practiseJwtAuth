var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Customer = require('../models/customers.js');
var jwt = require('express-jwt');
var auth = jwt({secret: process.env.SECRET, userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/posts', auth, function(req, res, next) {
  console.log('Hooray')  
})


module.exports = router;

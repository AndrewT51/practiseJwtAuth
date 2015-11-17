var express = require('express');
var router = express.Router();
var Customer = require('../models/customers.js');
var Passport = require('../config/passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addUser',function(req,res){
  customer = new Customer;
  customer.name = req.body.name,
  customer.phoneNumber = req.body.phoneNumber
  customer.save(function(err, data ){
  res.send(data)

  });
    
  


})


module.exports = router;

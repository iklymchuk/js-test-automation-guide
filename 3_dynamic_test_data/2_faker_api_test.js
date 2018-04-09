var request = require('request');

var host = 'http://faker.hook.io/';
var locale = 'de';
var email = '?property=internet.email';
var card = '?property=helpers.createCard';

  request.get(host + email, function (error, response, body) {
    console.log('email:', body); 
  });

  request.get(host + card, function (error, response, body) {
    console.log('card:', body); 
  });
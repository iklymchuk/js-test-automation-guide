var faker = require('faker');
//faker.locale = "ru";

var randomName = faker.name.findName(); 
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard(); 

//console.log({name: randomName, email: randomEmail, card: randomCard});

//Faker Data
var user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar()
  };

 // console.log(user);

  //Helpers
  var card = faker.helpers.userCard();
  var transaction = faker.helpers.createTransaction()
  
  console.log('card', card);
  console.log('transaction', transaction);
  
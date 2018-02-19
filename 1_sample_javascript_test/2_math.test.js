const {sum, subtract} = require('./math')
let result, expected;

//sum test
result = sum(3, 7);
expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
} else {
  console.log('Sum functon works fine');
}

//substract test
result = subtract(7, 3);
expected = 3;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
} else {
  console.log('Substract functon works fine');
}
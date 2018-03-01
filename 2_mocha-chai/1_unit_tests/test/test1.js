var math = require('./../app/math');
var expect  = require('chai').expect;

it('Math sum test', function(done) {
    expect(math.sum(1, 2)).to.equal(3);
    done();
});

it('Math subtract test', function(done) {
    expect(math.subtract(5, 2)).to.equal(3);
    done();
});
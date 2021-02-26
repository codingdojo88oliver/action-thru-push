process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;

class Fairness {
    is_fair(a, b) {
        console.log(a);
        console.log(b);
    }
}

describe("Fairness App", function() {
    it("should return a success message if the two values are equal", function(){
        let fairness = new Fairness();
        let a = 1;
        let b = 1;

        expect(fairness.is_fair(a,b)).to.equal("Success!");
    });
});
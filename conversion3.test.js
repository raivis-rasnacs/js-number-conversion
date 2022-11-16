const conversion = require('./conversion');

function testing_1111() {
  expect(conversion("1111").toBe(15));
}

test("checks conversion from '1111' to decimal", testing_1111);

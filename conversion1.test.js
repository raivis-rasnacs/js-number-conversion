const conversion = require('./conversion');

function testing_3() {
  expect(conversion(3)).toBe("11");
}

test("checks conversion from 3 to binary", testing_3);


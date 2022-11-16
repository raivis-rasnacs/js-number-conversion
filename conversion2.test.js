const conversion = require('./conversion');

function testing_38() {
  expect(conversion(38)).toBe("100110");
}

test("checks conversion from 38 to binary", testing_38);

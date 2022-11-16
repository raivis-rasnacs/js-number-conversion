const conversion = require('./conversion');

function testing_3() {
  expect(conversion(3).toBe("11"));
}

function testing_38() {
  expect(conversion(38).toBe("100110"));
}
  
function_testing_1111() {
  expect(conversion("1111").toBe(15));
}

test("checks conversion from 3 to binary", testing_3);
test("checks conversion from 38 to binary", testing_38);
test("checks conversion from '1111' to decimal", testing_1111);


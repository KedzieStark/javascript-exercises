const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((x, y) => x + y, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((x,y) => x * y);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

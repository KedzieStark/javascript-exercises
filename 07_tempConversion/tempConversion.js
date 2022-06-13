const ftoc = function(temp) {
  temp = (temp - 32) * .556;
  temp = Math.round(temp * 10) / 10;
  return temp;
};

const ctof = function(temp) {
  temp = temp * .556 +32;
  temp = Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

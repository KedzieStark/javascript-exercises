const removeFromArray = function(input, toRemove) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === toRemove) {
        input.splice(i, 1);
      }
    }
    return input;
  };

// Do not edit below this line
module.exports = removeFromArray;

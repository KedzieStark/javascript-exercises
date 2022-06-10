const removeFromArray = function (input, ...toRemove) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (input[i] === toRemove[j]) {
                input.splice(i, 1);
                i = -1; continue;
            }
        }
    }
    return input;
};


// Do not edit below this line
module.exports = removeFromArray;

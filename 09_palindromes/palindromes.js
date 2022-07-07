const palindromes = function(input) {
    const alpha = Array.from("abcdefghijklmnopqrstuvwxyz");
    input = input.toLowerCase();
    let letterArray = Array.from(input).filter(letter => alpha.includes(letter));
    let backwardsArray = letterArray.slice().reverse();
    letterArray = letterArray.toString();
    backwardsArray = backwardsArray.toString();
    if (letterArray === backwardsArray) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

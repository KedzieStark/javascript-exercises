const reverseString = function(string) {
    let stringLetters = string.split("");
    stringLetters.reverse();
    let reversedString = stringLetters.join("");
    return reversedString;
};
// Do not edit below this line
module.exports = reverseString;

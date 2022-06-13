const sumAll = function (num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 > num2) {
        let temp;
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let numRange = [];
    for (i = num1; i <= num2; i++) {
        numRange.push(i);
    }
    let numSum = 0;
    for (const numItem of numRange) {
        numSum = numSum + numItem;
    }
    return numSum;
};

// Do not edit below this line
module.exports = sumAll;

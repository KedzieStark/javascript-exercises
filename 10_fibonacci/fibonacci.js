const fibonacci = function (input) {
    input = Number(input);
    if (input == NaN || input < 0) {
        return "OOPS";
    } else {
        const fibArray = [];
        let a = 1, b = 0, temp;
        for (let i = 0; i < input; i++) {
            temp = a;
            a = a + b;
            b = temp;
            fibArray[i] = temp;
        }
        return fibArray[input-1];
    }
};


// Do not edit below this line
module.exports = fibonacci;

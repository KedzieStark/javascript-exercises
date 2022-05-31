const repeatString = function(string, times) {
    let repeatedString = "";
      for (let i = 0; i < times; i++){
          repeatedString += string;
      }
    return repeatedString
  };
  console.log(repeatString("hey",1));
// Do not edit below this line
module.exports = repeatString;

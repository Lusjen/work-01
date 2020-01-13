var numberStr1 =  prompt("введіть число");
var numberStr2 =  prompt("введіть число");
var numberStr3 =  prompt("введіть число");
var number1 = parseInt(numberStr1);
var number2 = parseInt(numberStr2);
var number3 = parseInt(numberStr3);
var sum = (number1 + number2 + number3) / 3;
document.write(`<div>Середнє арифметичне: ${sum}</div>`)
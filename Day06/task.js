console.log("Day 06");

//#region [1. Write a Function to Convert Celsius to Fahrenheit]
function convertCelsiusToFahrenheit(tempInCelsius) {
  let result = (tempInCelsius * 9) / 5 + 32;
  console.log(`1. ${tempInCelsius} degree celsius is equivalent to ${result} degree fahrenheit`);
}
convertCelsiusToFahrenheit(32);
//#endregion

//#region [2. Create a Function to Find the Maximum of Two Numbers]
function findMaximum(num1, num2) {
  let maxNum = num1 > num2 ? num1 : num2;
  console.log(`2. Maximum of ${num1} and ${num2} is ${maxNum}`);
}
findMaximum(-3, -2);
//#endregion

//#region [3. Function to Check if a String is a Palindrome]
function checkPalindrome(text = "") {
  let newText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text.charAt(i);
  }
  if (text !== newText) {
    console.log(`3. ${text} is not Palindrome.`);
  } else {
    console.log(`3. ${text} is Palindrome.`);
  }
}
checkPalindrome("level");
//#endregion

//#region [4. Write a Function to Find Factorial of a Number]
function findFactorial(num) {
  if (num <= 1) return 1;
  return num * findFactorial(num - 1);
}
console.log(`4. Factorial of ${5} is ${findFactorial(5)}`);
//#endregion
//#region []

//#endregion
//#region []

//#endregion
//#region []

//#endregion
//#region []

//#endregion
//#region []

//#endregion
//#region []

//#endregion

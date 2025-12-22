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

//#region [5. Write a function to Count Vowels in a String]
function countVowels(str = "") {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = [];
  for (let position = 0; position < str.length; position++) {
    let currChar = str.charAt(position).toLowerCase();

    let isVowel = vowels.includes(currChar);
    if (isVowel) {
      let isListedBefore = vowelsCount.includes(currChar);
      if (!isListedBefore) {
        vowelsCount.push(currChar);
      }
    }
  }
  console.log(`5. Total non-repeated vowels count: ${vowelsCount.length}`);
}
countVowels("nasir");
//#endregion

//#region [6. Write a Function to Capitalize the First Letter of Each Word in a Sentence]
function capitalizeWords(sentence = "write a function to capitalize the first Letter In a sentence.") {
  const wordsInSentence = sentence.split(" ");
  const result = [];
  for (let wordPosition = 0; wordPosition < wordsInSentence.length; wordPosition++) {
    const currWord = wordsInSentence[wordPosition];
    if (currWord) {
      const capitalizedWord = currWord.charAt(0).toUpperCase() + currWord.slice(1);
      result.push(capitalizedWord);
    }
  }
  console.log(`6. ${result.join(" ")}`);
}
capitalizeWords();
//#endregion

//#region [7. Use an IIFE to Print “Hello, JavaScript!”]
(function () {
  console.log("7. Hello, JavaScript!");
})();
//#endregion

//#region [8. Create a Simple Callback Function]
function greet(name, callback) {
  if (name) {
    callback(name);
  } else {
    console.log(`8. You didn't put any name.`);
  }
}
function printName(name) {
  console.log(`8. Hello ${name}.`);
}
greet("Akash", printName);
//#endregion

//#region [9. Create Call Stack Execution Diagram for this flow]
console.log(`9. See executionDiagram.png`);
//#endregion

//#region [10. Create Call Stack Execution Diagram for this flow]
console.log(`10. See executionDiagram1/png`);
//#endregion

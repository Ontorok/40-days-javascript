console.log("Day 05");

//#region [1. Generate a Pyramid Pattern using Nested Loop as it is shown below]
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
console.log(`Ans. 1`);
for (let row = 1; row <= 5; row++) {
  let starPrint = "";
  for (let star = 1; star <= row; star++) {
    starPrint += "*";
  }
  console.log(starPrint);
}
console.log(`------------------`);
//#endregion

//#region [2. Create Multiplication Table (Using for loop)]
console.log(`Ans. 2`);
let timesTableOf = 4;
for (let times = 1; times <= 10; times++) {
  console.log(`${timesTableOf} x ${times} = ${timesTableOf * times}`);
}
console.log(`------------------`);
//#endregion

//#region [3. Find the summation of all odd numbers between 1 to 500 and print them on the console log]
let sum = 0;
let currentNumber = 1;
let lastNumber = 500;
for (; currentNumber <= lastNumber; currentNumber++) {
  sum += currentNumber;
}
console.log(`Ans. 3`);
console.log(sum);
console.log(`------------------`);
//#endregion

//#region [4. Skipping Multiples of 3]
console.log(`Ans. 4`);
let currentNumber_4 = 1,
  lastNumber_4 = 20;
for (; currentNumber_4 <= lastNumber_4; currentNumber_4++) {
  if (currentNumber_4 % 3 === 0) {
    continue;
  }
  console.log(currentNumber_4);
}
console.log(`------------------`);
//#endregion

//#endregion [5. Reverse Digits of a Number (Using while loop)]
let originalNumber = 1234,
  reverseNumber = 0;
while (originalNumber > 0) {
  reverseNumber = (originalNumber % 10) + reverseNumber * 10;
  originalNumber = Math.floor(originalNumber / 10);
}
console.log(`Ans. 5`);
console.log(reverseNumber);
console.log(`------------------`);
//#region

console.log("Day 04");

//#region [1. What will be the output of this code snippet and why?]
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");

    console.log(`1. The output is 'Its a normal day'. Because JS is case sensitive. Monday and monday are different`);
}
//#endregion

//#region [2. Build an ATM Cash Withdrawal System]
let amount = 501;
let isValidAmount = amount % 100 === 0 ? true : false;
if (isValidAmount) {
  console.log(`2. Withdrawal successful - ${amount}`);
} else {
  console.log(`2. Invalid Amount - ${amount}`);
}
//#endregion

//#region [3. Build a Calculator with switch-case]
let operator = "*";
let number1 = 20,
  number2 = 10;
switch (operator) {
  case "+":
    console.log(`3. ${number1} ${operator} ${number2} = ${number1 + number2}`);
    break;
  case "-":
    console.log(`3. ${number1} ${operator} ${number2} = ${number1 - number2}`);
    break;
  case "*":
    console.log(`3. ${number1} ${operator} ${number2} = ${number1 * number2}`);
    break;
  case "/":
    console.log(`3. ${number1} ${operator} ${number2} = ${number1 / number2}`);
    break;

  default:
    console.log(`3. Invalid Operator`);
    break;
}
//#endregion

//#region [4. Pay for your movie ticket]
let age = 50;
if (age >= 1 && age < 18) {
  console.log(`4. For age - ${age} ticket price is 3$.`);
} else if (age >= 18 && age <= 60) {
  console.log(`4. For age - ${age} ticket price is 10$.`);
} else if (age > 60) {
  console.log(`4. For age - ${age} ticket price is 8$.`);
} else {
  console.log(`4. Invalid age - ${age}!!`);
}
//#endregion

//#region [5. Horoscope Sign Checker]
let month = "January";
let zodiacSign;

switch (month) {
  case "January":
  case "February":
    zodiacSign = "Aquarius";
    break;
  case "March":
  case "April":
    zodiacSign = "Aries";
    break;
  case "May":
  case "June":
    zodiacSign = "Gemini";
    break;
  case "July":
  case "August":
    zodiacSign = "Leo";
    break;
  case "September":
  case "October":
    zodiacSign = "Virgo ";
    zodiacSign = "Libra ";
    break;
  case "November":
  case "December":
    zodiacSign = "Sagittarius";
    break;
  default:
    console.log("wrong month variable");
    break;
}
console.log(`5. you are born in ${month} and your zodiac sign is '${zodiacSign}'`);
//#endregion

//#region [6. Which Triangle?]
let side1 = 10,
  side2 = 100,
  side3 = 101;
if (side1 === side2 && side2 === side3) {
  console.log(`6. Equilateral Triangle`);
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
  console.log(`6. Isosceles Triangle`);
} else {
  console.log(`6. Scalene Triangle`);
}
//#endregion

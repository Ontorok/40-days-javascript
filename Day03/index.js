console.log("Day 03");

//#region [1. Odd or Even]
let number = 6;
let isEven = number % 2 === 0;
console.log(`1. ${number} is ${isEven === true ? "Even" : "Odd"}.`);
//#endregion

//#region [2. Do you have Driving License]
let age = 26;
let isEligibleForDrivingLicense = age >= 18;
console.log(
  `2. Age ${age} is ${isEligibleForDrivingLicense === true ? "eligible" : "not eligible"} for driving license.`
);
//#endregion

//#region [3. Calculate CTC with a Bonus]
let monthlySalary = 12300;
let bonus = (monthlySalary * 20) / 100;
let ctc = monthlySalary + bonus;
console.log(`3. CTC is ${ctc}.`);
//#endregion

//#region [4. Write a program for the Traffic Light Simulation.]
let color = "Green";
let decision = color.toLowerCase() === "red" ? "STOP" : "GO";
console.log(`4. Traveler should ${decision}.`);
//#endregion

//#region [5. Create an Electricity Bill Calculator]
let units = 2;
let unitCost = 150;
let monthlyConsumedUnits = 30 * 2;
let monthlyChargedAmount = monthlyConsumedUnits * unitCost;
let annuallyChargedAmount = monthlyChargedAmount * 12;
let annuallyChargedAmountAfterDiscount = annuallyChargedAmount * 0.8;
console.log(
  `5. Monthly charged amount: ${monthlyChargedAmount}. Annual charged amount: ${annuallyChargedAmountAfterDiscount} as per day consumed unit is ${units}`
);
//#endregion

//#region [6. Leap Year Checker]
let year = 2025;
let reminder = year % 4;
console.log(`6. ${year} is leap year? ${reminder === 0 ? "Yes" : "No"}.`);
//#endregion

//#region [7. Max of Three Numbers]
let p = 27,
  q = 27,
  r = 9;
let max = p;
if (q > p) {
  max = q;
}
if (r > q) {
  max = r;
}
console.log(`7. Max of ${p},${q},${r} is ${max}.`);
//#endregion

//#region [8. Bitwise Doubling]
let count = 15;
let shiftBy = 1;
let leftShiftedCount = count << 1;
/*
    15(1111) = 11110(30)
*/
console.log(`8. Left shift by ${shiftBy} of ${count} is ${leftShiftedCount}.`);
//#endregion

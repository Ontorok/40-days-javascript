let attempt = 0;
const MIN = 1,
  MAX = 10;

let secretNumber = getRandomNumber(MIN, MAX);

while (true) {
  const userInput = getUserInput();
  if (!userInput) break;
  const isValid = validateUserInput(userInput, MIN, MAX);
  if (!isValid) {
    alert("Invalid Choice. Please try again");
    continue;
  }
  attempt += 1;

  const isCorrectGuess = checkGuess(userInput, secretNumber);
  if (isCorrectGuess) {
    announceResult(attempt);
  } else {
    const difference = secretNumber - userInput;
    if (difference > 0) {
      console.log(`Too Low!! Try again.`);
    } else {
      console.log(`Too High!! Try again.`);
    }
    continue;
  }

  const playAgain = confirm("Play Again??");
  if (!playAgain) {
    console.log("Thanks for playing!!");
    break;
  } else {
    reset();
    continue;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserInput() {
  const userInputPrompt = prompt("Please enter a number between 1 to 10");
  if (!userInputPrompt) return null;

  const inputAsNumber = Number(userInputPrompt);
  return Number.isNaN(inputAsNumber) ? null : inputAsNumber;
}

function validateUserInput(input, min, max) {
  return Number.isInteger(input) && input >= min && input6 <= max;
}

function checkGuess(userInput, secretNumber) {
  return userInput === secretNumber;
}

function announceResult(attempt) {
  console.log(`Congratulations!! You have guessed the number in ${attempt} attempts`);
}

function reset() {
  attempt = 0;
  secretNumber = getRandomNumber(MIN, MAX);
}

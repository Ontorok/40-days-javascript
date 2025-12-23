/**
 * The Rock, Paper, Scissors Game.
 * This game will be played between the computer and human. Once Human will select Rock or Paper or Scissor and in the next turn the computer will select Rock or Paper or Scissor.
 * The winner will be selected based on these rules:
 * - Rock can break Scissors => Rock Wins
 * - Paper can wrap Rock => paper wins
 * - Scissors can cut Paper => Scissors wins
 * Ask the input from user and randomly select a computer selection to continue the game
 */

/**
 * Assumptions
 * 1. We have to prompt the user to get their inputs.
 * 2. The Computer's selection will be random.
 * 3. We have to compare user and computer's choice.
 * 4. We need to announce the winner.
 * 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.
 */
let userName;
const options = { 1: "rock", 2: "paper", 3: "scissors" };
function playGame() {
  console.log("Getting started the Rock Paper Scissor Game");
  const userRandomChoice = getRandomNumber(3);
  const userChoicePrompt = prompt("What's your choice: Rock - Paper - Scissors", options[userRandomChoice]);

  const userChoice = userChoicePrompt.toLowerCase();
  const isValidChoice = validateUserChoice(userChoice);
  if (isValidChoice) {
    const computerChoice = options[getRandomNumber(3)].toLowerCase();
    console.log({ "User Selection": userChoice, "Computer Selection": computerChoice });
    if (
      (userChoice === options[1] && computerChoice === options[3]) ||
      (userChoice === options[2] && computerChoice === options[1]) ||
      (userChoice === options[3] && computerChoice === options[2])
    ) {
      console.log(`${userName} is Win!!`);
    } else if (userChoice === computerChoice) {
      console.log("This game is a Tie.");
    } else if (
      (userChoice === options[3] && computerChoice === options[1]) ||
      (userChoice === options[1] && computerChoice === options[2]) ||
      (userChoice === options[2] && computerChoice === options[3])
    ) {
      console.log(`Computer is Win!!`);
    }
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      playGame();
    } else {
      console.log("Thanks for playing. See you again!!");
    }
  } else {
    console.error("Invalid Choice. Please try again");
  }
}

function setUserName() {
  const nameFromLocalStorage = getUserName();
  if (nameFromLocalStorage) {
    userName = nameFromLocalStorage;
  } else {
    const name = prompt("Please mention your name");
    localStorage.setItem("rps-user-name", name);
  }
}

function getUserName() {
  const name = localStorage.getItem("rps-user-name");
  return name;
}

function getRandomNumber(upTo) {
  return Math.floor(Math.random() * upTo) + 1;
}
function validateUserChoice(choice) {
  const normalizeInput = choice.trim().toLowerCase();
  const validChoices = Object.values(options);
  return validChoices.includes(normalizeInput);
}
setUserName();
playGame();

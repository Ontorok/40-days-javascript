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
const OPTIONS = ["rock", "paper", "scissors"];
function getUserName() {
  const name = localStorage.getItem("rps-user-name");
  return name;
}
function setUserName() {
  const nameFromLocalStorage = getUserName();
  if (nameFromLocalStorage) {
    userName = nameFromLocalStorage;
  } else {
    const name = prompt("Please mention your name");
    localStorage.setItem("rps-user-name", name);
    userName = name;
  }
}
function getRandomNumber(upTo) {
  return Math.floor(Math.random() * upTo) + 1;
}
function validateUserChoice(choice) {
  const normalizeInput = choice.trim().toLowerCase();
  return OPTIONS.includes(normalizeInput);
}
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "tie";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user";
  }
  return "computer";
}
function getUserChoice() {
  const userRandomChoice = getRandomNumber(3);
  const userChoicePrompt = prompt("What's your choice: Rock - Paper - Scissors", OPTIONS[userRandomChoice - 1]);
  return userChoicePrompt ? userChoicePrompt.toLowerCase() : null;
}
function getComputerChoice() {
  return OPTIONS[getRandomNumber(3) - 1].toLowerCase();
}
function announceResult(winner) {
  if (winner === "user") {
    console.log(`${userName} is Win!!!`);
  } else if (winner === "computer") {
    console.log(`Computer is Win!!!`);
  } else {
    console.log("This game is a Tie.");
  }
}
setUserName();
while (true) {
  const userChoice = getUserChoice();
  if (!userChoice) break;
  if (!validateUserChoice(userChoice)) {
    alert("Invalid Choice. Please try again");
    continue;
  }

  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);
  announceResult(winner);

  const playAgain = confirm("Play Again??");
  if (!playAgain) {
    console.log("Thanks for playing!!");
    break;
  }
}

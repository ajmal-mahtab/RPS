let player;
let computer;
let result;
let buttons = document.querySelectorAll(".btn");

let computerChoice = () => {
  let random = Math.ceil(Math.random() * 3);
  switch (random) {
    case 1:
      return "ROCK";
      break;
    case 2:
      return "PAPER";
      break;
    case 3:
      return "SCISSORS";
  }
};

let finalResult = () => {
  if (computer == "ROCK" && player == "PAPER") {
    return "YOU WIN!";
  } else if (computer == "ROCK" && player == "SCISSORS") {
    return "YOU LOOSE!";
  } else if (computer == "PAPER" && player == "SCISSORS") {
    return "YOU WIN!";
  } else if (computer == "PAPER" && player == "ROCK") {
    return "YOU LOOSE!";
  }
  if (computer == "SCISSORS" && player == "ROCK") {
    return "YOU WIN!";
  } else if (computer == "SCISSORS" && player == "PAPER") {
    return "YOU LOOSE!";
  } else if (computer == player) {
    return "DRAW!";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerChoice();
    result = finalResult();
    document.querySelector(".computer").textContent = `Computer:  ${computer}`;
    document.querySelector(".player").textContent = `You:  ${player}`;
    document.querySelector(".result").textContent = `Result:  ${result}`;
  });
});

console.log("-Ajmal Mahtab");

let gameOptions = ["Rock", "Paper", "Scissors"];

function getChoice(gameOptions) {
    let choice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return choice;
}

function play() {
    let userChoice = getChoice(gameOptions);
    console.log("User's choice: " + userChoice);

    let computerChoice = getChoice(gameOptions);
    console.log("Computer's choice: " + computerChoice);

    let tie = "It's a tie!";
    let user = "User wins!";
    let computer = "Computer wins!";

    let computerWin = userChoice == gameOptions[0] && computerChoice == gameOptions[1] ||
        userChoice == gameOptions[1] && computerChoice == gameOptions[2] ||
        userChoice == gameOptions[2] && computerChoice == gameOptions[0];

    let userWin = userChoice == gameOptions[0] && computerChoice == gameOptions[2] ||
        userChoice == gameOptions[1] && computerChoice == gameOptions[0] ||
        userChoice == gameOptions[2] && computerChoice == gameOptions[1];

    if (computerWin) {
        console.log(computer);
    } else if (userWin) {
        console.log(user);
    } else console.log(tie);
};

play();
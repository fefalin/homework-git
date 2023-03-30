let gameOptions = ["Rock", "Paper", "Scissors"];

function getChoice(gameOptions) {
    let choice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return choice;
}

function check(userChoice, computerChoice) {
    const computerWin = userChoice == gameOptions[0] && computerChoice == gameOptions[1] ||
        userChoice == gameOptions[1] && computerChoice == gameOptions[2] ||
        userChoice == gameOptions[2] && computerChoice == gameOptions[0];

    const userWin = userChoice == gameOptions[0] && computerChoice == gameOptions[2] ||
        userChoice == gameOptions[1] && computerChoice == gameOptions[0] ||
        userChoice == gameOptions[2] && computerChoice == gameOptions[1];

    if (computerWin) {
        return 'COMPUTER';
    } else if (userWin) {
        return 'PLAYER';
    }

    return 'TIE';
};

window.onload = event => {
    const play = document.getElementById('play');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    play.onclick = event => {
        page1.classList.remove('page-visible1');
        page2.classList.add('page-visible2');
    }
    const playerChoice = document.getElementById('player-choice');
    const computerChoice = document.getElementById('computer-choice');
    const rock = document.getElementById('select-rock');
    const paper = document.getElementById('select-paper');
    const scissors = document.getElementById('select-scissors'); 
    const winner = document.getElementById('winner');
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    let playerChoiceValue;
    let computerChoiceValue;
    let result;
    let playerScoreValue = 0;
    let computerScoreValue = 0;
    rock.onclick = event => {
        playerChoice.getElementsByTagName('img')[0].src = './images/rock.png';
        //console.log(playerChoice.getElementsByTagName('img'));
        playerChoiceValue = "Rock";
        computerChoiceValue = getChoice(gameOptions);
        computerChoice.innerText = computerChoiceValue.toUpperCase();
        result = check(playerChoiceValue, computerChoiceValue);
        //winner.innerText = result;
        if (result === 'PLAYER') {
            playerScoreValue += 1;
            playerScore.innerText = playerScoreValue;
        } else if (result === 'COMPUTER') {
            computerScoreValue += 1;
            computerScore.innerText = computerScoreValue;
        }
    }
    paper.onclick = event => {
        playerChoice.getElementsByTagName('img')[0].src = './images/paper.png';
        playerChoiceValue = "Paper";
        computerChoiceValue = getChoice(gameOptions);
        computerChoice.innerText = computerChoiceValue.toUpperCase();
        result = check(playerChoiceValue, computerChoiceValue);
        //winner.innerText = result;
        if (result === 'PLAYER') {
            playerScoreValue += 1;
            playerScore.innerText = playerScoreValue;
        } else if (result === 'COMPUTER') {
            computerScoreValue += 1;
            computerScore.innerText = computerScoreValue;
        }
    }
    scissors.onclick = event => {
        playerChoice.getElementsByTagName('img')[0].src = './images/scissors.png';
        playerChoiceValue = "Scissors";
        computerChoiceValue = getChoice(gameOptions); 
        computerChoice.innerText = computerChoiceValue.toUpperCase();
        result = check(playerChoiceValue, computerChoiceValue);
        //winner.innerText = result;
        if (result === 'PLAYER') {
            playerScoreValue += 1;
            playerScore.innerText = playerScoreValue;
        } else if (result === 'COMPUTER') {
            computerScoreValue += 1;
            computerScore.innerText = computerScoreValue;
        }
    }
}
let userScore = 0
let computerScore = 0

// Elements from CSS
const buttons = document.querySelectorAll('.op');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const infoText = document.querySelector('.infoText');
const userScoreTxt = document.querySelector('.score-user')
const computerScoreTxt = document.querySelector('.score-computer')
const resultTxt = document.querySelector('.result')

const disableButtons = () => {
    buttons.forEach(e => {
        e.disabled = true
    });
}

const isOver = () => {
    if(userScore === 5 || computerScore === 5) {
        // Must show a bottom of restart, thus stopping the game
        disableButtons()
        if(userScore === 5)
            resultTxt.textContent = 'User wins!'
        else
            resultTxt.textContent = 'Computer wins!'
    }
}

rock.addEventListener('click', () => getComputerChoice('R'))
paper.addEventListener('click', () => getComputerChoice('P'))
scissors.addEventListener('click', () => getComputerChoice('S'))

// Computer
const getComputerChoice = (userChoice) => {
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(number);
    switch(number) {
        case 1:
            return winner(userChoice, 'R');
        case 2:
            return winner(userChoice, 'P');
        case 3:
            return winner(userChoice, 'S');
    }
}

const winner = (userChoice, computerChoice) => {
    let option = String(userChoice + computerChoice)
    switch(option) {
        case 'RS':
            infoText.textContent = "Rock beats scissors. User wins"
            userScore++
            break;
        case 'PR':
            infoText.textContent = "Paper beats rock. User wins"
            userScore++
            break;
        case 'SP':
            infoText.textContent = "Scissors beats paper. User wins"
            userScore++
            break;
        case 'SR':
            infoText.textContent = "Rock beats scissors. PC wins"
            computerScore++
            break;
        case 'RP':
            infoText.textContent = "Paper beats rock. PC wins"
            computerScore++
            break;         
        case 'PS':
            infoText.textContent = "Rock beats scissors. PC wins"
            computerScore++
            break;
        default:
            infoText.textContent = "Tie!";
            break;
    }
    userScoreTxt.textContent = `USER: ${userScore}`
    computerScoreTxt.textContent = `COMPUTER: ${computerScore}`
    isOver()
}
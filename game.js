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

const restart = document.querySelector('#restart')
const restartBtn = document.querySelector('#restart__button')
const noBtn = document.querySelector('#restart__noButton')
const overlay = document.querySelector('#overlay')

// It starts from here when you click any botton
rock.addEventListener('click', () => getComputerChoice('R'))
paper.addEventListener('click', () => getComputerChoice('P'))
scissors.addEventListener('click', () => getComputerChoice('S'))

// Computer
const getComputerChoice = (userChoice) => {
    let number = Math.floor(Math.random() * 3) + 1;
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
            infoText.textContent = "You won! Rock beats scissors."
            color(rock, "green")
            userScore++
            break;
        case 'PR':
            infoText.textContent = "You won! Paper beats rock."
            color(paper, "green")
            userScore++
            break;
        case 'SP':
            infoText.textContent = "You won! Scissors beats paper."
            color(scissors, "green")
            userScore++
            break;
        case 'SR':
            infoText.textContent = "PC wins! Rock beats scissors."
            color(scissors, "red")
            computerScore++
            break;
        case 'RP':
            infoText.textContent = "PC wins! Paper beats rock."
            color(rock, "red")
            computerScore++
            break;         
        case 'PS':
            infoText.textContent = "PC wins! Rock beats scissors."
            color(paper, "red")
            computerScore++
            break;
        default:
            infoText.textContent = "Tie!";
            if(option === 'RR')
                color(rock, "tie")
            else if (option === 'PP')
                color(paper, "tie")
            else
                color(scissors, "tie")
            break;
    }
    userScoreTxt.textContent = userScore
    computerScoreTxt.textContent = computerScore

    // Each time there's a win, lose or tie, it's gonna check if any of the member has 5 points
    isOver()
}

// UTILITY

const color = (option, result) => {
    option.classList.add(`${result}-shadow`)
    setTimeout(() => {
        option.classList.remove(`${result}-shadow`)
    }, 500)
}

const buttonsState = (state) => {
    buttons.forEach(e => {
        e.disabled = state
    });
}

const popUp = () => {
    restart.classList.add('active')
    overlay.classList.add('active')
    // It's called like restartGame instead of restartGame()because it runs instantly if you call it as a function, but in the other hand, when you call it as a name, it runs after the event 'click' happens
    restartBtn.addEventListener('click',  restartGame)
    noBtn.addEventListener('click', () => window.location.href = `https://github.com/migurd/rock-paper-scissors`)
}

const restartGame = () => {
    restart.classList.remove('active')
    overlay.classList.remove('active')
    buttonsState(false)
    userScore = 0
    computerScore = 0
    infoText.textContent = "Choose an option"
    userScoreTxt.textContent = "0"
    computerScoreTxt.textContent = "0"
}

const isOver = () => {
    if(userScore === 5 || computerScore === 5) {
        // Must show a bottom of restart, thus stopping the game
        buttonsState(true)
        if(userScore === 5)
            resultTxt.textContent = `YOU WON ${userScore}:${computerScore}!`
        else
        resultTxt.textContent = `COMPUTER WINS ${computerScore}:${userScore}!`
        popUp()
    }
}


// From someone that came from C, it feels so weird don't defining the type like int variable;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const text = document.querySelector('p');

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
    console.log(String(userChoice + computerChoice))
    
    switch(String(userChoice + computerChoice)) {
        case 'RS':
            text.textContent = "Rock beats scissors. User wins"
            break;
        case 'PR':
            text.textContent = "Paper beats rock. User wins"
            break;
        case 'SP':
            text.textContent = "Scissors beats paper. User wins"
            break;
        case 'SR':
            text.textContent = "Scissors beats rock. PC wins"
            break;
        case 'RP':
            text.textContent = "Rock beats paper. PC wins"
            break;         
        case 'PS':
            text.textContent = "Paper beats scissors. PC wins"
            break;
        default:
            text.textContent = "Tie!";
            break;
    }
}
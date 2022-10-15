console.log('Hello World')

// Func that returns computer's choice
function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random]

}

console.log(getComputerChoice());

// Func to play one round, taking in player and AI selection as arguments
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {                                        // Condition if tie game
        return `It's a tie! Both players selected ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {           // Conditions if player loses to computer
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {        // Conditions if player wins against computer
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
}

// Func to capitalize the first letter in string
function title(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const choices = ['rock', 'paper', 'scissors'];      //global variable intialize 



// Func that returns computer's choice
function getComputerChoice() {

    let random = Math.floor(Math.random() * choices.length);
    return choices[random]
}


// Func to play one round, taking in player and AI selection as arguments
function playRound(playerSelection, computerSelection) {
    
    if (!(choices.includes(playerSelection))) {
        console.log('You inputted something wrong! Computer wins this round!');
        return 'lose';
    }

    if (playerSelection === computerSelection) {                                                // Condition if tie game
        console.log(`It's a tie! Both players selected ${title(playerSelection)}!`);
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {                   // Conditions if player loses to computer
        console.log(`You Lose! ${title(computerSelection)} beats ${title(playerSelection)}!`);
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`You Lose! ${title(computerSelection)} beats ${title(playerSelection)}!`);
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`You Lose! ${title(computerSelection)} beats ${title(playerSelection)}!`);
        return 'lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {                // Conditions if player wins against computer
        console.log(`You Win! ${title(playerSelection)} beats ${title(computerSelection)}!`);
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You Win! ${title(playerSelection)} beats ${title(computerSelection)}!`);
        return 'win';
    } else {
        console.log(`You Win! ${title(playerSelection)} beats ${title(computerSelection)}!`);
        return 'win';
    }
}

// Player selection using button UI
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log(playRound('rock', computerSelection));
});


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log(playRound('paper', computerSelection));
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log(playRound('scissors', computerSelection));
});



// Func to capitalize the first letter in string
function title(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




// Func to run actual game by calling playRound 5 times while keeping score
function game() {

    let playerWins = 0;                 // Counter for each player's wins
    let computerWins = 0; 

   /* for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice();                                            // Store computer's selection in variable
        let playerSelection = prompt('Select One: Rock, Paper, Scissors').toLowerCase()         // Store player's selection in variable


         let result = playRound(playerSelection, computerSelection);

         if (result === 'win') {                                                            // Update win counters based on result of playRound()
            playerWins++; 
         } else if (result === 'lose') {
            computerWins++;
         } else {
            console.log(`Player 1: ${playerWins}         Computer: ${computerWins}`)
            continue;
         } 

         console.log(`Player 1: ${playerWins}         Computer: ${computerWins}`)           // print scoreboard at end of each round
    }

    if (playerWins > computerWins) {                                                        // Print if player wins, loses, or ties against computer at end of 5 rounds
        console.log(`You WIN!!! Computer LOSES! `)
    } else if (playerWins < computerWins) {
        console.log(`You LOSE ! Computer WINS !!!`)
    } else {
        console.log('Tie Game !!')
    } */
}


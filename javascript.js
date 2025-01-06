//Get the computers choice and return it.
function getComputerChoice(){
    let choice = Math.random() * 100;
    if (choice <= 33 && choice > 0){
        return("Rock");
    }
    else if(choice > 33 && choice > 67){
        return("Paper");
    }
    else{
        return "Scissors";
    }
}
//Get the humans choice and return it.
function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    if(choice === "rock"){
        console.log("Human Rock");
        return("Rock");
    }
    else if(choice === "paper"){
        console.log("Human Paper");
        return("Paper");
    }
    else if(choice === "scissors"){
        console.log("Human Scissors");
        return("Scissors")
    }
    else{
        console.log("Invalid");
        getHumanChoice();
    }
}

//create and initialize score varibles.
let humanScore = 0;
let computerScore = 0;

//Sets the winner for one round of the game.
function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "Rock":
            if(computerChoice === "Scissors"){
                console.log("You win. Rock beats Scissors.");
                ++humanScore;
            }
            else if(computerChoice === "Paper"){
                console.log("You lose. Paper beats Rock.");
                ++computerScore;
            }
            else{
                console.log("Tie");
            }
        break;

        case "Paper":
            if(computerChoice === "Scissors"){
                console.log("You lose. Scissors beats Paper.");
                ++computerScore;
            }
            else if(computerChoice === "Rock"){
                console.log("You win. Paper beats Rock.");
                ++humanScore;
            }
            else{
                console.log("Tie");
            }
        break;

        case "Scissors":
            if(computerChoice === "Paper"){
                console.log("You win. Scissors beats Paper.");
                ++humanScore;
            }
            else if(computerChoice === "Rock"){
                console.log("You lose. Rock beats Scissors.");
                ++computerScore;
            }
            else{
                console.log("Tie");
            }
        break;

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);
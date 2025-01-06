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
        return("Rock");
    }
    else if(choice === "paper"){
        return("Paper");
    }
    else if(choice === "scissors"){
        return("Scissors")
    }
    else{
        console.log("Invalid");
        getHumanChoice();
    }
}



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

function playGame(){
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("Human Wins! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if(computerScore > humanScore){
        console.log("Computer Wins! Computer: " + computerScore + " Human: " + humanScore);
    }
    else{
        console.log("TIE Computer: " + computerScore + " Human: " + humanScore);
    }   
}

let humanScore = 0;
let computerScore = 0;
playGame();
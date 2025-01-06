let humanScore = 0;
let computerScore = 0;
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
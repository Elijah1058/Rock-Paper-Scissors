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
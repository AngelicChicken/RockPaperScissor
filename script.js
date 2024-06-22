// get 3 random output
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

// link 3 random output to rock paper scissor
function getComputerChoice(){
    let computerChoice = getRandomInt(3);
    if(computerChoice === 0){
        return "paper"
    } if(computerChoice === 1){
        return "rock"
    } else {
        return "scissor"
    }
}

// get user choice
function getHumanChoice(){
    let humanChoice = prompt("Choose Rock/paper/scissor");

    if(humanChoice.toLowerCase() === "rock"){
        return "rock"
    } if(humanChoice.toLowerCase() === "paper"){
        return "paper"
    } if(humanChoice.toLowerCase() === "scissor"){
        return "scissor"
    } else {
        alert("please choose between rock/paper/scissor!")
    }
}


// make rock lose to paper
// make paper lose to scissor
// make scisor lose to rock
// compare who win
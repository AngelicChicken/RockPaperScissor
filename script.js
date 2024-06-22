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

function playGame(){
    // track score
    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("you choose " + humanChoice);
        console.log("computer choose " + computerChoice);

        // make rock lose to paper
        // make paper lose to scissor
        // make scisor lose to rock
        if(humanChoice === "rock" && computerChoice === "paper"){
            computerScore += 1;
            console.log("You lose! paper beats rock");
        } if(computerChoice === "rock" && humanChoice === "paper"){
            humanScore += 1;
            console.log("You win! paper beats rock");
        } if(computerChoice === "paper" && humanChoice === "scissor"){
            humanScore += 1;
            console.log("You win! scissor beats paper");
        } if(computerChoice === "scissor" && humanChoice === "paper"){
            computerScore += 1;
            console.log("You lose! scissor beats paper");
        } if(computerChoice === "rock" && humanChoice === "scissor"){
            computerScore += 1;
            console.log("You lose! rock beats scissor");
        } if(computerChoice === "scissor" && humanChoice === "rock"){
            humanScore += 1;
            console.log("You win! rock beats scissor");
        } if((computerChoice === "scissor" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "paper") || (computerChoice === "rock" && humanChoice === "rock") ){
            console.log("draw!");
        }
    }

    let i = 0;

    while(i <=4){
        playRound();
        console.log("computer score " + computerScore);
        console.log("your score " + humanScore);
        i++;
    }
}

playGame();
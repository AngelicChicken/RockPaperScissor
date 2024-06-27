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
function getHumanChoice(humanChoice){
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


// track score
let humanScore = 0;
let computerScore = 0;

function playRound(choice){
    let humanChoice = choice;
    let computerChoice = getComputerChoice();

    humanChoiceView.textContent = `you choose  ${humanChoice}`;
    computerChoiceView.textContent = `computer choose  ${computerChoice}`;

    // make rock lose to paper
    // make paper lose to scissor
    // make scisor lose to rock
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        computerScoreView.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "You lose! paper beats rock";
    } if(computerChoice === "rock" && humanChoice === "paper"){
        humanScore += 1;
        humanScoreView.textContent = `Your Score: ${humanScore}`;
        result.textContent = "You win! paper beats rock";
    } if(computerChoice === "paper" && humanChoice === "scissor"){
        humanScore += 1;
        humanScoreView.textContent = `Your Score: ${humanScore}`;
        result.textContent = "You win! scissor beats paper";
    } if(computerChoice === "scissor" && humanChoice === "paper"){
        computerScore += 1;
        computerScoreView.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "You lose! scissor beats paper";
    } if(computerChoice === "rock" && humanChoice === "scissor"){
        computerScore += 1;
        computerScoreView.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "You lose! rock beats scissor";
    } if(computerChoice === "scissor" && humanChoice === "rock"){
        humanScore += 1;
        humanScoreView.textContent = `Your Score: ${humanScore}`;
        result.textContent = "You win! rock beats scissor";
    } if((computerChoice === "scissor" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "paper") || (computerChoice === "rock" && humanChoice === "rock") ){
        result.textContent = "draw!";
    }

    if(humanScore === 5 || computerScore === 5){
        result.textContent = '';
        humanChoiceView.textContent = '';
        computerChoiceView.textContent = '';
        computerScore = 0;
        humanScore = 0;
        computerScoreView.textContent = `Computer Score: ${computerScore}`;
        humanScoreView.textContent = `Your Score: ${humanScore}`;
        if(humanScore === 5){
            alert("You win congrats!")
        } else {
            alert("Computer win.")
        }
    }
}   

//link button to javascript
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        playRound(`${button.id}`);
    })
});

//link human and computer score
const humanScoreView = document.querySelector("#humanScore");
const computerScoreView = document.querySelector("#computerScore");

//link result and computerChoice
const computerChoiceView = document.querySelector("#computerChoice");
const humanChoiceView = document.querySelector("#humanChoice");
const result = document.querySelector("#result");


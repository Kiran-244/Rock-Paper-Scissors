let userScore = 0; // this is in let as e want to re-assign it which is not possible in const
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result >p');
const rock_div = document.querySelector('#r');  
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');
// caching the dom
// lets add some event listeners
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertWord(letter){
    if(letter == 'r') return 'Rock';
    else if(letter == 'p') return 'Paper';
    else return 'Scissors';
}

function win(user,computer){
   userScore++; 
   userScore_span.innerHTML=userScore;
   computerScore_span.innerHTML=computerScore;
   result_div.innerHTML=`${convertWord(user)} beats ${convertWord(computer)} ,You Win 🔥`;
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${convertWord(user)} can't beat ${convertWord(computer)} ,You lost 😔 !`;
}

function tie(user,computer){
    result_div.innerHTML=`${convertWord(user)} can't beat ${convertWord(computer)} , It's a draw 🟰 !`;
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice,computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}
main();

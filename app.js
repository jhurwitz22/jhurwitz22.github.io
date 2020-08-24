// Caching the DOM - Storing in variables future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const actonMessage_div = document.getElementById("action-message");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const smileIcon_div = document.getElementById('user-icon');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function convertToWord(letter) {
    if (letter === "r") return "Rock ";
    if (letter === "p") return "Paper";
    return "Scissors";
};

function winActionMessages() {
    let winSentences = [
        "Real impressive, considering this is random...",
        "Oh, I bet you think you're a big shot now.",
        "Don't brag, you know this is random right?",
        "I'm a little impressed, but not really...",
        "I know you're looking at my source code..."
    ];
    let index = Math.floor(Math.random() * winSentences.length);
    return winSentences[index];
};



function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice).fontcolor('#2c9bc7')} beats ${convertToWord(computerChoice).fontcolor('#9340bd')}. You Win!`;
    actonMessage_div.innerHTML = winActionMessages();
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300)
};

function loseActionMessages() {
    let loseSentences = [
        "Did you think you could be a robot?",
        "Hilarious, I don't even have hands...",
        "Don't cry ... Okay maybe a little.",
        "Aw... Sorry, but not sorry.",
        "And you think I'm just randomly picking..."
    ];
    let index = Math.floor(Math.random() * loseSentences.length);
    return loseSentences[index];
};

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(computerChoice).fontcolor('#9340bd')} beats ${convertToWord(userChoice).fontcolor('#2c9bc7')}. You Lose!`;
    actonMessage_div.innerHTML = loseActionMessages();
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300)
};

function drawActionMessages() {
    let drawSentences = [
        "What are the chances? Oh yeah, 1 out of 3.",
        "Double or nothing, though I only take Bitcoin!",
        "Oh, real original...",
        "Way to think like a robot!",
        "I'm getting bored now..."
    ];
    let index = Math.floor(Math.random() * drawSentences.length);
    return drawSentences[index];
};

function draw(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `You both chose ${convertToWord(userChoice)}. It's a Draw!`
    actonMessage_div.innerHTML = drawActionMessages();
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300)
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
};

function main() {
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));
};

main();

import '../scss/styles.scss';
import checkResult from './checkResults';
let item;
let userChoice;
let counter = 1;
export let userScore = 0;
export let itemScore = 0;
export let resultsContent = document.querySelector('.results');

document.querySelector('.buttons').addEventListener('click', makeChoice);

function makeChoice({target}) {
    target.type === 'button' ? userChoice = target.value : null;
   playGame();
}

function programChoose() {
    const items = ['paper', 'rock', 'scissors'];
    item = items[Math.floor(Math.random() * items.length)];
};

function playGame() {
    const max = 4;
    programChoose();
    if (userChoice === 'scissors' && item === 'paper' ||
        userChoice === 'paper' && item === 'rock' ||
        userChoice ==='rock'&& item ==='scissors') {
        resultsContent.innerHTML = `Round ${counter}, ${userChoice} vs. ${item}, You’ve WON!`;
        counter++;
        userScore++;
    } else if (userChoice === item) {
        resultsContent.innerHTML = 'Draw';
    } else {
        resultsContent.innerHTML = `Round ${counter}, ${userChoice} vs. ${item}, You’ve LOST!`;
        counter++;
        itemScore++;
    }
    if (counter === max) {
        document.querySelector('.buttons').removeEventListener('click', makeChoice);
        checkResult();
    }   
}

document.querySelector('.reset').addEventListener('click', () => {
    resultsContent.innerHTML = '';
    counter = 1; itemScore = 0; userScore = 0;
    document.querySelector('.buttons').addEventListener('click', makeChoice);
})


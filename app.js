' use strict';

let sercrtNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let scoreVal = document.querySelector('.score');
let highscore = 0;

let message = document.querySelector('.message');
document.querySelector('.check').addEventListener('click', () => {
  let highscores = document.querySelector('.highscore');
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'inter text ⛔️';
  } else if (guess === sercrtNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = sercrtNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscores.textContent = highscores;
    }
  } else if (guess < sercrtNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreVal.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreVal.textContent = 0;
    }
  } else if (guess > sercrtNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      scoreVal.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreVal.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  sercrtNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  message.textContent = 'Start guessing...;';
});

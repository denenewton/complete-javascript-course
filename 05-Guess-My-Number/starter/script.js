'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let $ = document.querySelector.bind(this.document);
let highscore = 0;

function displayMessage(message) {
  $('.message').textContent = message;
}

$('.check').addEventListener('click', tentativa);

$('.again').addEventListener('click', GuessAgain);

function GuessAgain() {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  $('.score').textContent = '20';
  displayMessage('Start guessing...');
  $('.number').textContent = '?';
  $('body').style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
  $('.guess').value = '';
}

function tentativa() {
  const gess = Number($('.guess').value);
  const score = Number($('.score').textContent);

  if (!gess) {
    displayMessage('🚫 No number');
  } else if (gess > 20 || gess < 1) {
    $('.guess').value = '';
    return alert('Number need to be between 1 and 20');
  } else if (gess === secretNumber) {
    $('.number').textContent = `${secretNumber}`;
    if (highscore < score) {
      highscore = score;
      $('.highscore').textContent = `${highscore}`;
    }
    displayMessage('👍 Correct number');
    $('body').style.backgroundColor = ' #60b347';
    $('.number').style.width = '30rem';
  } else if (gess != secretNumber) {
    if (score > 1) {
      displayMessage(gess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      $('.score').textContent = `${score - 1}`;
    } else {
      displayMessage('😩 Game Over!');
      $('.score').textContent = `${score - 1}`;
      highscore = 0;
      $('.highscore').textContent = `${highscore}`;
    }
  }
}

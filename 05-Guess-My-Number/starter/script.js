'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let $ = document.querySelector.bind(this.document);
let highscore = 0;

$('.check').addEventListener('click', tentativa);

$('.again').addEventListener('click', again);

function again() {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  $('.score').textContent = '20';
  $('.message').textContent = 'Start guessing...';
  $('.number').textContent = '?';
  $('body').style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
  $('.guess').value = '';
}

function tentativa() {
  const gess = Number($('.guess').value);
  const score = Number($('.score').textContent);

  if (!gess) {
    $('.message').textContent = '🚫 No number';
  } else if (gess === secretNumber) {
    $('.number').textContent = `${secretNumber}`;
    if (highscore < score) {
      highscore = score;
      $('.highscore').textContent = `${highscore}`;
    }
    $('.message').textContent = '👍 Correct number';
    $('body').style.backgroundColor = ' #60b347';
    $('.number').style.width = '30rem';
  } else if (gess > secretNumber) {
    if (score > 1) {
      $('.message').textContent = '📈 Too High!';
      $('.score').textContent = `${score - 1}`;
    } else {
      $('.message').textContent = '😩 Game Over!';
      $('.score').textContent = `${score - 1}`;
      highscore = 0;
      $('.highscore').textContent = `${highscore}`;
    }
  } else if (gess < secretNumber) {
    if (score > 1) {
      $('.message').textContent = '📉 Too Low!';
      $('.score').textContent = `${score - 1}`;
    } else {
      $('.message').textContent = '😩 Game Over!';
      $('.score').textContent = `${score - 1}`;
    }
  }
}

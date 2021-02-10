'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let $ = document.querySelector.bind(this.document);

console.log(secretNumber);

$('.check').addEventListener('click', tentativa);

function tentativa() {
  const gess = Number($('.guess').value);
  const score = Number($('.score').textContent);

  if (!gess) {
    $('.message').textContent = '🚫 No number';
  } else if (gess === secretNumber) {
    $('.number').textContent = `${secretNumber}`;
    $('.message').textContent = '👍 Correct number';
  } else if (gess > secretNumber) {
    if (score > 1) {
      $('.message').textContent = '📈 Too High!';
      $('.score').textContent = `${score - 1}`;
    } else {
      $('.message').textContent = '😩 Game Over!';
      $('.score').textContent = `${score - 1}`;
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

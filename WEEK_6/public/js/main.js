window.addEventListener('DOMContentLoaded', (e) => {

  let game = new Game();

  /*
  WORD IS PRINTED IN THE CONSOLE FOR THE GRADER
  WOULD REMOVE THIS FOR A "PRODUCTION" BUILD
  */

  for (let button of Array.prototype.slice.call( document.getElementsByClassName('difficulty-button') ) ) {
    button.addEventListener('click', () => {
      game.setDifficulty(button.dataset.difficulty)
    })
  }

  document.getElementById('guess-button').addEventListener('click', () => {
    game.guessLetter(document.getElementById('guess-input').value)
  })

  let resetButtons = document.querySelectorAll('[data-reset]');

  resetButtons.forEach( (element) => {
    element.addEventListener('click', () => {
      game = new Game();
    })
  });



})
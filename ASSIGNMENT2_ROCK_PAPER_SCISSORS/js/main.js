window.addEventListener('DOMContentLoaded', (e) => {

  const gameResults = [];
  const form = document.getElementById('form')
  const totalGamesEle = document.getElementById('total_games')
  const winsEle = document.getElementById('wins')
  const lossesEle = document.getElementById('losses')
  const tiesEle = document.getElementById('ties')
  const allGames = document.getElementById('all-games')
  const resultMessage = document.getElementById('result-message')

  const getWinner = (userMove) => {

    let rock = 1
    let paper = 2
    let scissors = 3
    let random = Math.ceil(Math.random() * 3)

    if (random === userMove) {
      return null;
    }

    if (random === rock) {
      if (userMove == paper) {
        return true;
      }
      if (userMove == scissors) {
        return false;

      }
    }

    if (random === paper) {
      if (userMove == scissors) {
        return true;
      }
      if (userMove == rock) {
        return false;
      }
    }

    if (random === scissors) {
      if (userMove == rock) {
        return true;
      }
      if (userMove == paper) {
        return false;
      }
    }

  }

  const setStats = (gameResult) => {

    let result = gameResult.win ? 'You win!' : (gameResult.loss ? "You lose . . ." : "It's a tie!");

    totalGamesEle.innerHTML = gameResults.length;
    winsEle.innerHTML = gameResults.filter(game => game.win).length;
    lossesEle.innerHTML = gameResults.filter(game => game.loss).length;
    tiesEle.innerHTML = gameResults.filter(game => game.tie).length;

    let game = document.createElement('p')
    let dateSpan = document.createElement('span')
    dateSpan.innerHTML = `${new Date().toLocaleDateString()}:`
    game.innerHTML = `${result}`
    dateSpan.appendChild(game)
    dateSpan.classList.add('game')
    allGames.appendChild(dateSpan)

    resultMessage.innerHTML = result;
  }


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userMove = Array.from(document.getElementsByTagName('input')).find((input => input.checked)).value;
    let userDidWin = getWinner(userMove);

    let gameResult = {
      win: userDidWin === true,
      loss: userDidWin === false,
      tie: userDidWin === undefined
    };

    gameResults.push(gameResult)

    setStats(gameResult);

  });

})
document.addEventListener('DOMContentLoaded', () => {

  const btnDismissSetupScreen = document.getElementById('btn-dismiss-setup-screen')
  const btnNewGame = document.getElementById('btn-new-game')

  let game = new Game();

  const dismissSetupScreen = () => {
    let playerOne = document.getElementById('player-one')
    let playerTwo = document.getElementById('player-two')

    let [playerOneNameElement, ...playerOneColorsElements] = Array.prototype.slice.call(playerOne.getElementsByTagName('input'));
    let [playerTwoNameElement, ...playerTwoColorsElements] = Array.prototype.slice.call(playerTwo.getElementsByTagName('input'));


    let playerOneName = playerOneNameElement.value;
    let playerOneColor = playerOneColorsElements.find(color => color.checked);

    let playerTwoName = playerTwoNameElement.value;
    let playerTwoColor = playerTwoColorsElements.find(color => color.checked);

    if (playerOneName == "") {
      playerOneName = 'd3M0nSl4yEr'
    } 

    if (!playerOneColor) {
      return new GameNotification(`${playerOneName} must choose a color`)
    }

    if (playerTwoName == "") {
      playerTwoName = 'mastercheif_1011'
    } 

    if (!playerTwoColor) {
      return new GameNotification(`${playerTwoName} must choose a color`)
    }

    if (playerOneName == playerTwoName) {
      return new GameNotification('Players cannot have the same name')
    }

    if (playerOneColor.value == playerTwoColor.value) {
      return new GameNotification(`${playerOneName} and ${playerTwoName} cannot have the same color`)
    }

    game.setPlayerOne(playerOneName, playerOneColor.value)
    game.setPlayerTwo(playerTwoName, playerTwoColor.value)
    game.dismissSetupScreen()
  }

  const startNewGame = () => {
    /*
    I don't like this but I was having trouble
    with multiple instances of Game() which would
    cause a player to win when they haven't actually won
    and 'Invalid Move' notifications to show even when a valid 
    move was played.

    Definitely a little sloppy, please forgive.
    */
    location.reload();
  }

  btnDismissSetupScreen.addEventListener('click', () => dismissSetupScreen())
  document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      dismissSetupScreen()
    }
  });

  btnNewGame.addEventListener('click', () => startNewGame())
})


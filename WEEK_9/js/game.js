class Game {

  constructor () {
    // screens
    this.setupScreen = document.getElementById('setup-screen')
    this.board = document.getElementById('board')
    this.scoreboard = document.getElementById('scoreboard')
    this.activePlayerName = document.getElementById('active-player-name')
    this.resultScreen = document.getElementById('result-screen')
    this.resultMessage = document.getElementById('result-message')

    // elements
    this.canvas = document.getElementById('canvas')
    this.canvasBounds = this.canvas.getBoundingClientRect()

    // colors
    this.colors = {
      yellow: '#FFE66D',
      green: '#96E072',
      blue: '#6796e6',
      red: '#f44747',
    }
  
    // player data
    this.playerOne;
    this.playerTwo;
    this.activePlayer;
    this.winner = null;
    this.moves = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]

    this.resetBoard()

    // IDEA: series? -- best 2/3 -- best 3/5 -- etc...
  }

  resetBoard() {
    this.canvas.removeEventListener('click', (e) => this.doPlayerMove(e))
    this.canvas.addEventListener('click', (e) => this.doPlayerMove(e))
    this.setupScreen.classList.remove('fade-away');
    this.resultScreen.classList.remove('fade-in');
    this.playerOne = {name: '', color: ''};
    this.playerTwo = {name: '', color: ''};
    this.winner = null;
    this.moves = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(this.canvasBounds.width/3, 0, 1, this.canvas.height);
    ctx.fillRect((this.canvasBounds.width/3)*2, 0, 1, this.canvas.height);

    ctx.fillRect(0, this.canvasBounds.height/3, this.canvas.width, 1);
    ctx.fillRect(0, (this.canvasBounds.height/3)*2, this.canvas.width, 1);

  }

  setPlayerOne(name, color) {
    this.playerOne = {name, color: this.colors[color]};
    this.activePlayer = this.playerOne;
    this.activePlayerName.innerHTML = this.activePlayer.name;
    this.scoreboard.style.backgroundColor = this.activePlayer.color;
  }

  setPlayerTwo(name, color) {
    this.playerTwo = {name, color: this.colors[color]}
  }

  dismissSetupScreen() {
    this.setupScreen.classList.add('fade-away')
  }

  togglePlayer() {
    if (this.activePlayer == this.playerOne) {
      this.activePlayer = this.playerTwo;
    }
    else {
      this.activePlayer = this.playerOne;
    }

    this.activePlayerName.innerHTML = this.activePlayer.name;
    this.scoreboard.style.backgroundColor = this.activePlayer.color;
  }

  doPlayerMove(e) {
    const x = (e.clientX - this.canvasBounds.left) / this.canvasBounds.width;
    const y = (e.clientY - this.canvasBounds.top) / this.canvasBounds.height;

    let moveX = x < (0.33) ? 0 : ( x < (0.66) ? 1 : 2)
    let moveY = y < (0.33) ? 0 : ( y < (0.66) ? 1 : 2)

    if (!this.moves[moveY][moveX]) {
      this.moves[moveY][moveX] = this.activePlayer.name;
      this.drawBoard(moveX, moveY);
      let isWinner = this.checkForWinner();

      if (!isWinner) {
        this.togglePlayer();
      }
    }
    else {
      let notificationPrefix = this.moves[moveY][moveX] == this.activePlayer.name ? "You've" : `${this.activePlayer.name} has`
      new GameNotification(`${notificationPrefix} already moved here.`)
    }
  }

  checkForWinner() {
    let name = this.activePlayer.name;
    let activePlayerMoves = [];

    for (let i=0; i < this.moves.length; i++) {
      let column = this.moves[i]

      for (let j = 0; j < column.length; j++) {
        let move = column[j]

        if (move == name) {
          activePlayerMoves.push(`${i}${j}`)
        }
      }
    }

    if (
      ['00', '01', '02'].every(val => activePlayerMoves.includes(val)) ||
      ['10', '11', '12'].every(val => activePlayerMoves.includes(val)) ||
      ['20', '21', '22'].every(val => activePlayerMoves.includes(val)) ||
      ['00', '10', '20'].every(val => activePlayerMoves.includes(val)) ||
      ['01', '11', '21'].every(val => activePlayerMoves.includes(val)) ||
      ['02', '12', '22'].every(val => activePlayerMoves.includes(val)) ||
      ['00', '11', '22'].every(val => activePlayerMoves.includes(val)) ||
      ['20', '11', '02'].every(val => activePlayerMoves.includes(val))
    ) {
      this.winner = this.activePlayer;
      this.displayWinner()
      return true;
    }

    return false;
  }

  displayWinner() {
    this.resultMessage.innerHTML = `${this.winner.name} wins!`
    this.resultScreen.style.backgroundColor = this.winner.color;
    this.resultScreen.classList.add('fade-in')
    return;
  }

  drawBoard(moveX, moveY) {
    let squareSize = (this.canvasBounds.width/3)
    let drawX = moveX * squareSize
    let drawY = moveY * squareSize

    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = this.activePlayer.color;
    ctx.fillRect(drawX+1, drawY+1, squareSize-2, squareSize-2);
  }
  
}


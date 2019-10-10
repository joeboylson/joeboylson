class Game {

  constructor() {
    // screens
    this.difficultyScreen = document.getElementById('screen-difficulty');
    this.loseScreen = document.getElementById('screen-lose');
    this.winScreen = document.getElementById('screen-win');


    this.boardInputs = document.getElementById('board-inputs');
    this.usedLettersWrapper = document.getElementById('used-letters');
    this.triesSpan = document.getElementById('tries-span');
    this.difficulty;
    this.word;
    
    // drawing
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.steps = [
      this.drawGallows,
      this.drawHead,
      this.drawBody,
      this.drawRightHand,
      this.drawLeftHand,
      this.drawRightFoot,
      this.drawLeftFoot
    ];

    // stats
    this.guessedLetters = [];
    this.tries = 0;

    // initial setup
    this.resetBoard();
    this.drawBoard(this.context);
}



  getWord(difficulty) {
    return axios.get(`/word?difficulty=${difficulty}`)
    .then(function (response) {

      console.log(response.data)

      return response.data.toUpperCase();
    })
    .catch(function (error) {
      console.log(error);
    })
  }



  setDifficulty(difficulty) {
    this.getWord(difficulty).then(word => {
      this.setBoard(word);
      this.word = word;
    })
    this.difficultyScreen.classList.add('fade-up')
  }



  setBoard(word) {
    let span_wrapper = document.createElement('div')
    span_wrapper.id = 'span-wrapper';

    for (let letter of word) {
      let letter_span = document.createElement('span')
      let letter_p = document.createElement('p')
      letter_p.innerHTML = letter
      letter_p.classList.add('letter-span')
      letter_span.appendChild(letter_p)
      span_wrapper.appendChild(letter_span)
    }
    this.boardInputs.appendChild(span_wrapper)
  }



  resetBoard() {
    this.difficultyScreen.classList.remove('fade-up')
    this.boardInputs.innerHTML = '';
    this.usedLettersWrapper.innerHTML = '';
    this.tries = 0;
    this.triesSpan.innerHTML = this.tries;
    this.winScreen.classList.remove('fade-down')
    this.loseScreen.classList.remove('fade-down')
  }



  setUsedLetters(letters) {
    this.usedLettersWrapper.innerHTML = '';

    for (let letter of letters) {
      let letter_span = document.createElement('span')
      let letter_p = document.createElement('p')
      letter_p.innerHTML = letter
      letter_span.classList.add('used-letter')
      letter_span.appendChild(letter_p)
      this.usedLettersWrapper.appendChild(letter_span)
    }
  }


  drawBoard(context) {

    this.context.lineWidth = 20;
    this.canvas.width = this.canvas.width;
    this.context.strokeStyle = "#1f1f1f"

    let i = 0;
    while (i < this.tries) {
      this.steps[i](this.context);
      i++;
    }

  }


  setGameStatus() {
    this.triesSpan.innerHTML = this.tries;

    if (this.tries >= 7) {
      return this.loseScreen.classList.add('fade-down')
    }
    
    let allLetters = Array.prototype.slice.call( document.getElementsByClassName('letter-span') )
    let revealedLetters = Array.prototype.slice.call( document.getElementsByClassName('reveal') )
    
    if (revealedLetters.length >= allLetters.length) {
      return this.winScreen.classList.add('fade-down')
    }

  }
  

  guessLetter(letterGuess="") {

    if (letterGuess !== "" && !this.guessedLetters.includes(letterGuess.toUpperCase())) {

      let letters = Array.prototype.slice.call( document.getElementsByClassName('letter-span') )
      let matches = 0
      
      for (let letter of letters) {
        if (letter.innerHTML === letterGuess.toUpperCase()) {
          letter.classList.add('reveal');
          matches++;
        }
      }
      if (!matches) { this.tries++; }

      this.guessedLetters.push(letterGuess.toUpperCase())
    }
    else {
      if (letterGuess === "") {
        new GameNotification(`Please guess a letter`)
      }
      else {
        new GameNotification(`You've already used letter "${letterGuess.toUpperCase()}"`)
      }

    }

    this.setUsedLetters(this.guessedLetters);
    this.drawBoard()
    this.setGameStatus();
  }

  drawGallows(context) {
    context.beginPath();
    context.moveTo(350, 450);
    context.lineTo(10, 450);
    context.lineTo(70, 450);

    context.lineTo(70, 10);
    context.lineTo(200, 10);
    context.lineTo(200, 50);
    context.stroke();
  }

  drawHead(context) {
    context.beginPath();
    context.arc(200, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.lineWidth = 4;
    context.stroke();
  }

  drawBody(context) {
    context.beginPath();
    context.moveTo(200, 150);
    context.lineTo(200, 300);
    context.stroke();
  }

  drawRightHand(context) {
    context.beginPath();
    context.moveTo(200, 170);
    context.lineTo(150, 250);
    context.stroke();
  }

  drawLeftHand(context) {
    context.beginPath();
    context.moveTo(200, 170);
    context.lineTo(250, 250);
    context.stroke();
  }

  drawRightFoot(context) {
    context.beginPath();
    context.moveTo(200, 300);
    context.lineTo(150, 380);
    context.stroke();
  }

  drawLeftFoot(context) {
    context.beginPath();
    context.moveTo(200, 300);
    context.lineTo(250, 380);
    context.stroke();
  }

}
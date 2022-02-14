const gameBoard = Array.from(document.querySelectorAll('.box'))
const replay = document.querySelector('#restart')
const gameInfo = document.querySelector('#gameInfo')

let gameArray = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let continueGame = true 

const playerOneWon = 'Congrats Player one!'
const playerTwoWon = 'Congrats Player two!'
const tie = 'Draw! Nobody wins? You both win?' 


const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5 ,8]
]

function checkGameResult() {
let gameWon = false
for (let i = 0; i<= 7; i++) {
const endGame = win[i];
const a = gameArray[endGame[0]]
const b = gameArray[endGame[1]]
const c = gameArray[endGame[2]]
if (a === '' || b === '' || c === '') {
  continue;
}
  if (a === b && b === c) {
     gameWon = true;
    break;
  }
}

if (gameWon) {
  declareWinner(currentPlayer === 'X' ? playerOneWon : playerTwoWon); 
  continueGame = false;
  return
}

if (!gameArray.includes('')) 
  declareWinner(tie)
}
 
function declareWinner() {
    if (playerOneWon) {
        gameInfo.innerText = playerOneWon
    }
    else if (playerTwoWon) {
        gameInfo.innerText = "playerTwoWon"
    }
    else {
        gameInfo.innerText = "tie"
    }
}

const isBoxEmpty = (box) => { 
  if (box.innerText === 'X' || box.innerText === 'O') {
    return false;
  }
  return true
}

const playerChoice = (index) => {
  gameArray[index] = currentPlayer
}

function changePlayer () { 
  if (currentPlayer = 'X') {
    currentPlayer = 'O'
  }
 else if (currentPlayer = 'O') {
currentPlayer = 'X'}}


const playerMove = (box, index) => {
  if(isBoxEmpty(box) && continueGame) {
    box.innerText = currentPlayer
    playerChoice(index)
    checkGameResult()
    changePlayer()

  }
}

const restart = () => {
  gameArray = ['', '', '', '', '', '', '', '']
  continueGame = true;


if (currentPlayer === 'O') {
  changePlayer();
}
gameBoard.forEach(box => {
  box.innerText = '';
})
}
window.addEventListener('DOMContentLoaded', () => {
gameBoard.forEach( (box, index) => {
  box.addEventListener('click', () => playerMove(box, index))
  let currentPlayer = 'O'
  })

  console.log(gameArray)

replay.addEventListener('click', restart)
  ; 
});


const gameBoard = Array.from(document.querySelectorAll('.box'))
const replay = document.querySelector('#restart')
const gameInfo = document.querySelector('#gameInfo')

let gameArray = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let continueGame = true 

let playerOneWon = 'Congrats Player one!'
let playerTwoWon = 'Congrats Player two!'
let tie = 'Draw! Nobody wins? You both win?' 
let j = 2
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

function declareWinner() {
  
    if (j % 2 > 0) {
      console.log(currentPlayer)
        gameInfo.innerText = playerOneWon
    }
    else if (j % 2 === 0) {
      
        gameInfo.innerText = playerTwoWon
    }
    else {
        gameInfo.innerText = tie
    }
}

if (gameWon) {
  declareWinner()
  continueGame = false;
  return }


if (!gameArray.includes('')){ 
  gameInfo.innerText = tie
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
  if (j % 2 === 0) {
    currentPlayer = 'X'
   }
   else {
     currentPlayer = 'O'
   }}


function playerMove(box, index) {
  if (isBoxEmpty(box) && continueGame) {
    box.innerText = currentPlayer
    playerChoice(index)
    j++ 
    changePlayer()
    checkGameResult()
   
    
  

    
    
  }
}

const restart = () => {
  gameArray = ['', '', '', '', '', '', '', '']
  continueGame = true;
  gameInfo.innerText = ""
  currentPlayer = "X"



gameBoard.forEach(box => {
  box.innerText = '';
})
}
window.addEventListener('DOMContentLoaded', () => {
gameBoard.forEach( (box, index) => {
  box.addEventListener('click', () => playerMove(box, index))
  })

  

replay.addEventListener('click', restart)
  ; 
});


function generateRandomNumberBetweenOneAndCellCount() {
  return Math.floor(Math.random() * (cellCount - 1 + 1)) + 1;
}
function clearGridForNewGame(){
  const activeCell = document.getElementById(currentCellId);
  activeCell.className = ""
}
function clearScoreForNewGame(){
  currentScore.innerText = 0
}

let currentScore = document.getElementById('current-score');
let currentCellId;

document.addEventListener("DOMContentLoaded", function() {

  (function initializeGame(){

    let gameOptions = document.getElementById("game-options");
    let startButton = document.createElement("BUTTON");
    let usernameInputField = document.createElement("INPUT")
    usernameInputField.placeholder = "New User"
    gameOptions.append(usernameInputField)
    startButton.innerText = "Start Game";
    startButton.id = "start-button";
    gameOptions.append(startButton);
    startButton.addEventListener("click", handleChoosingNextCell)

  })()



  function handleChoosingNextCell() {
    const activeCellId = generateRandomNumberBetweenOneAndCellCount();
    selectAndStyleActiveCell(activeCellId);

  }

  function selectAndStyleActiveCell(activeCellId) {
    const activeCell = document.getElementById(activeCellId);
    activeCell.className = 'pulse'
    currentCellId = activeCellId
  }

  gridContainer.addEventListener('click', respondToUserClick)

  function respondToUserClick(){
    if(parseInt(event.target.id) === currentCellId){
      currentScore.innerText++
      const activeCell = document.getElementById(currentCellId);
      activeCell.className = ""
      handleChoosingNextCell()
    }else {

      alert(`You lost the game. Your score is ${currentScore.innerText}.`)
      clearGridForNewGame()
      clearScoreForNewGame()

    }

  }


})

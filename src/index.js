function generateRandomNumberBetweenOneAndCellCount() {
  return Math.floor(Math.random() * (cellCount - 1 + 1)) + 1;
}

let currentScore = document.getElementById('current-score');
let currentCellId;

document.addEventListener("DOMContentLoaded", function() {

  let gameOptions = document.getElementById("game-options");
  let startButton = document.createElement("BUTTON");
  startButton.innerText = "Start Game";
  startButton.id = "start-button";
  gameOptions.append(startButton);
  startButton.addEventListener("click", handleChoosingNextCell)


  function handleChoosingNextCell() {
    const activeCellId = generateRandomNumberBetweenOneAndCellCount();
    selectAndStyleActiveCell(activeCellId);

  }

  function selectAndStyleActiveCell(activeCellId) {
    const activeCell = document.getElementById(activeCellId);
    activeCell.className = 'active'
    currentCellId = activeCellId
  }

  gridContainer.addEventListener('click', respondToUserClick)

  function respondToUserClick(){
    if(parseInt(event.target.id) === currentCellId){
      currentScore.innerText++
      const activeCell = document.getElementById(currentCellId);
      activeCell.className = ""
      handleChoosingNextCell()
    }

  }


})

// function a(){
//   console.log('hi')
// }
//
// a()
function generateRandomNumberBetweenOneAndCellCount() {
  return Math.floor(Math.random() * (cellCount - 1 + 1)) + 1;
}

let currentCellId;

document.addEventListener("DOMContentLoaded", function() {

  let gameOptions = document.getElementById("game-options");
  let startButton = document.createElement("BUTTON");
  startButton.innerText = "Start Game";
  startButton.id = "start-button";
  gameOptions.append(startButton);
  startButton.addEventListener("click", startGame)


  function startGame() {
    const activeCellId = generateRandomNumberBetweenOneAndCellCount();
    selectAndStyleActiveCell(activeCellId);

  }

  function selectAndStyleActiveCell(activeCellId) {
    const activeCell = document.getElementById(activeCellId);
    activeCell.innerText = `${activeCellId}`;
  }
})

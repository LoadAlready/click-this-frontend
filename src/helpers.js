function generateRandomNumberBetweenOneAndCellCount() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

function hideCursorElement(){
  const gameGrid = document.getElementById('gameGrid')
  gameGrid.className+= " hide-cursor"
}

function clearScoreForNewGame(){
  currentScore.innerText = 0
}

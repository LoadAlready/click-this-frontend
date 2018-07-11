function generateRandomNumberBetweenOneAndCellCount() {
  return Math.floor(Math.random() * (cellCount - 1 + 1)) + 1;
}

function hideCursorElement(){
  const gameGrid = document.getElementById('gameGrid')
  gameGrid.className+= " hide-cursor"
}

function clearScoreForNewGame(){
  currentScore.innerText = 0
}

function createLives() {
  let lives = 3;
  return lives;
}

function createAndAppendLivesHTML() {
  let livesHTML = document.createElement("p");
  livesHTML.id = "lives-id"
  let gameStatsDiv = document.getElementById("game-stats");
  gameStatsDiv.append(livesHTML);
  livesHTML.innerText = createLives();
}

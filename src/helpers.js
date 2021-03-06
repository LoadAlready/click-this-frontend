let soundDiv = document.getElementById("sound-div");

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

function createLives() {
  let lives = 3;
  return lives;
}

function createAndAppendLivesHTML() {
  let livesHTML = document.createElement("p");
  livesHTML.id = "lives-id"
  livesHTML.className= "retro-font current-score"
  let gameStatsDiv = document.getElementById("game-stats");
  gameStatsDiv.append(livesHTML);
  livesHTML.innerText = createLives();
}

function setUpSound() {
  let mySound = new Audio("./sounds/correctClickSound.wav")
  mySound.id = "correctClick"
  soundDiv.append(mySound)
}

function playCorrectClickSound(e) {
  e.preventDefault()
  const mySound = document.getElementById("correctClick");
  mySound.play();

}

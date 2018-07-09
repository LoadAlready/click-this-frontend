// function a(){
//   console.log('hi')
// }
//
// a()

document.addEventListener("DOMContentLoaded", function() {

  let gameOptions = document.getElementById("game-options");
  let startButton = document.createElement("BUTTON");
  startButton.innerText = "Start Game";
  startButton.id = "start-button";
  gameOptions.append(startButton);
  startButton.addEventListener("click", startGame)


  function startGame() {
    const randomCell = Math.floor(Math.random() * (cellCount - 1 + 1)) + 1;
    debugger; 
  }
})

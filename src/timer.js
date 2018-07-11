const ingameTimer = document.getElementById('ingame-timer')
let timerInterval;

function startInGameTimer(){
  timerInterval = setInterval(countdownTimer, 1000)
}

function countdownTimer(){
  ingameTimer.innerText--
  if(ingameTimer.innerText <= -1){
    endGame()
  }
}

function stopAndResetTimer(){
  clearInterval(timerInterval)
  ingameTimer.innerText = 15
}

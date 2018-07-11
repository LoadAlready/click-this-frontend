const ingameTimer = document.getElementById('ingame-timer')
let timerInterval;

function startInGameTimer(){
  timerInterval = setInterval(countdownTimer, 1000)
}

function addQuarterSecondToTimer(){
  let currentTimerValue = parseFloat(ingameTimer.innerText) + 0.25
  ingameTimer.innerText = currentTimerValue.toString()
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

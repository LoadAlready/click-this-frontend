let currentScore = document.getElementById('current-score');
let currentCellId;
initialTopTenFetch();
gridContainer.addEventListener('click', respondToUserClick);

  (function initializeGame(){
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", handleChoosingNextCell)
    startButton.addEventListener("click", startInGameTimer)
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


  function respondToUserClick(){
    if(parseInt(event.target.id) === currentCellId){
      currentScore.innerText++
      const activeCell = document.getElementById(currentCellId);
      activeCell.className = ""
      handleChoosingNextCell()
      hideCursorElement()
    }else {
      endGame()
    }
  }

  function endGame(){
    sendScoreToDb()
    alert(`You lost the game. Your score is ${currentScore.innerText}.`)
    clearGridForNewGame()
    clearScoreForNewGame()
    stopAndResetTimer()
  }

let currentScore = document.getElementById('current-score');
let currentCellId;
initialTopTenFetch();
gridContainer.addEventListener('click', respondToUserClick);

  (function initializeGame(){
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame)
    startButton.addEventListener("click", startInGameTimer)
  })()

  function startGame() {
    const inputGridSize = document.getElementById("grid-size-selection").value
    grid.innerHTML = "";
    createGrid(parseInt(inputGridSize))
    handleChoosingNextCell()
  }

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

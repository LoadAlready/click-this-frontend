let currentScore = document.getElementById('current-score');
let currentMode = document.getElementById('game-mode-selection');
let bodyDiv = document.querySelector("body");
let gridSizeSelection = document.getElementById("grid-size-selection");
let currentCellId;
let showCursorInterval;
let hideCursorInterval;
initialTopTenFetch();

  (function initializeGame(){
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame)
    startButton.addEventListener("click", startInGameTimer)
    setUpSound()
    grid.addEventListener("click", playCorrectClickSound);
  })()

  function startGame(e) {
    e.preventDefault()
    if (currentMode.value === "normal") {
      selectGridSizeForCssAndCreate()
      handleChoosingNextCellNormalMode()
      createAndAppendLivesHTML()
      startCursorInterval();
      startHideCursorInterval();
      gridContainer.addEventListener('click', respondToUserClick);
    } else if (currentMode.value === "time-trial") {
        const timeTrialMode = new TimeTrialMode;
        timeTrialMode.startTimeTrialMode();
    }
  }

  function selectGridSizeForCssAndCreate() {
    const inputGridSize = document.getElementById("grid-size-selection").value
    if (inputGridSize === "10") {
      createGrid(parseInt(inputGridSize), 'small')
    } else if (inputGridSize === '15') {
      createGrid(parseInt(inputGridSize), 'medium')
    } else if (inputGridSize === '20') {
      createGrid(parseInt(inputGridSize), 'large')
    }
  }

  function handleChoosingNextCellNormalMode() {
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
      handleChoosingNextCellNormalMode()
    }else {
      let livesDiv = document.getElementById("lives-id");
      if (parseInt(livesDiv.innerText) > 0 ) {
          livesDiv.innerText--;
      } else {
        endGame()
      }
    }
  }

  function startCursorInterval() {
    showCursorInterval = setInterval(revealCursor, 2000)
  }

  function startHideCursorInterval() {
    hideCursorInterval = setInterval(hideCursor, 4000)
  }

  function hideCursor() {
    bodyDiv.className =  " hide-cursor"
  }
  function revealCursor() {
    bodyDiv.className = "show-cursor";
  }

  function endGame(){
    sendScoreToDb()
    alert(`You lost the game. Your score is ${currentScore.innerText}.`)
    clearScoreForNewGame()
    stopAndResetTimer()
    // location.reload();
  }

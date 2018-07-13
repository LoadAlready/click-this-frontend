class TimeTrialMode {

  constructor() {
    this.timeTrialActiveCells = [];
    this.currentScore = document.getElementById('current-score');
  }

  startTimeTrialMode() {
  this.timeTrialSelectGridSizeForCssAndCreate()
  this.handleChoosingNextCell();
  this.startIntervalForActiveCell();
  gridContainer.addEventListener('click', this.timeTrialInGameClickHandler.bind(this));
 }

  timeTrialSelectGridSizeForCssAndCreate() {
   const inputGridSize = document.getElementById("grid-size-selection").value
   if (inputGridSize === "10") {
     createGrid(parseInt(inputGridSize), 'small')
   } else if (inputGridSize === '15') {
     createGrid(parseInt(inputGridSize), 'medium')
   } else if (inputGridSize === '20') {
     createGrid(parseInt(inputGridSize), 'large')
   }
 }


 handleChoosingNextCell() {
  this.activeCellId = generateRandomNumberBetweenOneAndCellCount();
  this.activeCell = document.getElementById(`${this.activeCellId}`)
  while ( this.checkCellNotInUseAndNotNextToUsedCell() === false ){
    this.activeCellId = generateRandomNumberBetweenOneAndCellCount();
    this.activeCell = document.getElementById(`${this.activeCellId}`)
  }
  this.selectAndStyleActiveCell(this.activeCellId);

}

checkCellNotInUseAndNotNextToUsedCell() {
  const cellIdsInUse = this.timeTrialActiveCells.map( cell => parseInt(cell.id));
  if (cellIdsInUse.every(this.checkThatActiveCellIsNotAdjacent, this) === false) {
    return false;
  } else if (this.timeTrialActiveCells.includes(this.activeCell)) {
    return false;
  } else {
    return true;
  }
}

checkThatActiveCellIsNotAdjacent(cellId) {
  return (cellId !== this.activeCellId + 1 && cellId !== this.activeCellId - 1)
}


 selectAndStyleActiveCell(activeCellId) {
  const activeCell = document.getElementById(activeCellId);
  activeCell.className = 'pulse'
  this.timeTrialActiveCells.push(activeCell);
}

  startIntervalForActiveCell(){
    setInterval(this.handleActivatingNextCell.bind(this), 333)
  }

  handleActivatingNextCell(){
    if (this.timeTrialActiveCells.length < 6){
      this.handleChoosingNextCell()
    }
  }

  timeTrialInGameClickHandler(){
    if( this.timeTrialActiveCells.includes(event.target) ){
      this.currentScore.innerText++
      addQuarterSecondToTimer()
      this.deactivateClickedCell(event)

    } else if (event.target.id === "start-button"){
      console.log('=P')
    } else {
      removeHalfSecondFromTimer()
    }
  }

  deactivateClickedCell(event){
    const clickedCell = event.target
    const indexOfClickedCell = this.timeTrialActiveCells.indexOf(clickedCell)
    this.timeTrialActiveCells.splice(indexOfClickedCell, 1)
    clickedCell.className = ""
  }


}

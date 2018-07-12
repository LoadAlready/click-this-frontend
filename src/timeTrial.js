class TimeTrialMode {

  constructor() {
    this.timeTrialActiveCells = [];
    this.currentScore = document.getElementById('current-score');
  }

  startTimeTrialMode() {
  this.handleChoosingNextCell();
  this.startIntervalForActiveCell();
  gridContainer.addEventListener('click', this.timeTrialInGameClickHandler.bind(this));
 }


 handleChoosingNextCell() {
  this.activeCellId = generateRandomNumberBetweenOneAndCellCount();
  this.activeCell = document.getElementById(`${this.activeCellId}`)
  // let cellCheckResults = this.checkCellNotInUseAndNotNextToUsedCell();
  while ( this.checkCellNotInUseAndNotNextToUsedCell() === false ){
    this.activeCellId = generateRandomNumberBetweenOneAndCellCount();
    this.activeCell = document.getElementById(`${this.activeCellId}`)
    // cellCheckResults = this.checkCellNotInUseAndNotNextToUsedCell();
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
  // debugger;
  return (cellId !== this.activeCellId + 1 && cellId !== this.activeCellId - 1)
}


 selectAndStyleActiveCell(activeCellId) {
   debugger;
  const activeCell = document.getElementById(activeCellId);
  activeCell.className = 'pulse'
  this.timeTrialActiveCells.push(activeCell);
}

  startIntervalForActiveCell(){
    setInterval(this.handleActivatingNextCell.bind(this), 333)
  }

  handleActivatingNextCell(){

    if (this.timeTrialActiveCells.length < 3){
      this.handleChoosingNextCell()
    }
  }

  timeTrialInGameClickHandler(){
    if( this.timeTrialActiveCells.includes(event.target) ){
      this.currentScore.innerText++
      addQuarterSecondToTimer()
      this.deactivateClickedCell(event)

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

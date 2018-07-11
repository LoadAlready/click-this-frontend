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
  let activeCellId = generateRandomNumberBetweenOneAndCellCount();
  let activeCell = document.getElementById(`${activeCellId}`)

  while ( this.timeTrialActiveCells.includes(activeCell) ){
    activeCellId = generateRandomNumberBetweenOneAndCellCount();
    activeCell = document.getElementById(`${activeCellId}`)
  }
  this.selectAndStyleActiveCell(activeCellId);

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

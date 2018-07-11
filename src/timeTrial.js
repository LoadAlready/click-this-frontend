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
  const activeCellId = generateRandomNumberBetweenOneAndCellCount();
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
    }
  }



}

class TimeTrialMode {

  constructor() {
    const timeTrialActiveCells = [];
    this.timeTrialActiveCells = timeTrialActiveCells;
  }

  startTimeTrialMode() {
  this.handleChoosingNextCell();
 }

 setInitialActiveCell() {

}

 handleChoosingNextCell() {
  const activeCellId = generateRandomNumberBetweenOneAndCellCount();
  this.selectAndStyleActiveCell(activeCellId);

}

 selectAndStyleActiveCell(activeCellId) {
  const activeCell = document.getElementById(activeCellId);
  activeCell.className = 'pulse'
  debugger; 
  this.timeTrialActiveCells.push(activeCell);
}

}

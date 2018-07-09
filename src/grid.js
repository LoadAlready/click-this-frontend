const gridContainer = document.getElementById("grid-container")
let cellCount;

function createGrid(gridSize) {
  cellCount = gridSize * gridSize;
  const grid = document.createElement("TABLE");
  gridContainer.append(grid);
  for (var rowCounter = 0; rowCounter < gridSize; rowCounter++) {
    const row  = document.createElement("tr");
    grid.append(row);
    for (var columnCounter = 0; columnCounter < gridSize; columnCounter++) {
      const column = document.createElement("td");
      row.append(column);
    }
  }
}

createGrid(10);
debugger;

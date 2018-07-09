const gridContainer = document.getElementById("grid-container")
let cellCount;

function createGrid(gridSize) {
  cellCount = gridSize * gridSize;
  const grid = document.createElement("TABLE");
  grid.className = "grid";
  gridContainer.append(grid);
  let cellId = 1;
  for (var rowCounter = 0; rowCounter < gridSize; rowCounter++) {
    const row  = document.createElement("tr");
    row.dataset.rowId = rowCounter + 1;
    grid.append(row);
    for (var cellCounter = 0; cellCounter < gridSize; cellCounter++) {
      const cell = document.createElement("td");
      cell.id = cellId++;
      row.append(cell);
    }
  }
}


createGrid(10);

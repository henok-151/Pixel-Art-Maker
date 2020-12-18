let color = document.getElementById("colorPicker").value;
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
let button = document.getElementsByTagName("button")[0];
let grid = document.getElementById("pixelCanvas");

// Listens for a click of the submit button.
button.addEventListener("click", function(e) {
  e.preventDefault();
  // Empties canvas
  grid.innerHTML = "";
  makeGrid()
})

// Makes the canvas from height and width inputs.
function makeGrid() {
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  let color = document.getElementById("colorPicker").value;

  for (r = 0; r < height; r++) {
    let gridRow = document.createElement('tr');
    grid.appendChild(gridRow);
    for (c = 0; c < width; c++) {
      let gridColumn = document.createElement('td');
      gridRow.appendChild(gridColumn);
      
      // Listens for a click of a grid square and colors the sqaure.
      gridColumn.addEventListener('click', function(e) {
        let color = document.getElementById("colorPicker").value;
        gridColumn.style.backgroundColor = color;
      });
    }
  }
}

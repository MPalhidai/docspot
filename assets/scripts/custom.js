<<<<<<< HEAD
//Does not work on IE computing current style is not supported

var element = document.querySelector('#docspot');
var size = 4;
var colors = ["rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(75, 0, 130)", "rgb(238, 130, 238)"];
var speed = 250;

function generateGrid(size, allIds) {
=======
//Does not work on IE
//breaks if SIZE^2 <= PAUSE/SPEED (integer devision)
var ELEMENT = document.querySelector('#docspot');
var SPEED = 250; // 250 milliseconds pause between function calls
var PAUSE = 2000; // 2000 milliseconds pause before cell can be selected again
var SIZE = 4; // 4 nxn size grid
var COLORS = ["rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(75, 0, 130)", "rgb(238, 130, 238)"];

function generateGrid(SIZE, allIds) {
>>>>>>> dev
  cellId = 1;
  for (var rows = 0; rows < SIZE; rows++) {
    var row = document.createElement("tr");
    for (var columns = 0; columns < SIZE; columns++) {
      var cell = document.createElement("td");
      cell.className = "cell";
      cell.id = (cellId).toString();
      allIds.push(cellId);
      cellId++;
      row.appendChild(cell);
    };
    ELEMENT.appendChild(row);
  };
};

function selectCell(selectedIds, allIds) {

  console.log(selectedIds);

  //select random cell id
  var allowedIds = allIds.filter(x => !selectedIds.includes(x));
  var cellId = allowedIds[Math.floor(Math.random() * allowedIds.length)];
  console.log(allowedIds);
  console.log(cellId);

  //get cell to manipulate
  var cell = document.getElementById(cellId.toString());

  //determine cell's current backgroundColor
  var computedStyle = document.defaultView.getComputedStyle(cell, null);
  var currentColor = new Array(computedStyle.getPropertyValue('background-color'));
  console.log(currentColor);

  //select random color not current color
  var allowedColors = COLORS.filter(x => !currentColor.includes(x));
  var color = allowedColors[Math.floor(Math.random() * allowedColors.length)];
  console.log(allowedColors);
  console.log(color);

  //store chosen id to not be chosen again soon
  selectedIds.push(cellId);
  if (selectedIds.length > PAUSE/SPEED) selectedIds.shift(); // 2 seconds worth of function calls

  //change cell's background color
  cell.style.backgroundColor = color;
};

function run() {
  var selectedIds = [];
  generateGrid(SIZE, allIds = []);
  setInterval(function () {
    selectCell(selectedIds, allIds)
<<<<<<< HEAD
  }, speed);
=======
  }, SPEED);
>>>>>>> dev
};

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});

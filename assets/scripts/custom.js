//Does not work on IE computing current style is not supported

var element = document.querySelector('#docspot');
var size = 32;
var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

var speed = 1;

function generateGrid(size, allIds) {
  cellId = 1;
  for (var rows = 0; rows < size; rows++) {
    var row = document.createElement("tr");
    for (var columns = 0; columns < size; columns++) {
      var cell = document.createElement("td");
      cell.className = "cell";
      cell.id = (cellId).toString();
      allIds.push(cellId);
      cellId++;
      row.appendChild(cell);
    };
    element.appendChild(row);
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
  var allowedColors = colors.filter(x => !currentColor.includes(x));
  var color = allowedColors[Math.floor(Math.random() * allowedColors.length)];
  console.log(allowedColors);
  console.log(color);

  //store chosen id to not be chosen again soon
  selectedIds.push(cellId);
  if (selectedIds.length > 8) selectedIds.shift(); // 8 is 2 seconds worth of function calls

  //change cell's background color
  cell.style.backgroundColor = color;
};

function run() {
  var selectedIds = [];
  generateGrid(size, allIds = []);
  setInterval(function () {
    selectCell(selectedIds, allIds)
  }, speed);
};

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});

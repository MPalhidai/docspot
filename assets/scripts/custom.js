var element = document.querySelector('#docspot');
var size = 4;
var colors = [];

function generateGrid(size) {

    for (var rows = 0; rows < size; rows++) {
      var row = document.createElement("tr");
      for (var columns = 0; columns < size; columns++) {
        var cell = document.createElement("td");
        cell.className = "grid";
        row.appendChild(cell);
      };
      element.appendChild(row);
    };
};

function run() {
    // do something
    generateGrid(size);
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});

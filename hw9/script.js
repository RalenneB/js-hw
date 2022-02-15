// EVENTS HW

/**
 * 1.Create an html-page for displaying and editing text. When opening the page, the text should be displayed with div tag. When clicking Ctrl+E, textarea appears instead of div and can be edited. When pressing Ctrl+S, the div with edited text appears instead of textarea. Don’t forget to turn off default settings for these hotkey combinations.
 */

let editMode = false;
let currentTextValue = document.getElementById("div").innerText;

function setupEditModeListener() {
  document.addEventListener("keydown", function (event) {
    if (event.code == "KeyE" && event.ctrlKey) {
      event.preventDefault();
      if (editMode) {
        return;
      }
      //initialisation
      let txtArea = document.createElement("textarea");
      let div = document.getElementById("div");
      txtArea.setAttribute("id", "txtArea");
      txtArea.innerHTML = div.innerText;
      txtArea.oninput = function (changeEvent) {
        currentTextValue = changeEvent.target.value;
      };
      document.body.appendChild(txtArea);
      txtArea.focus();
      div.remove();
      //   document.getElementsByTagName("textarea")[0].disabled = true;
      editMode = true;
    }
  });
}

function setupViewModeListener() {
  document.addEventListener("keydown", function (event) {
    if (event.code == "KeyS" && event.ctrlKey) {
      event.preventDefault();
      if (!editMode) {
        return;
      }
      let txtArea = document.getElementById("txtArea");
      let div = document.createElement("div");
      div.setAttribute("id", "div");
      div.innerText = currentTextValue;
      document.body.append(div);
      txtArea.remove();
      editMode = false;
    }
  });
}
setupEditModeListener();
setupViewModeListener();

/*
2.Create an html-page with a large table. When clicking the column heading, it is necessary to sort data of that column. Note that numerical values should be sorted as numbers, not as strings.

*/
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
/*
3.Create an html-page with a text block in a frame. Execute the possibility to change the size of the block when holding the mouse cursor in the bottom right corner and pull it further.
 */
var p = document.getElementById("p");

p.addEventListener(
  "click",
  function init() {
    p.removeEventListener("click", init, false);
    p.className = p.className + " resizable";
    var resizer = document.createElement("div");
    resizer.className = "resizer";
    p.appendChild(resizer);
    resizer.addEventListener("mousedown", initDrag, false);
  },
  false
);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
  startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
  document.documentElement.addEventListener("mousemove", doDrag, false);
  document.documentElement.addEventListener("mouseup", stopDrag, false);
}

function doDrag(e) {
  p.style.width = startWidth + e.clientX - startX + "px";
  p.style.height = startHeight + e.clientY - startY + "px";
}

function stopDrag(e) {
  document.documentElement.removeEventListener("mousemove", doDrag, false);
  document.documentElement.removeEventListener("mouseup", stopDrag, false);
}

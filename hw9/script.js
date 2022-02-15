// const { get, nodeName } = require("jquery");

/**
 * 1.Create an html-page for displaying and editing text. When opening the page, the text should be displayed with div tag. When clicking Ctrl+E, textarea appears instead of div and can be edited. When pressing Ctrl+S, the div with edited text appears instead of textarea. Don’t forget to turn off default settings for these hotkey combinations.
 */
// function addDiv() {
//   let firstDiv = document.getElementById("div");
//   let div = document.createElement("div");
//   div.innerText = "Some text to be changed";
//   firstDiv.appendChild(div);

//   div.disabled = true; //not working
//   return div;
// }

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

3.Create an html-page with a text block in a frame. Execute the possibility to change the size of the block when holding the mouse cursor in the bottom right corner and pull it further.
 */

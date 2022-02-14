// DOM Homework
/*.
1. Create a page that displays a numbered list of tracks:
2. Create an html page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

3. Create an html page with streetlights and a button that switches the color to the next one.
 */

// const { doc } = require("prettier");

//1. Create a page that displays a numbered list of tracks:

function createListOfTracks() {
  let playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN",
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY",
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD",
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER",
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER",
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK",
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU",
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN",
    },
  ];
  let list = document.getElementById("list"); //ordered ofc
  for (elem of playList) {
    let tracks = document.createElement("li");
    tracks.innerHTML = elem.song + " by " + elem.author;
    list.appendChild(tracks);
  }
  //disable the button once clicked otherwise on each click, the list reappears
  document.getElementById("btn").disabled = true;
  return list;
}

/*2. Create an html page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE. */

//logic is provided by bootstrap or we can use js too
// $(document).ready(function(){
//   $("#myBtn").click(function(){
//     $("#myModal").modal();
//   });
// });

/**
 Create an html page with streetlights and a button that switches the color to the next one. 
 */

function changeButtonColor() {
  //  actually this just colors the buttons in r y g
  let btn3 = document.getElementById("third");
  btn3.style.backgroundColor = "green";
  let btn2 = document.getElementById("second");
  btn2.style.backgroundColor = "yellow";
  let btn1 = document.getElementById("first");
  btn1.style.backgroundColor = "red";
}

function switchColor() {
  //long not so elegant solution
  let btnOne = document.getElementById("one");
  let btnTwo = document.getElementById("two");
  let btnThree = document.getElementById("three");

  let switchbtn = document.getElementById("switch");
  let oneColors = ["rgb(209, 98, 204)", "rgb(132, 53, 179)", "pink"];
  let twoColors = ["rgb(132, 53, 179)", "pink", "rgb(209, 98, 204)"];
  let threeColors = ["pink", "rgb(209, 98, 204)", "rgb(132, 53, 179)"];

  switchbtn.onclick = function () {
    color1 = oneColors.shift();
    oneColors.push(color1);

    color2 = twoColors.shift();
    twoColors.push(color2);

    color3 = threeColors.shift();
    threeColors.push(color3);

    btnOne.style.backgroundColor = color1;
    btnTwo.style.backgroundColor = color2;
    btnThree.style.backgroundColor = color3;
  };
}

// function switchSmall() {
  // // not ok :()
//   let btnOne = document.getElementById("one");
//   let btnTwo = document.getElementById("two");
//   let btnThree = document.getElementById("three");

//   let switchbtn = document.getElementById("switch");
//   let colors = ["pink", "rgb(209, 98, 204)", "rgb(132, 53, 179)"];
//   switchbtn.onclick = function () {
//     color1 = colors.slice(1, -1);
//     colors.push(color1);

//     color2 = colors.slice(-1);
//     colors.push(color2);

//     color3 = colors.slice(0, -2);
//     colors.push(color2);

//     btnOne.style.backgroundColor = color1;
//     btnTwo.style.backgroundColor = color2;
//     btnThree.style.backgroundColor = color3;
//   };
// }

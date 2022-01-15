// 1. Get user name
// 2. Check if user is one of SE Front-End group
// 3. If user is member of SE Front-End group show on console message 'Access granted'
// 3. If no show on console message 'Access declined'

let userName = prompt("What is your name?");

let feList = [
  "Raluca Baceanu",
  "Bharghavi",
  "Haleema Sameena",
  "Hassen Ahmed",
  "Mirinka Kotze",
  "Muzaffer Rende",
  "Pascu Ioana-Georgia",
  " Rana Ashraf",
];

for (let i = 0; i <= feList.length; i++) {
  if (feList[i].includes(userName)) {
    console.log("Access Granted");
    break;
  } else {
    console.log("Access Declined");
    break;
  }
}



function animal(obj){
    obj = {name:"dog",legs:4,color:"white"}
    return "This " + obj.color + " " + obj.name  + " " + "has " + obj.legs + " legs."
  }
  
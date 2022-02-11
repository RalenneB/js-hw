//Array HW
/**
 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 

Display the entire list, so that the not yet purchased items go before the bought ones. 
Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
Purchasing a product. The function accepts the name of a product and marks it as bought.*/

const groceries = [
  { name: "banana", amount: 7, isBought: true },
  { name: "apple", amount: 10, isBought: false },
  { name: "sweetie", amount: 6, isBought: false },
  { name: "pineapple", amount: 4, isBought: true },
  { name: "strawberries", amount: 23, isBought: false },
];

function displayList(arr) {
  arr.sort((a, b) => {
    if (a.isBought == false && b.isBought == true) {
      return -1;
    }
    if (b.isBought == false && a.isBought == true) {
      return 1;
    }
    return 0;
  });

  for (groc of arr) {
    console.log(
      `You have in your list the following: ${groc.name}, amount ${groc.amount}, bought ${groc.isBought}`
    );
  }
}

function addToList(arr, newValues) {
  if (!(newValues instanceof Object)) {
    return "Error. This should be an object";
  }
  let isPresent = false;

  for (let i = 0; i < arr.length; i++) {
    // debugger
    if (newValues.name == arr[i].name) {
      arr[i].amount += 1;
      arr[i].isBought = true;
      isPresent = true;
      break;
    }
  }

  if (isPresent == false) {
    arr.push(newValues);
  }
  return arr;
}

/*
2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

Print the receipt out on the screen.
Counting the sum of the purchase.
Extracting the most expensive item on the receipt.
Counting an average item price on the receipt.

 */

const shopReceipt = [
  { name: "focus", amount: 2000, price: 999 },
  { name: "motivation", amount: 665, price: 777 },
  { name: "willToLive", amount: 2, price: 232 },
  { name: "generalFood", amount: 8, price: 13 },
];

function showReceipt(arr) {
  //does the first 2 steps
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i].amount * arr[i].price;
    sum = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(sum);
    console.log(`${arr[i].name}........${sum} (x${arr[i].amount} items)`);
  }
}

function getSum(arr) {
  let sum = arr[0].price * arr[0].amount;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i].price * arr[i].amount;
  }
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(sum);
}

function getExpensive(arr) {
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    maxArr.push(arr[i].price);
  }
  //   return Math.max.apply(Math, maxArr); --same thing but not that elegant
  return Math.max(...maxArr);
}

function getExpensive2(arr) {
  let maxNo = { price: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > maxNo.price) {
      maxNo = arr[i];
    }
  }
  return maxNo;
}

function getExpensive3(arr) {
  arr.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (b.price > a.price) {
      return 1;
    }
    return 0;
  });
  return arr[0];
}

function getAveragePrice(arr) {
  let price = arr[0].price;
  for (let i = 1; i < arr.length; i++) {
    price += arr[i].price;
  }
  return price / arr.length;
}

/*
3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object consisting of two properties: style name and style value, Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.
 */

const cssStyles = [
  { styleName: "color", styleValue: "red" },
  { styleName: "font-size", styleValue: 20 },
  { styleName: "text-align", styleValue: "center" },
  { styleName: "text-decoration", styleValue: "underline overline" },
  { styleName: "letter-spacing", styleValue: 2 },
  // {color: 'red', fontSize: 20, alignment: 'center', textDecoration: 'underline'},
  // {color: 'blue', fontSize: 16, alignment: 'left', textDecoration: 'none'},
  // {color: 'yellow', fontSize: 21, alignment: 'right', textDecoration: 'overline'},
  // {color: 'orange', fontSize: 11, alignment: 'center', textDecoration: 'line-through'},
  // {color: 'black', fontSize: 16, alignment: 'left', textDecoration: 'underline overline'},
];

function printCuteStuff(arr, text) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].styleName, arr[i].styleValue);
    str += `${arr[i].styleName}:${arr[i].styleValue};`;
  }
  return document.write(`<p style="${str}">${text}</p>`);
  //   document.write(`<p style="color:red;font-size:10">${text}<p>`);
}
// i have a strange error even if the functions are working properly.

function printCuteStuff2(arr, text) {
  let str = "";
  for (const elem of arr) {
    str += `${elem.styleName}:${elem.styleValue};`;
  }
  document.write(`<p style="${str}">${text}</p>`);
}

/*
4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.

Display all the classrooms.
Display all the classrooms for a given faculty.
Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
A function for sorting all the classrooms by number of seats.
A function for sorting all the classrooms by name in alphabetical order.
 */

const academyClass = [
  { name: "History", seats: 10, faculty: "University of Bucharest" },
  { name: "OS", seats: 20, faculty: "Politechnics" },
  { name: "Marketing", seats: 15, faculty: "ASE" },
  { name: "Political Sciences", seats: 20, faculty: "SNSPA" },
  { name: "Frontend Development", seats: 15, faculty: "Beetroot Academy" },
  { name: "Python", seats: 15, faculty: "Beetroot Academy" },
];

function displayClasses(arr) {
  for (const elem of arr) {
    console.log(elem.name);
  }
}
//this accespt 2 params, the second is string of which faculty you are searching for
function displayGivenClasses(arr, faculty) {
  let arrOfClassrooms = [];
  for (const elem of arr) {
    if (elem.faculty == faculty) {
      arrOfClassrooms.push(elem.name);
    }
  }
  return arrOfClassrooms;
}

function fitGroup(arr, obj) {
  if (!(obj instanceof Object)) {
    return "Error. This should be an object";
  }
  let fitClassrooms = [];
  for (let i = 0; i < arr.length; i++) {
    //   debugger
    if (obj.number <= arr[i].seats && arr[i].faculty == obj.faculty) {
      fitClassrooms.push(arr[i].name);
    }
  }
  return fitClassrooms;
}

// const obj = {name: 'Group1', number: 15, faculty: "Beetroot Academy"}

function sortBySeats(arr) {
  //descending order
  arr.sort((a, b) => {
    if (a.seats > b.seats) {
      return -1;
    }
    if (b.seats > a.seats) {
      return 1;
    }
    return 0;
  });
  return arr;
}

function sortAlphabetically(arr) {

  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  return arr;
}

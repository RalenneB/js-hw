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
3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object consisting of two properties: style name and style value, Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.

4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.

Display all the classrooms.
Display all the classrooms for a given faculty.
Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
A function for sorting all the classrooms by number of seats.
A function for sorting all the classrooms by name in alphabetical order.
 */

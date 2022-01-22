/*
1.Request a three-digit number from a user and check whether it has identical digits in it.
2.Request a five-unit number from a user and check whether it is a palindrome.
3.Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.)
 and gets the result. 
4. Request a length of a circumference and a perimeter of a square from a user. Define whether
 that circumference can fit in that square.
5. Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start 
of a new month, new year, and also leap years.
*/

//1.

// var threeDigitNo = prompt("Type in a three digit number.");

// if (threeDigitNo[0] === threeDigitNo[1] || threeDigitNo[1] === threeDigitNo[2] || threeDigitNo[0] === threeDigitNo[2]) {
//   console.log("Your no. has identical digits in it!");
// } else {
//   console.log("Nah, not identical digits!");
// }


//2.

// var fiveUnitNo = prompt("Type in a five-unit number.");

// if (fiveUnitNo[0] === fiveUnitNo[4] && fiveUnitNo[1] === fiveUnitNo[3]) {
//     console.log("Yaya, u got here a palindrome, yo!"); 
// }
// else {
//     console.log("Nah-nah, not a palindrome, bruh!");
// }

//3.
// var dollars = prompt("Type in the amount of USD you want to convert.");

// var choice = prompt("Type in the currency: EUR, SEK or AUD.");

// let euroExchangeRate = 0.8711;

// let sekExchangeRate = 9.02865;

// let audExchangeRate = 1.38590;

// if (choice === "EUR") {
//     console.log("The converted amount in EUR is: " + (euroExchangeRate * dollars));
// }
// else if (choice === "SEK") {
//     console.log("The converted amount in SEK is: " + (sekExchangeRate * dollars));
// }
// else if (choice === "AUD") {
//     console.log("The converted amount in AUD is: " + (audExchangeRate * dollars));
// }

// else {
//     console.log("Invalid, please type in one of the possible choices.");
// }

//4.
 
// let circum = prompt("Type in the length of a circumference.");
// let perim = prompt("Type in the perimeter of a square.");

// let side = perim / 4; 

// let diam = circum / Math.PI;

// if (side >= diam) {
//     console.log("Yay, the circle can fit into the square!");
// }
// else {
//     console.log("Nope, it doesn't fit :(...");
// }

//5.



let userDate = prompt("Type in a date (format yyyy-mm-dd).")

let convertedDate = new Date(userDate);

convertedDate.setDate(convertedDate.getDate() + 1); // in place function!

console.log("The next day after your chosen date is: " + convertedDate);


//       // 1. Request a user’s name and display the response “Hello, [name]”.
//       let userName = window.prompt("What is your name?");
//       document.write("Hello, " + userName + "! ");


// // 2. Request a user’s year of birth, count his age, and display the result. 
// //Store the current year as a constant. 
//       let userBirthYear = window.prompt("On what year you were born?");

//       let currentYear = new Date().getFullYear();

//       userAge = currentYear - userBirthYear;

//       document.write("Your are " + userAge + " years old.");

// // 3. Request a length of a side of a square from a user and display the perimeter of the square. 
//       let lenghtSideSquare = prompt("What is the lenght in cm of a side of a square?");
      
//       let perimeterSquare = lenghtSideSquare * 4;

//       document.write("The perimeter of the square is " + perimeterSquare + "cm!")

// // 4. Request a radius of a circle and display the area of such a circle. 
//     let radiusCircle = prompt("What is the radius in cm of a circle?");
      
//     let areaCircle = radiusCircle * radiusCircle * Math.PI ;

//     document.write("The area of the circle is " + areaCircle + "cm!")


// 5. Request a distance in km between the two cities from a user, and the time they want 
//to cover it within. Count the speed needed to be on time. 
//  let userDistance = prompt("What is the distance in km between 2 cities you want to cover?")
//  let userTime = prompt("In how much time (hours) do you want to cover this distance?")

//  let userSpeed =  userDistance/ userTime;

//  document.write("The speed you need to have is " + userSpeed + "km/h.")

// 6.Create a currency converter. A user types in USD and the program converts them to EUR.
// The exchange rate should be stored as a constant. ----something not right, add more decimals!

// let userDollars = prompt("Type in the amount of USD you want to convert in EUR")

// let exchangeRate = 0.8711;

// let userEuros = exchangeRate * userDollars;

// document.write("In EUR you would have " + userEuros )


// 7. A user states a flash drive memory in GB. The program has to count how many 820MB 
//files can be stored on this flash drive. 

// let sizeGigabytes = prompt("How many GB you need?");

// let convertedSizeMegabytes = sizeGigabytes * 1024;

// let counterStore = convertedSizeMegabytes / 820;

// document.write("You can store " + counterStore + " times the 820MB in the flash drive.")


// 8. A user types in an amount of money in a wallet and the price of one chocolate bar.
// The program counts how many chocolate bars the user can buy, and how much change will 
//he/she have left. 

// let money = prompt("How much money do you have?");
// let chocolateBar = prompt("What is the price of the chocolate bar?");

// let chocolateToBuy = Math.floor(money/chocolateBar);
// let change = money - (chocolateToBuy*chocolateBar);

// document.write("You can buy " + chocolateToBuy + " chocolate bars " + "and you have left " + change + " EUR.")



// 9. The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%.
// The program counts the sum of interest.

let sumDeposit = prompt("Type in the sum of bank deposit in EUR")

let yearlyInterest = sumDeposit * 0.05;

let monthlyInterest = yearlyInterest/12;

document.write("The sum of interest in one year is: " + yearlyInterest + " EUR, and the monthly interest is " + monthlyInterest + " EUR.")

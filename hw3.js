userInput = prompt(
  "Choose the number that is corresponding to the code you want to run:"
);

/* \n \n \
 1. Write a program that requests a number from a user and finds the summation \
 of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10. \n \n\
 2. Request two numbers and find only their largest common divisor.\n \n\
 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2,\
 4, and 8.\n \n \
4. Define the number of digits in a requested number. For example, there are 4 digits in the \
number 6834.\n \n\
5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also,\
 count odd and even. Display the statistics. There’s only one variable (not 10) needed for \
 input by a user. \n \n\
6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and \
ask if the user wants one more. The loop continues until the user refuses. \
7. Request a number from a user and ask by how many digits to move it. Move the digits and\
 display the result (if the number 123456 needs to be moved by 2 digits, the result will be\
     345612). \n \n\
8. Loop day input like this: «Day of the week. Would you like to see the next one?» which\
 continues as long as the user clicks OK.\
9. Display the multiplication table of all numbers from 2 to 9. Every number has to be \
multiplied by 1 to 10. \n \n \
10. “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it\
 in the following way: every loop iteration needs to divide the range of numbers in half, \
 you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on\
  what the user said, narrow down the range. So the starting range is 0 to 100, divided in\
   half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on,\
    until the user chooses == N. ' */

function wrapper(userInput) {
  if (parseInt(userInput) == 1) {
    //gauss formula
    noInput = prompt("Enter a number.");
    return summationofNos(parseInt(noInput));
  } else if (parseInt(userInput) == 2) {
    noInput2 = prompt("Enter the first number.");
    noInput3 = prompt("Enter the second number.");
    return greatestDivisor(parseInt(noInput2), parseInt(noInput3));
  } else if (parseInt(userInput) == 3) {
    noInput = prompt("Enter a number.");
    return getDivisors2(parseInt(noInput));
  } else if (parseInt(userInput) == 4) {
    noInput = prompt("Enter a number with multiple digits.");
    return numberOfDigits(noInput);
  } else if (parseInt(userInput) == 5) {
    noInput = prompt("Enter ten numbers separated by comma.");
    return lotsOfNo(noInput);
  } else if (parseInt(userInput) == 6) {
    let result = true;
    while (result) {
      noInput = prompt(
        "Enter 2 numbers and an operation symbol, separated by comma."
      );
      result = loopCalc(noInput);
    }

    return;
  } else if (parseInt(userInput) == 7) {
    noInput = prompt("Enter a number with multiple digits.");
    noInput2 = prompt("By how many digits to move it? (ex, 1,2,3 etc)");
    return digitMover(noInput, noInput2);
  } else if (parseInt(userInput) == 8) {
    return dayWeek();
  } else if (parseInt(userInput) == 9) {
    return multipTable();
  } else {
    return "Sorry, your number is not in 1 to 10 range, try again";
  }
}

console.log(wrapper(userInput));

// each function from the exercise

function summationofNos(no) {
  return (no * (no + 1)) / 2;
}

function greatestDivisor(a, b) {
  // euclidean algorithm + recursive function usage
  if (!b) {
    return a;
  }
  return greatestDivisor(b, a % b);
}

function getDivisors(n) {
  let divisors = [...Array(n + 1).keys()].filter((div) => {
    return div !== 0 && div !== 1 && n % div === 0;
  });
  // console.log(divisors);
  //   divisors.push(n); // i think it's in place, no need for a second var
  // console.log (divisorsComplete);
  // console.log(typeof(divisors));

  return divisors.length > 1 ? divisors : `${n} is a prime number`;
  // console.log(getDivisors(8));
}
// simpler, compatible the logic with low level languages too;
function getDivisors2(n) {
  let divisors = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors.length > 1 ? divisors : `${n} is a prime number`;
}

function numberOfDigits(n) {
  return n.length;
}
function lotsOfNo(stringOfNumbers) {
  /* 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also,\
   count odd and even. Display the statistics. There’s only one variable (not 10) needed for \
   input by a user. \n \n\
    */
  const arrayOfNumbers = stringOfNumbers
    .split(",")
    .map((stringOfNumber) => parseInt(stringOfNumber));
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let evenNo = 0;
  let oddNo = 0;
  for (const currNumber of arrayOfNumbers) {
    if (currNumber > 0) {
      positiveCount++;
      console.log(positiveCount);
    } else if (currNumber == 0) {
      zeroCount++;
      console.log(zeroCount);
    } else {
      negativeCount++;
      console.log(negativeCount);
    }

    if (currNumber % 2 == 0) {
      evenNo++;
      console.log(evenNo);
    } else {
      oddNo++;
      console.log(oddNo);
    }
  }

  return (
    "There are: " +
    positiveCount +
    " positive numbers, " +
    zeroCount +
    " zero numbers " +
    negativeCount +
    " negative numbers, " +
    oddNo +
    " odd numbers " +
    evenNo +
    " even numbers."
  );
}

/*6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and \
ask if the user wants one more. The loop continues until the user refuses. \ */

function loopCalc(stringOfNumbersAndSymbol) {
  let arrayInput = stringOfNumbersAndSymbol.split(",");
  console.log(arrayInput);
  let symbolOp = arrayInput.pop();
  console.log(symbolOp);

  //remove last symbol from a string

  const arrayNo = arrayInput.map((arrayInput) => parseInt(arrayInput));

  console.log(arrayNo);

  a = arrayNo[0];
  console.log(a);

  b = arrayNo[1];
  console.log(b);

  if (symbolOp == "+") {
    return confirm("Your result is: " + (a + b) + " Wanna try again?");
  } else if (symbolOp == "-") {
    return confirm("Your result is: " + (a - b) + " Wanna try again?");
  } else if (symbolOp == "*") {
    return confirm("Your result is: " + a * b + " Wanna try again?");
  } else if (symbolOp == "**") {
    return confirm("Your result is: " + a ** b + " Wanna try again?");
  } else if (symbolOp == "/") {
    return confirm("Your result is: " + a / b + " Wanna try again?");
  } else if (symbolOp == "%") {
    return confirm("Your result is: " + (a % b) + " Wanna try again?");
  } else {
    return "Not an option!";
  }

  // console.log(stringOfNumbers);
  // const arrayOfNumbers = stringOfNumbers.split(',')
  //     .map((stringOfNumber) => {
  //         return parseInt(stringOfNumber);
  //     });
  // console.log(arrayOfNumbers);
}

/* 7. Request a number from a user and ask by how many digits to move it. Move the digits and\
 display the result (if the number 123456 needs to be moved by 2 digits, the result will be\
     345612).*/
function digitMover(string1, string2) {
  noOfDigits = parseInt(string2);
  let newStr1 = "";
  let newStr2 = "";

  for (i = 0; i < string1.length; i++) {
    if (i < noOfDigits) {
      newStr1 += string1[i];
    } else {
      newStr2 += string1[i];
    }
  }

  return newStr2 + newStr1;
}

/* 8. Loop day input like this: «Day of the week. Would you like to see the next one?» which\
 continues as long as the user clicks OK.\ */
function dayWeek() {
  let ourDate = new Date();

  let currDate = ourDate.toLocaleString("en-us", { weekday: "long" });
  let nextDay = confirm('Current day is: ' + currDate + ". Would you like to see the next one?");

  while (nextDay) {
    const currTimeMil = ourDate.getTime();
    const nextDayMil = currTimeMil + 8.64e7;
    ourDate = new Date(nextDayMil);
    const nextDayName = ourDate.toLocaleString("en-us", { weekday: "long" });

    nextDay = confirm(
      'Next day is: ' + nextDayName + '. Would you like to see the next one?'
    );
  }
}

/* 9. Display the multiplication table of all numbers from 2 to 9. Every number has to be \
multiplied by 1 to 10. \n \n \*/
function multipTable() {

    let with2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 2 });
    let with3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 3 });
    let with4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 4 });
    let with5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 5 });
    let with6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 6 });
    let with7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 7 });
    let with8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 8 });
    let with9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return i * 9 });


    console.log(`Multiplication with 2: ${with2}  
    Multiplication with 3: ${with3}    
    Multiplication with 4: ${with4}  
    Multiplication with 5: ${with5}  
    Multiplication with 6: ${with6}  
    Multiplication with 7: ${with7}  
    Multiplication with 8: ${with8}  
    Multiplication with 9: ${with9} `)
}

function multipTable2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 2; i <= 9; i++) {
        const result = numbers.map((x) => x * i);
        console.log(`Multiplication with ${i}: ${result}`);
    }
}

function multipTable3() {
    for (let i = 2; i <= 9; i++) {
        const result = [];
        for (let j = 1; j <= 10; j++) {
            result.push(j * i);
        }
        console.log(`Multiplication with ${i}: ${result}`);
    }
}

// function multiplyNumbersByFactor(numbers, factor) {
//     return numbers.map(function (i) { return i * factor });
// }

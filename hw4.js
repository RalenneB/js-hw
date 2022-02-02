//Function HW

/* 1.Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
2 Write a function that counts the factorial of a given number. 
3 Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
4 Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
// 5 Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
6 Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
7 Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
8 Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
9 Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
10 Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
*/

userInput = prompt(
  "Choose the number that is corresponding to the code you want to run:"
);

function wrapper(userInput) {
  if (parseInt(userInput) == 1) {
    noInput = prompt("Enter a number.");
    noInput2 = prompt("Enter the second number.");
    return bigOrSmaller(parseInt(noInput), parseInt(noInput2));
  } else if (parseInt(userInput) == 2) {
    noInput = prompt("Enter a number.");
    return factorial(parseInt(noInput));
  } else if (parseInt(userInput) == 3) {
    noInput = prompt("Enter three digits separated by comma ','.");
    return digitCombiner(noInput);
  } else if (parseInt(userInput) == 4) {
    noInput = prompt(
      "Enter the width and the length of a rectangle  separated by comma. If you provide only one param, we assume it's a square."
    );
    return getArea(noInput);
  } else if (parseInt(userInput) == 5) {
    noInput = prompt(
      "Enter the supposed perfect number and see how it really is."
    );
    return amIPerfect(parseInt(noInput));
  } else if (parseInt(userInput) == 6) {
    noInput = prompt("Enter a min and max of a range, separated by comma.");
    return checkPerfect(noInput);
  } else if (parseInt(userInput) == 7) {
    noInput = prompt("Enter a time separated by a space like this HH MM SS.");
    return timeRetriever(noInput);
  } else if (parseInt(userInput) == 8) {
    noInput = prompt("Enter a time separated by a space like this HH MM SS.");
    return secondsGetter(noInput);
  } else if (parseInt(userInput) == 9) {
    noInput = prompt("Enter the number of seconds you want to convert.");
    return timeGetter(noInput);
  } else if (parseInt(userInput) == 10) {
    userInput = prompt("Firstly enter a time separated by a space like this HH MM SS.");
    userInput2 = prompt("Secondly enter a time separated by a space like this HH MM SS.");
    return dateDiff(userInput, userInput2);
  } else {
    return "Sorry, your number is not in 1 to 10 range, try again";
  }
}

console.log(wrapper(userInput));

function bigOrSmaller(first, second) {
  if (first < second) {
    console.log(-1);
  } else if (second < first) {
    console.log(1);
  } else if (second == first) {
    console.log(0);
  }
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function digitCombiner(stringInput) {
  let arr = stringInput.split(",");
  let newStr = arr.join("");
  return parseInt(newStr);
}

function getArea(userInput) {
  let arr = userInput.split(",");
  console.log(arr);

  if (arr[1]) {
    area = parseInt(arr[0]) * parseInt(arr[1]);
    return area;
  } else {
    area = parseInt(arr[0]) * parseInt(arr[0]);
    return area;
  }
}

function amIPerfect(n) {
  //   first we get the get divisors

  let divisors = [];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }

  //iterate to get the sum of array elems
  let sum = 0;
  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }

  if (sum == n) {
    console.log("Mmmm, perfection!");
    return true;
  } else {
    console.log(
      "Ugh. Not satisfied with this, not perfect, sorry not sorry. -_-"
    );
    return false;
  }
}

/*6 Write a function that accepts the min and max values of a range,
 and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect.  */

function checkPerfect(userInput) {
  //preparing the dark context, muhahaha
  let min;
  let max;
  let arrOfPerf = [];
  let arr = userInput.split(",");
  min = parseInt(arr[0]);
  max = parseInt(arr[1]);
  //   const bigArr = [];
  //   const res = [];

  // console.log(min, max, arr);

  for (let i = min; i <= max; i++) {
    // bigArr.push(i);
    if (amIPerfect(i)) {
      arrOfPerf.push(i);
    }
    //got the list of all numbers between min and max, yay
  }
  //need to iterate through the list with the above function
  //   for (let elem of bigArr) {
  //     if (amIPerfect(elem)) {
  //       arrOfPerf.push(elem);
  //     }
  //     // need to see the numbers

  //   }
  console.log(`Your perfect number(s) is/are: ${arrOfPerf}`);
}

/*7 Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00. */
function timeRetriever(userInput) {
  let transf = userInput.split(" ");
  console.log(transf);
  let result;
  if (transf[2]) {
    result = `${transf[0]}:${transf[1]}:${transf[2]}`;
    return result;
  } else {
    result = `${transf[0]}:${transf[1]}:00`;
    return result;
  }
}

/* 8 Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds. */

function secondsGetter(userInput) {
  let transf = userInput.split(" ");
  let hours = parseInt(transf[0]) * 3600;
  let minutes = parseInt(transf[1]) * 60;
  let seconds = new Number;
  if (parseInt(transf[2])) {
    seconds = parseInt(transf[2]);
  }
  else {
      seconds = 0;
  }
  let result = hours + minutes + seconds;
  return result;
}

/*9 Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string. */
function timeGetter(userInput) {
  let seconds = parseInt(userInput);
  const result = new Date(seconds * 1000).toISOString().substring(11, 19);
  console.log(result);
}

/*10 Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss. */
function dateDiff (userInput, userInput2) {
    let first = secondsGetter(userInput);
    let second = secondsGetter(userInput2);
    let diff = first - second;
    let result = timeGetter(diff);
    // console.log(first, second);
    return(result);
}
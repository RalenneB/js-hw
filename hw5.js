//Objects HW

/*Home assignment:

1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

A method that displays the car info 
A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object. 
3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

A method for displaying the time. 
A method for changing the time by a given amount of seconds. 
A method for changing the time by a given amount of minutes.  
A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75». */

// first exercice
const car = {
  manufacturer: "Mazda",
  model: 3,
  yearOfRelease: 2011,
  averageSpeed: 100, //per hour; actually is up to the driver but lmao
  displayCarInfo: function () {
    return `The manufacturer is: ${this.manufacturer}, 
      model: ${this.model}
      year of Release: ${this.yearOfRelease} and
      average speed is: ${this.averageSpeed}`;
  },
  countTimeFrame: function (distance) {
    let driveTime = distance / this.averageSpeed;
    let sleepTime = 0;
    for (let i = 5; i <= Math.ceil(driveTime); i += 4) {
      sleepTime++;
    }
    return driveTime + sleepTime;
  },
};

function displayCarInfo2(car) {
  return `The manufacturer is: ${car.manufacturer}, 
    model: ${car.model}
    year of Release: ${car.yearOfRelease} and
    average speed is: ${car.averageSpeed}`;
}

let distance = 500; //km, not miles, i am european

function countTimeFrame(averageSpeed, distance) {
  let driveTime = distance / averageSpeed;
  let sleepTime = 0;
  for (let i = 5; i <= Math.ceil(driveTime); i += 4) {
    sleepTime++;
  }
  return driveTime + sleepTime;
}

// Test cases
console.log(countTimeFrame(100, 100), 1);

console.log(countTimeFrame(100, 200), 2);

console.log(countTimeFrame(100, 399), 3.99);

console.log(countTimeFrame(100, 400), 4);

console.log(countTimeFrame(100, 401), 5.01);

console.log(countTimeFrame(100, 450), 5.5);

console.log(countTimeFrame(100, 799), 8.99);

console.log(countTimeFrame(100, 800), 9);

console.log(countTimeFrame(100, 801), 10.01);

// countTimeFrame(car.averageSpeed, distance);
function countTimeFrame2(averageSpeed, distance) {
  let driveTime = distance / averageSpeed;
  let sleepTime = 0;
  if (Math.ceil(driveTime) % 4 == 0 && driveTime >= 4) {
    sleepTime = Math.ceil(driveTime) / 4 - 1;
  } else {
    sleepTime = Math.floor(driveTime / 4);
  }
  return driveTime + sleepTime;
}

countTimeFrame3 = (averageSpeed, distance) =>
  distance / averageSpeed +
  (Math.ceil(distance / averageSpeed) % 4 == 0
    ? distance / averageSpeed >= 4
      ? Math.ceil(distance / averageSpeed) / 4 - 1
      : 0
    : Math.floor(distance / averageSpeed / 4));

/*2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.  
 */

//create common context in global scope

//greatest common divisor
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

//lowest/simplest fraction form
function lowest(den3, num3) {
  let common_factor = gcd(num3, den3);
  // Converting both terms
  // into simpler terms by
  // dividing them by common factor
  den3 = parseInt(den3 / common_factor);
  num3 = parseInt(num3 / common_factor);
  return { num3, den3 };
}

const funcObj = {
  num1: 5,
  den1: 10,
  add: function (num2, den2) {
    let den3 = gcd(this.den1, den2);
    den3 = (this.den1 * den2) / den3;
    let num3 = this.num1 * (den3 / this.den1) + num2 * (den3 / den2);
    return this.simplif(den3, num3);
  },

  substract: function (num2, den2) {
    let den3 = gcd(this.den1, den2);
    den3 = (this.den1 * den2) / den3;
    let num3 = this.num1 * (den3 / this.den1) - num2 * (den3 / den2);
    return this.simplif(den3, num3);
  },

  multip: function (num2, den2) {
    let den3 = this.den1 * den2;
    let num3 = this.num1 * num2;
    return this.simplif(den3, num3);
  },

  divide: function (num2, den2) {
    //flip the numbers for the second fraction;

    let den3 = this.den1 * num2;
    let num3 = this.num1 * den2;
    return this.simplif(den3, num3);
  },

  simplif: function (num3, den3) {
    let common_factor = gcd(num3, den3);
    // Converting both terms
    // into simpler terms by
    // dividing them by common factor
    den3 = parseInt(den3 / common_factor);
    num3 = parseInt(num3 / common_factor);
    return { num3, den3 };
  },
};

funcObj.add();


/*3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

A method for displaying the time. 
A method for changing the time by a given amount of seconds. 
A method for changing the time by a given amount of minutes.  
A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75». */

const timeDescriptor = {
    hours: 00,
    minutes: 00,
    seconds: 00,

    displayTime: function () {
        date = new Date();
        return date;
    },

    changeTimeSeconds: function(secondsGiven) {
        date = new Date();
        secondRes = date.setSeconds(date.getSeconds() + secondsGiven);
        result = new Date(secondRes);
        return result;
    },

    changeTimeMinutes: function(minutesGiven) {
        date = new Date();
        minutesRes = date.setMinutes(date.getMinutes() + minutesGiven);
        result = new Date(minutesRes);
        return result.toLocaleTimeString(); 
        //if we want a truncated result, not the whole date
    },

    changeTimeHours: function(hoursGiven) {
        date = new Date();
        hoursRes = date.setHours(date.getHours() + hoursGiven);
        result = new Date(hoursRes);
        return result;
    },

}
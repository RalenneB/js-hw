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
  countTimeFrame: function(distance) {
    let driveTime = distance / this.averageSpeed;
    let sleepTime = 0;
    for (let i = 5; i <= Math.ceil(driveTime); i += 4) {
      sleepTime++;
    }
    return driveTime + sleepTime;
  }
};

function displayCarInfo(car) {
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
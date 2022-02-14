//counter but with no closures
// Create a counter interface
// const myCounter1 = createCounter();
// myCounter1.clear()
// myCounter1.increase()
// myCounter1.decrease()
// myCounter1.show()

//upper functions
// function clear(paramCounter) {
//   paramCounter = 0;
//   return paramCounter;
// }

// function increase(paramCounter) {
//   paramCounter++;
//   return paramCounter;
// }

// function decrease(paramCounter) {
//   paramCounter--;
//   return paramCounter;
// }

// function decrease(paramCounter) {
//   return paramCounter;
// }

function createCounter() {
  let counter = 0;
  //   return increase(counter);
  return {
    increase: function () {
      counter++;
      return counter;
    },

    decrease: function () {
      counter--;
      return counter;
    },
    clear: function () {
        counter = 0;
        return counter;
      },
    show: function () {
    counter;
    return counter;
    },
  };
}

const myCounter1 = createCounter();
//to call them myCounter1.clear() etc
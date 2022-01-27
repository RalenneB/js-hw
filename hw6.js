/* Create a map like function named myMap(someArray, someFunction)
The myMap() method creates a new array
 populated with the results
  of calling a provided function 
  on every element in the provided array.
 */

let arr = [1, 2, 4, 6, 8, 10];

function increment(elem) {
  return elem * 2;
}

function myMap(someArr, someFunc) {
  resultsArr = [];
  for (elem of someArr) {
    result = someFunc(elem);
    resultsArr.push(result);
  }
  return resultsArr;
}

console.log(myMap(arr, increment));


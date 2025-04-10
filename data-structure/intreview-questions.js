// 1.The Function.prototype.call() method calls the function with a given this value and arguments provided individually.
// Function.prototype.myCall = function (thisArg, ...arg) {
//   thisArg = thisArg || globalThis;
//   //   A unique key to avoid conflicts
//   const fnSymbol = Symbol();
//   thisArg[fnSymbol] = this;
//   const result = thisArg[fnSymbol](...arg);

//   delete thisArg[fnSymbol];

//   console.log(result);
//   return result;
// };

// function multiplyAge(multiplier = 1) {
//   return this.age * multiplier;
// }

// const mary = {
//   age: 21,
// };

// const john = {
//   age: 42,
// };

// multiplyAge.myCall(mary); // 21
// multiplyAge.myCall(john, 2); // 84

/* 2.Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.*/

// function minBy(array, iteratee) {
//   if (!Array.isArray(array) && array.length === 0) {
//     return undefined;
//   }
//   let minEl = array[0];
//   let minValue = iteratee(minEl);
//   for (let i = 0; i < array.length; i++) {
//     const currentValue = iteratee(array[i]);
//     if (currentValue < minValue) {
//       minValue = currentValue;
//       minEl = array[i];
//     }
//   }
//   return minEl;
// }

// const people = [
//   { name: "Alice", age: 32 },
//   { name: "Bob", age: 24 },
//   { name: "Charlie", age: 29 },
// ];

// const youngest = minBy(people, (person) => person.age);
// console.log(youngest);

// 3.selection sort
/*
selection sort is an algorithm used for sorting an array
*/
function selectionSort(arr) {
  if (!Array.isArray && arr.length === 0) return undefined;
  const arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]

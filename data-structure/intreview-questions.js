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
it first take the first element as initial value and then check whether it it the latest value or not if it is not the min value then swap and continue the process
// */
// function selectionSort(arr) {
//   if (!Array.isArray && arr.length === 0) return undefined;
//   const arrayLength = arr.length;
//   for (let i = 0; i < arrayLength; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arrayLength; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
// console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]

// // 4. debounce function
// function debounce(fun, wait) {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fun.apply(this, args);
//     }, wait);
//   };
// }

// function handleResize() {
//   console.log("Resized!");
// }

// window.addEventListener("resize", debounce(handleResize, 300));

// 5.array .reduce

Array.prototype.myReduce = function (callback, initialValue) {
  if (!Array.isArray(this) && this.length === 0)
    throw new TypeError("Not an array");
  if (typeof callback !== "function")
    throw new TypeError("Callback must br function");

  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
};

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6

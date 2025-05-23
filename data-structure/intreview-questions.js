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

// Array.prototype.myReduce = function (callback, initialValue) {
//   if (!Array.isArray(this) && this.length === 0)
//     throw new TypeError("Not an array");
//   if (typeof callback !== "function")
//     throw new TypeError("Callback must br function");

//   const array = this;
//   let accumulator = initialValue;
//   let startIndex = 0;
//   if (accumulator === undefined) {
//     if (array.length === 0) {
//       throw new TypeError("Reduce of empty array with no initial value");
//     }
//     accumulator = array[0];
//     startIndex = 1;
//   }
//   for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//   }
//   return accumulator;
// };

// console.log([10,5,9].myReduce((prev, curr) => prev + curr, 0)); // 6

// function flatten(arr) {
//   const result = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(flatten([1, 30, [39, 90, 30],[[10, 39, 40], [12, 39]]]));

/* question : what is the output of this*/ console.log(0.1 + 0.2 == 0.3);
/*answer: false because the floating point is 0.1 means 0.10000000 also the 0.2 deffres in the floating */

// function add(a, b) {
//   // handling case with parameters only
//   if (b !== undefined) {
//     return a + b;
//   }
//   return function (c) {
//     return a + c;
//   };
// }
// add(2, 5); // 7
// add(2)(5); // 7

// console.log("i'm a lasagna hog".split("").reverse().join(""));;
// const value = 'goh angasal a im'

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};

//  What does the following code print?
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
Promise.resolve().then(function () {
  console.log("three");
});
console.log("four");

/*
one 
four
three
two
*/

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}
//when the first function called it wil return {bar:"hello"} for second it will return undefined beause the bracket opened in the next lin so js automatically add semicolon in the return statement

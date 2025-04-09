Function.prototype.myCall = function (thisArg, ...arg) {
  thisArg = thisArg || globalThis;
  //   A unique key to avoid conflicts
  const fnSymbol = Symbol();
  thisArg[fnSymbol] = this;
  const result = thisArg[fnSymbol](...arg);

  // Clean up: remove the temporary property
  delete thisArg[fnSymbol];

  // Return the result of the function call
  console.log(result);
  return result;
};

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myCall(mary); // 21
  multiplyAge.myCall(john, 2); // 84

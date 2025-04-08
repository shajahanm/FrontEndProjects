function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi my name is ${this.name} and I am ${this.age} old`);
};

const john = new Person("John", 25);
john.greet();

Array.prototype.addNumbers = function () {
  let value = 0;
  const allNumbers = this.every((item) => typeof item === "number");
  if (!allNumbers) {
    throw new Error("Array contains non-number elements");
  }
  for (let i = 0; i < this.length; i++) {
    value = value + this[i];
  }
  return value
};

console.log([1, 4, 30, 20, 5].addNumbers());

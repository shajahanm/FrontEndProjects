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
  return value;
};
class Car {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }
  getCarDetails() {
    return console.log(`Car model is ${this.model} and brand is ${this.brand}`);
  }
}

console.log([1, 4, 30, 20, 5].addNumbers());
const myCar = new Car('Swift 2019 zxi','Maruti suzuki');
myCar.getCarDetails()

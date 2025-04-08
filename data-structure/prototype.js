function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi my name is ${this.name} and I am ${this.age} old`);
};

const john = new Person("John", 25);
john.greet();

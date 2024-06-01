/* eslint-disable class-methods-use-this */
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ', this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ', this.name);
    }, 100);
  }
}

const person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();

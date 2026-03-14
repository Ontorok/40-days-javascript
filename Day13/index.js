const person = {
  name: "Nasir",
  relatives: {
    relation: "Uncle",
    name: "Bahrul Alam",
    getName: function () {
      console.log(`Hello ${this.name}`);
    },
  },
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
person.greet(); // person object
person.relatives.getName(); // relatives object

function standAloneWithStrict() {
  "use strict";
  console.log(this); // undefined
}
standAloneWithStrict();

function standAloneWithOutStrict() {
  console.log(this); // window
}
standAloneWithOutStrict();

const myArrow = () => {
  console.log(this);
};
myArrow();

const employee = {
  id: 123,
  name: "Nasir Ahmed",
  greet: function () {
    return () => {
      console.log(`Hello ${this.name}`);
    };
  },
};

employee.greet()();

function Car(name, model) {
  this.name = name;
  this.model = model;

  this.getDetails = function () {
    console.log(`${this.name} - ${this.model}`);
  };
}

const toyota = new Car("Toyota", "G-Corolla");
toyota.getDetails();

const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();

const obj = {
  name: "Tom",
  greet: function () {
    console.log(this);
    console.log(`Hello, ${this.name}!`);
  },
};
const greetFn = obj.greet;
greetFn.call(obj);

const user2 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user2.greet();

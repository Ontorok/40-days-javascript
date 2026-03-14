// const person = {
//   name: "Nasir",
//   relatives: {
//     relation: "Uncle",
//     name: "Bahrul Alam",
//     getName: function () {
//       console.log(`Hello ${this.name}`);
//     },
//   },
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };
// person.greet(); // person object
// person.relatives.getName(); // relatives object

// function standAloneWithStrict() {
//   "use strict";
//   console.log(this); // undefined
// }
// standAloneWithStrict();

// function standAloneWithOutStrict() {
//   console.log(this); // window
// }
// standAloneWithOutStrict();

// const myArrow = () => {
//   console.log(this);
// };
// myArrow();

// const employee = {
//   id: 123,
//   name: "Nasir Ahmed",
//   greet: function () {
//     return () => {
//       console.log(`Hello ${this.name}`);
//     };
//   },
// };

// employee.greet()();

// function Car(name, model) {
//   this.name = name;
//   this.model = model;

//   this.getDetails = function () {
//     console.log(`${this.name} - ${this.model}`);
//   };
// }

// const toyota = new Car("Toyota", "G-Corolla");
// toyota.getDetails();

// const user = {
//   name: "tapaScript",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// user.greet();

// const obj = {
//   name: "Tom",
//   greet: function () {
//     console.log(this);
//     console.log(`Hello, ${this.name}!`);
//   },
// };
// const greetFn = obj.greet;
// greetFn.call(obj);

// const user2 = {
//   name: "Alex",
//   greet: function () {
//     const inner = () => {
//       console.log(`Hello, ${this.name}!`);
//     };
//     inner();
//   },
// };

// user2.greet();

// function Sports(name, NoOfPlayers) {
//   this.name = name;
//   this.NoOfPlayers = NoOfPlayers;
// }

// const footBall = new Sports("Foot Ball", 22);

// const cricket = new Sports("Cricket", 22);

// console.log(footBall, cricket);

// const car1 = {
//   brand: "Audi",
//   model: "A8",
//   describe: function () {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "X1",
// };

// car1.describe.call(car2);

// const car2Description = car1.describe.bind(car2);
// car2Description();

// const person3 = {
//   name: "Charlie",
//   sayHello: function () {
//     console.log(this.name);
//   },
//   sayHelloArrow: () => {
//     console.log(window);
//     console.log(this.name);
//   },
// };

// person3.sayHello();
// person3.sayHelloArrow();

console.log(this);

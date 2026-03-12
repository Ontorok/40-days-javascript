const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;
console.log(name, companyName, city);

function Student(name, age, grades) {
  this.name = name;
  this.age = age;
  this.grades = grades;

  this.averageGrade = function () {
    const totalGrade = this.grades.reduce((prev, curr) => prev + curr, 0);
    return Math.round((totalGrade / this.grades.length) * 100) / 100;
  };
}

const nasir = new Student("Nasir", 32, [5, 5, 4]);
console.log(nasir.name, nasir.age, nasir.averageGrade());

function bookStore() {
  let store = [];

  return {
    addBook(name, quantity = 1) {
      const newBook = { name, quantity };
      store = [...store, newBook];
      return store;
    },
    reStock(bookName, quantity = 1) {
      store = store.map((book) => (book.name === bookName ? { ...book, quantity: book.quantity + quantity } : book));
      return store;
    },
    checkStock() {
      return [...store];
    },
  };
}

const centralBookHouse = bookStore();
console.log(centralBookHouse.addBook("JS Guide", 10)); // [{name: 'JS Guide', quantity: 10}]
console.log(centralBookHouse.reStock("JS Guide", 12)); // [{name: 'JS Guide', quantity: 22}]
console.log(centralBookHouse.addBook("React Hook", 50)); // [{name: 'JS Guide', quantity: 22},{name: 'React Hook', quantity: 50}]

const employee = {
  name: "Nasir",
  age: 34,
};

console.log(Object.keys(employee));
for (let key in employee) {
  console.log({ key, value: employee[key] });
}

console.log(Object.entries(employee));
for (let [key, value] of Object.entries(employee)) {
  console.log({ key, value });
}

const country = {
  name: "Bangladesh",
  details: {
    population: "20 core",
    area: "147570 km^2",
  },
};

const country2 = structuredClone(country);
country2.details.area = 456;

console.log(country);
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, age, address } of users) {
  console.log(name, age, address);
}

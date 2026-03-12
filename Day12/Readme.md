### 1. What will be the output and why??

```
  const user = { name: "Alex", age: undefined };
  console.log(user.age ?? "Not provided"); // Not Provided
```

#### Ans: "Not Provided". Because `null coalescing` operator check if first operand is only `undefined` or `null`. If so, it will return the second operand. Otherwise the first operand will return. In this case `user.age` is `undefined`. So it will return "Not Provided".

### 2. What will happen if we try to modify a frozen object??

```
  const obj = Object.freeze({ a: 1 });
  obj.a = 2;
  console.log(obj.a); // 1
```

#### Ans: 100. Since the object `obj` has been frozen, object manipulation will not happen in this case.

### 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring.

```
  const person = {
    name: "Tapas",
    company: {
      name: "tapaScript",
      location: {
        city: "Bangalore",
        zip: "94107"
      }
    }
  };
```

#### Ans:

```
  const {
    name,
    company: {
      name: companyName,
      location: { city }
    }
  } = person;
  console.log(name, companyName, city);
```

### 4. Build a Student Management System.

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

#### Ans:

```
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
```

### 5. Book Store Inventory System.

- Store books in an object.
- Add functionality to check availability and restock books.

#### Ans:

```
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
```

### 6. What is the difference between Object.keys() and Object.entries()? Explain with examples.

#### Ans:

- `Object.keys()` returns an array of string properties of an object.

  ```
    console.log(Object.keys(employee)); //  ['name', 'age']
    for (let key in employee) {
      console.log({ key, value: employee[key] });
      // {key: 'name', value: 'Nasir'}
      // {key: 'age', value: 34}
    }
  ```

- `Object.entries(obj)` converts an object into an array of `[key,value]` pairs.

### 7. How do you check if an object has a certain property?

#### Ans:

- `property in object` => console.log('name' in employee)
- `Object.hasOwn` => console.log(Object.hasOwn(employee,'name'))

### 8. What will be the output and why?

```
  const person = { name: "John" };
  const newPerson = person;
  newPerson.name = "Doe";
  console.log(person.name);
```

#### Ans: `person.name = 'Doe'`. Because pass by reference did happen in this case. So `newPerson` and `person` pointing to the same object reference.

### 8. What’s the best way to deeply copy a nested object? Explain with examples

#### Ans: `structuredClone()` method is best way to deeply copy a nested object.

### 10. Loop and print values using Object destructuring.

```
  const users = [
    {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    {
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    {
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
  ];
```

#### Ans:

```
  for (let { name, age, address } of users) {
    console.log(name, age, address);
    // Alex 43 15th Park Avenue
    // Bob 53 Canada
    // Carl 26 Bangalore
  }
```

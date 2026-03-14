### 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations

| Situation                                            | Value                                                                                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| At the Global                                        | At the global object, `this` always refers to the `window` object whether it is in strict mode or not.                          |
| Inside an Object Method                              | If the method is a standard JavaScript function (not an arrow function), `this` refers to **whoever called it at that moment**. |
|                                                      | ![alt text](./assets/image.png)                                                                                                 |
| Inside the Standalone non-Arrow Function             | In strict mode, `this` is `undefined`; otherwise it refers to the `window` object.                                              |
|                                                      | ![alt text](./assets/image-4.png)                                                                                               |
| Inside an Arrow Function (standalone)                | Parent (lexical) scope.                                                                                                         |
|                                                      | ![alt text](./assets/image-1.png)                                                                                               |
| Inside an Arrow Function (as object method)          | Parent (lexical) scope — **not the object itself**.                                                                             |
|                                                      | ![alt text](./assets/image-2.png)                                                                                               |
| Inside an Object Created with a Constructor Function | `this` refers to the **newly created object instance**.                                                                         |
|                                                      | ![alt text](./assets/image-3.png)                                                                                               |

### 2. What is the problem here? Fix it to log the correct name and explain the fix.

```
    const user = {
    name: "tapaScript",
    greet: () => {
        console.log(`Hello, ${this.name}!`);
      },
    };
    user.greet();
```

#### Ans: `greet()` is an object method. Since the method is arrow function and arrow function doesn't have it's own `this`, it will refer to its lexical parent scope. In this case `greet()` function's scope is `user` object and its parent scope is `window`. `window` doesn't have `name` property. So `this.name` is `undefined`. To fix this, use standard js function.

```
const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

### 3. Can you explain what is the problem here and fix the issue to log the correct name?

```
  const obj = {
    name: "Tom",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  const greetFn = obj.greet;
  greetFn();
```

#### Ans: We are assigning `obj.greet` function to a variable. `greetFn` is the variable name in this case. So `greetFn` is nothing but a standard function definition. Standard function in non strict mode point to the `window` object. Since `window` object doesn't have name property, therefore name is `undefined`. If we call greetFn() with explicit context then we can show the correct name.

```
  // Fix - 1
  const obj = {
    name: "Tom",
    greet: function () {
      console.log(this);
      console.log(`Hello, ${this.name}!`);
    },
  };
  const greetFn = obj.greet;
  greetFn.call(obj);

  // Fix - 2
  const obj = {
    name: "Tom",
    greet: function () {
      console.log(this);
      console.log(`Hello, ${this.name}!`);
    },
  };
  const greetFn = obj.greet.bind(obj);
  greetFn.();
```

### 4. What is the problem with the following code? Why isn't it logging the name correctly?

```
  const user2 = {
    name: "Alex",
    greet: function () {
      function inner() {
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
  };

  user2.greet();
```

#### Ans: inner function is invoking without any context. So this.name is undefined in this case. If we have to log the correct name we can convert it to arrow function. The idea is arrow function does't have it's own this. It refer to its lexical parent scop. In this inner() function will find user2 object as its lexical parent scope.

```
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
```

### 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details.

#### Ans:

```
  function Sports(name, NoOfPlayers) {
    this.name = name;
    this.NoOfPlayers = NoOfPlayers;
  }

  const footBall = new Sports("Foot Ball", 22);

  const cricket = new Sports("Cricket", 22);

  console.log(footBall, cricket);
```

### 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of.

```
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
```

#### Ans:

```
// Solution - 1
car1.describe.call(car2);

// Solution - 2
const car2Description = car1.describe.bind(car2);
car2Description();
```

### 6. What will be the output of the following code and why?

```
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

#### Ans: C

- `sayHello()` is an object method. As it is a standard javascript function, this refer to that object who is invoking HTMLImageElement. person3 object in this case.
- `sayHelloArrow()` is also an object method and it's an arrow function. As an arrow function doesn't have it's own `this`, rather that it capture from the lexical scope where it defined. `window` object in this case. And `window` object doesn't have name property. So `this.name` is `undefined`. But in this case window object has a built in property `name` and its value is "" so this.name pointing to the window.name which is empty string

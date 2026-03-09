### 1. What will be the output of the following code and why?

```
  function outer() {
      let count = 0;
      return function inner() {
          count++;
          console.log(count);
      };
  }
  const counter = outer();
  counter();
  counter();
```

#### Ans: 1, 2.

Reason: counter function has access to `count` variable for its lexical scope. For its first call, `count` value is 1 and for second call `count` value is 2.

### 2. What will be the output of the following code and why?

```
  function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
  }
  console.log(testClosure()());
```

#### Ans: 100.

Reason: `testClosure()()` means the function `testClosure` is called first, and it returns another function, which is then immediately executed by the second `()`. For second function call, it has access to `x` variable and its updated value is `10*10 = 100`

### 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

#### Ans:

```
  const btn = document.getElementById("closure-btn");

  function setupLog() {
    let count = 0;
    btn.addEventListener("click", function () {
      count++;
      console.log("clicked: ", count);
    });
  }

  setupLog();
```

### 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

#### Ans:

```
  function createMultiplier(multiplier) {
    let number = 3;
    return function () {
      number *= multiplier;
      console.log(number);
    };
  }

  const multiply = createMultiplier(3);
  multiply(); // 9
  multiply(); // 27
  multiply(); // 81
```

### 5. What happens if a closure references an object?

- The object is garbage collected immediately.
- The object remains in memory as long as the closure exists.
- The object is automatically cloned.
- None of the Above.

#### Ans: The object remains in memory as long as the closure exists.

### 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.

#### Ans:

```
  function counterFactory(initialCountValue) {
    let count = initialCountValue;

    return {
      increment: function (incrementalValue) {
        count += incrementalValue;
        console.log(`Incremented by ${incrementalValue} and current value is ${count}`);
      },
      decrement: function (decrementalValue) {
        count -= decrementalValue;
        console.log(`Decremented by ${decrementalValue} and current value is ${count}`);
      },
      reset: function () {
        count = 0;
        console.log(`current value is ${count}`);
      },
      currentValue: function () {
        console.log(`current value is ${count}`);
      },
    };
  }

  const counter = counterFactory(10);
  counter.increment(15); // 25
  counter.decrement(7); // 18
  counter.currentValue(); // 18
  counter.reset(); // 0
```

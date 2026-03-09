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

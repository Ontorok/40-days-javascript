Notes

- Functions allow us to reuse code efficiently. Instead of writing the same logic repeatedly, we define it once and call it whenever needed—eliminating code duplication and making programs more maintainable.
- To create a function
  - Start with the `function` function.
  - Follow with a descriptive name (e.g. `printName`).
  - Add parentheses `()` after the name.
  - Enclose the function’s logic in curly braces `{}`
    ```jsx
    function printName() {
      // function's logic
    }
    ```
- Execute a function by calling its name with parentheses.
  ```jsx
  printName(); // invoke the function
  ```
- Parameters vs. Arguments
  - _Parameters_ : Placeholders defined in the function declaration or function definition (inputs the function expects)
    ```jsx
    function printName(name) {
      // 'name' is a parameter
      console.log(`Hello, ${name}!`);
    }
    ```
  - _Arguments:_ Actual values passed when calling the function
    ```jsx
    printName("Nasir"); // 'Nasir' is the argument
    ```
  - When calling a function, provide concrete values for each parameter in the same order they were declared
    ```jsx
    function add(a, b) {
      return a + b;
    }
    add(5, 3); // Passes 5 as 'a' and 3 as 'b'
    ```
- `return` keyword
  - The **`return`** keyword specifies the value a function outputs when executed.
  - When followed by a value (e.g., **`return x;`**), that value is passed back to the caller.
  - When used without a value (e.g., **`return;`**), the function outputs **`undefined`**.
  - **`return`** immediately exits the function, skipping any subsequent code.
- Rest Parameter
  - Uses three dots (**`...`**) before the last parameter name (e.g., **`function foo(...rest)`**).
  - Collects all remaining arguments into a single array, allowing functions to handle variable numbers of inputs.
    ```jsx
    function showOutput(num1,num2...rest) {
    	console.log(num1,num2,rest)
    }
    sum(1, 2, 3, 4, 5); // 1, 2, [3, 4, 5]
    ```
- Nested Functions
  - Functions declared inside other functions.
  - Inner functions must be invoked within the outer function's body.
  - Outer functions can return inner functions (enabling closures).
  -
  ```jsx
  function outer() {
    function inner() {
      return "Nested result";
    }
    return inner; // Returning the inner function
  }
  const innerFunc = outer();
  innerFunc(); // Executes inner function
  ```
- Callback functions
  - Functions passed as arguments to other functions.
  ```jsx
  function processData(data, callback) {
    return callback(data); // Invokes the callback
  }
  // Callback function
  function format(input) {
    return `Formatted: ${input}`;
  }
  processData("Test", format); // Returns "Formatted: Test"
  ```
- Pure functions

  - Always returns the same output for identical inputs.
  - No side effects (e.g., modifying external state or variables).
  - Relies only on input parameters. Doesn't alter external data or cause observable changes.
  -

  ```jsx
  // Pure
  function add(a, b) {
    return a + b;
  }
  // Impure (modifies external variable)
  let greetingMessage = "Hola";
  function greeting(name){
  	return greetingMessage + name;
  }

  console.log(greeting("nasir"));
  console.log(greeting("nasir"));

  greetingMessage = "Hello";
  console.log(greeting("nasir"));
  console.log(greeting("nasir"));

  // Outputs
  Hola nasir
  Hola nasir
  Hello nasir
  Hello Nasir
  ```

- Arrow functions
  - Compact alternative to traditional functions using **`=>`**.
  - Implicit return when omitting curly braces (e.g., **`x => x * 2`**).
  - No **`this`** binding (inherits **`this`** from parent scope).
  ```jsx
  // Traditional
  function square(x) {
    return x * x;
  }
  // Arrow equivalent
  const square = (x) => x * x;
  ```
- IIFE (Immediately Invoked Function Expression)
  - Executes immediately after definition.
  - Creates a private scope to avoid polluting global namespace.
  - **`(function() { ... })()`**
  -
  ```jsx
  (function () {
    const secret = "IIFE secret";
    console.log(secret); // Runs immediately
  })();
  // `secret` is inaccessible outside the IIFE
  ```
- Function Execution Stack / Call Stack
  - Stack data structure tracking function execution order.
  - Functions are "pushed" onto the stack when called and "popped" when completed.
  - Last function added to the stack executes first. LIFO
  ```jsx
  function first() {
    second(); // Pushed to stack
  }
  function second() {
    third(); // Pushed to stack
  }
  function third() {
    // Executed first (LIFO)
  }
  first(); // Call stack: first → second → third
  ```
- Recursion
  - A function calling itself to solve smaller instances of a problem.
  - Must have base case/exit criteria to terminate recursion (prevents infinite loop)
  - Calls itself with modified arguments.
  ```jsx
  function factorial(n) {
    // Base case
    if (n <= 1) return 1;
    // Recursive case
    return n * factorial(n - 1);
  }
  factorial(3); // Returns 6 (3 * 2 * 1)
  ```

### 1. What will be the output of the following code?

```
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
```

#### Ans: _An error occurred:ReferenceError_

### 1. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

#### Ans

```
  function processPayment(amount) {
    try {
      let balance = 150;
      if (amount < 0) throw new Error("Amount should be positive", { cause: "Negative number can not be processed." });
      if (amount > balance) throw new Error("Insufficient balance", { cause: "Balance can not be negative." });
      balance -= amount;
      console.log(`Current Balance is: ${balance}`);
    } catch (error) {
      console.error(`An error occurred. ${error.message}. ${error.cause}`);
    }
  }

  processPayment(100); // Current Balance is: 50
  processPayment(-100); // An error occurred. Amount should be positive. Negative number can not be processed.
  processPayment(200); // An error occurred. Insufficient balance. Balance can not be negative.
```

### 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError

#### Ans

```
  function processCustomerPayment({ userId, email, amount }) {
    try {
      const serverIsRunning = true;
      if (!serverIsRunning) throw new ServerError("Server is under maintenance.");
      const users = ["abcX01", "xyzAbc"];
      const user = users.find((u) => u === userId);
      if (!user) throw new UserError("User not found");
      if (!email.includes("@")) throw new EmailError("Invalid email format!");
      if (amount < 0) throw new PaymentError("Amount should be positive");
      console.log("Payment process successful!!");
    } catch (error) {
      console.error(`An error occurred. ${error.name}: ${error.message}`);
    }
  }
```

### 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

#### Ans

```
  function InvalidUrlError(message) {
    this.name = "Invalid URL";
    this.message = message;
  }
  function fetchData(url = "") {
    try {
      if (!url || !url.startsWith("https")) {
        throw new InvalidUrlError(`Invalid url provided: ${url}`);
      }
      console.log("Data fetched");
    } catch (error) {
      console.error(`An error occurred. ${error.name}: ${error.message}`);
    }
  }

  fetchData("https://127.0.0.1:5500/Day14/"); // Data fetched
  fetchData("http://127.0.0.1:5500/Day14/"); // An error occurred. Invalid URL: Invalid url provided http://127.0.0.1:5500/Day14/
```

### 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

#### Ans

```
  function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
  }

  function validateUser(user) {
    try {
      if (user.name === "") throw new ValidationError("name can not be empty");
      if (user.age < 0) throw new ValidationError("age can not be zero");
      console.log("Form is valid!!");
    } catch (error) {
      console.error(`An error occurred. ${error.name}: ${error.message}`);
    }
  }

  const employee = { name: "nasir", age: 30 };
  validateUser(employee);
```

### 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

#### Ans

```
  function readFile(filePath = "") {
    try {
      if (filePath === "") {
        throw new Error("File not found!");
      } else {
        console.log("Processing the file. Please wait...");
      }
    } catch (error) {
      console.error("an error has occurred :");
      console.error(error);
    }
  }
  readFile("./car.jpg");
```

### 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

#### Ans

```
  function parseJson(str) {
    try {
      const parsedData = JSON.parse(str);
      return parsedData;
    } catch (error) {
      return "Invalid JSON";
    }
  }

  console.log(parseJson("InvalidJson"));
```

### 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually
- It prints an error message

#### Ans: _It creates a new error manually._

### 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not
- Stops the execution of the script

#### Ans: _Runs regardless of whether an error occurs or not._

### 10. Create a table explaining the usages of try, catch, throw, rethrow, error object

- `try`: Executes code that might throw an error. If an error occurs, execution jumps to the catch block.
- `catch`: Catches and handles errors thrown in the try block. Receives the error object so we can do further inspect.
- `throw`: Manually throws an error (usually an Error instance) to indicate failure and interrupt normal flow.
- `rethrow`: Inside a catch block, after optional logging/processing/cleanup, you throw the caught error again (throw err;) so it can bubble up to higher catch blocks or cause unhandled rejection/crash.
- `error object`: A built-in constructor that creates rich error instances with `.message`, `.name`, `.stack` (and `.cause` in modern JS). Helps provide meaningful messages, types, and debugging info instead of plain strings.

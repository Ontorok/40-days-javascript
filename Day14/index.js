console.log("Day-14: Error Handling in JavaScript");

try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

function processPayment(amount) {
  try {
    let balance = 150;
    if (isNaN(amount)) {
      throw new Error("Invalid number", { cause: "Invalid number can not be processed." });
    } else if (amount < 0) {
      throw new Error("Amount should be positive", { cause: "Negative number can not be processed." });
    } else if (amount > balance) throw new Error("Insufficient balance", { cause: "Balance can not be negative." });
    balance -= amount;
    console.log(`Current Balance is: ${balance}`);
  } catch (error) {
    console.error(`An error occurred. ${error.message}. ${error.cause}`);
  }
}

processPayment(100);
processPayment(-100);
processPayment(200);

function UserError(message) {
  this.name = "UserError";
  this.message = message;
}
function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
}
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}
function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
}

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

processCustomerPayment({
  userId: "abcX01",
  email: "hello@mail.com",
  amount: 500,
});

processCustomerPayment({
  userId: "abcX01",
  email: "hello@mail.com",
  amount: -500,
});

function InvalidUrlError(message) {
  this.name = "Invalid URL";
  this.message = message;
}
function fetchData(url = "") {
  try {
    if (!url || !url.toLowerCase().startsWith("https")) {
      throw new InvalidUrlError(`Invalid url provided: ${url}`);
    }
    console.log("Data fetched");
  } catch (error) {
    console.error(`An error occurred. ${error.name}: ${error.message}`);
  }
}

fetchData("http://127.0.0.1:5500/Day14/");

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

function readFile(filePath = "") {
  try {
    if (filePath === "") {
      throw new Error("File not found!");
    }
    console.log("File is processing..");
  } catch (error) {
    console.error(`An error occurred. ${error.name}: ${error.message}`);
  }
}
readFile("./car.jpg");

function parseJson(str) {
  try {
    const parsedData = JSON.parse(str);
    return parsedData;
  } catch (error) {
    return "Invalid JSON";
  }
}

console.log(parseJson("InvalidJson"));

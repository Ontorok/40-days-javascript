Hoisting is one of the most misunderstood concepts in JavaScript. Many developers think JavaScript “moves variables and functions to the top of the file.” That explanation is convenient—but technically wrong.

In this article, we’ll break down **what actually happens under the hood**, why `var`, `let`, and `const` behave differently, and how the **Temporal Dead Zone (TDZ)** fits into the picture.

---

## The Global Execution Context

When a JavaScript program starts, the engine creates a **Global Execution Context (GEC)**.

The GEC is created in **two phases**:

1. **Creation Phase**
2. **Execution Phase**

Understanding hoisting starts with the **creation phase**.

---

## What Happens in the Creation Phase?

During the creation phase, JavaScript does the following:

- Creates the `window` object (in browsers)
- Initializes the `this` keyword
  - In global scope, `this === window`
- Allocates memory for:
  - Variables
  - Functions

This memory allocation step is what we call **hoisting**.

---

## Variable Hoisting

### `var` Variables

- Memory is allocated during the creation phase
- Automatically initialized with `undefined`
- Can be accessed before declaration (value will be `undefined`)

```javascript
console.log(a); // undefined
var a = 10;
```

This behavior is why `var` is considered unsafe in many scenarios.

---

### `let` and `const` Variables

- Memory **is allocated** during the creation phase
- They are **not initialized**
- They remain in the **Temporal Dead Zone (TDZ)**
- Accessing them before declaration results in a **ReferenceError**

> Important: `let` and `const` **are hoisted**, but they are not initialized.

---

## Understanding the Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is one of the most confusing parts of JavaScript.

- TDZ is **not a physical place**
- It is a **time period**
- It exists from:
  - Scope creation
  - Until the variable declaration is executed

Once the declaration line runs, the TDZ ends.

```javascript
{
  // === name variable's TDZ started here
  let name;
  // console.log(name); // RerenceError
  // some code
  // some code
  name = "tapaScript"; // === name variable's TDZ ends here
  console.log(name);
  //
  //
}
```

For `const`, initialization must happen at the declaration line, otherwise JavaScript throws an error.

---

## Function Hoisting

### Function Declarations

- Entire function is stored in memory during the creation phase
- Can be called before the function declaration appears in code

```javascript
greet(); // "Hello"

function greet() {
  console.log("Hello");
}
```

This is known as **full hoisting**.

---

### Function Expressions

Function expressions behave like variables.

- Hoisting depends on how they are declared (`var`, `let`, `const`)
- They are **not callable** before initialization

```javascript
sayHi(); // Uncaught TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};
```

---

## Execution Phase

After the creation phase finishes:

- JavaScript enters the **execution phase**
- Code runs line by line
- Variable assignments happen here
- Function calls are executed here

---

## So, What Is Hoisting Really?

❌ Hoisting is **not** JavaScript moving code to the top  
✅ Hoisting is **memory allocation before execution**

- Variable hoisting → memory created for variables
- Function hoisting → memory created for functions

Nothing is physically moved in your source code.

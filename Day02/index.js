const bodyEl = document.querySelector("body");
bodyEl.style.background = "black";

const contentEl = document.querySelector(".content");
contentEl.style.color = "white";
contentEl.innerText = "Liver Server Testing";

// - `let`: Block-scoped, can be reassigned
// - `const`: Block-scoped, **cannot** be reassigned

/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
  */

const btn = document.getElementById("closure-btn");

function setupLog() {
  let count = 0;
  btn.addEventListener("click", function () {
    count++;
    console.log("clicked: ", count);
  });
}

setupLog();

function createMultiplier(multiplier) {
  let number = 3;
  return function () {
    number *= multiplier;
    console.log(number);
  };
}

const multiply = createMultiplier(3);
multiply();
multiply();
multiply();

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
counter.increment(15);
counter.decrement(7);
counter.currentValue();
counter.reset();

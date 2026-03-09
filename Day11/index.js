const btn = document.getElementById("closure-btn");

function setupLog() {
  let count = 0;
  btn.addEventListener("click", function () {
    count++;
    console.log("clicked: ", count);
  });
}

setupLog();

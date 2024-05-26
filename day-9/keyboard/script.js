const key = document.querySelector("#key");

// addEventListener(a, b)
// a: event name
// b: function to call when event is triggered
// document.addEventListener("keydown", function () {
//   console.log("key pressed");
// });

// document.addEventListener("keyup", function () {
//   console.log("key released");
// });

document.addEventListener("keydown", function (event) {
  console.log(event);
  key.innerText = event.key;
});

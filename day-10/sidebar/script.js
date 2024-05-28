const btnMenu = document.querySelector("#menuIcon");
const btnClose = document.querySelector("#closeIcon");
const sidebar = document.querySelector("#sidebar");
const sidebarBackground = document.querySelector("#sidebarBackground");

// addEventListener(a, b)
// a: event name
// b: function to run when event happens
btnMenu.addEventListener("click", function () {
  console.log("menu button clicked");
  //   sidebar.style.display = "block";
  sidebarBackground.style.visibility = "visible";
  sidebar.style.right = "0";
});

btnClose.addEventListener("click", function () {
  console.log("close button clicked");
  //   sidebar.style.display = "none";
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});

sidebarBackground.addEventListener("click", function () {
  console.log("background clicked");
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});

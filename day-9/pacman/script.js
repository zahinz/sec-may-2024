// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

function moveRight() {
  console.log("Right");
  //   assing pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft + 50;
  pacman.style.left = newLeft + "px";
}

function moveLeft() {
  console.log("Left");
  //   assing pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft - 50;
  if (newLeft >= 0) {
    pacman.style.left = newLeft + "px";
  } else {
    pacman.style.left = 0 + "px";
  }
}

function moveUp() {
  console.log("Up");
  //   assing pacman styling
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop - 50;
  if (newTop >= 0) {
    pacman.style.top = newTop + "px";
  } else {
    pacman.style.top = 0 + "px";
  }
}

function moveDown() {
  console.log("Down");
  //   assing pacman styling
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop + 50;
  pacman.style.top = newTop + "px";
}

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveRight();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  }
});

// assign action to the button
btnRight.addEventListener("click", function () {
  moveRight();
});
btnLeft.addEventListener("click", moveLeft);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);

// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area

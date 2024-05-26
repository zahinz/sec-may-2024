// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("Right");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(1)";
  } else if (event.key === "ArrowLeft") {
    console.log("Left");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(-1)";
  } else if (event.key === "ArrowUp") {
    console.log("Up");
    //   assing pacman styling
    pacman.style.transform = "rotate(-90deg) scaleX(1)";
  } else if (event.key === "ArrowDown") {
    console.log("Down");
    //   assing pacman styling
    pacman.style.transform = "rotate(90deg) scaleX(1)";
  }
});

// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area

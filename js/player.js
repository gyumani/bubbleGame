const shooter = document.getElementById("shooting_direction");
const MAX_LEFT_ANG = -50;
const MAX_RIGHT_ANG = 50;

function moveDirection(e) {
  const key = e.keyCode;
  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  const deg = shooter.style.transform === "" ? "0" : shooter.style.transform;
  const regex = /[^0-9|-]/g;
  let numberDeg = Number(deg.replace(regex, ""));

  switch (key) {
    case KEY.LEFT:
      if (MAX_LEFT_ANG === numberDeg) {
        return;
      }
      numberDeg -= 1;
      shooter.style.transform = `rotate(${numberDeg}deg)`;
      break;
    case KEY.UP:
      break;
    case KEY.DOWN:
      break;
    case KEY.RIGHT:
      if (MAX_RIGHT_ANG === numberDeg) {
        return;
      }
      numberDeg += 1;
      shooter.style.transform = `rotate(${numberDeg}deg)`;
      break;
  }
}

window.addEventListener("keydown", moveDirection);

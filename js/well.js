const well = document.getElementById("well");
well.style.height = "3%";

function downTheWell() {
  const height = well.style.height;
  const regex = /[^0-9|-]/g;
  let numberHeight = Number(height.replace(regex, ""));
  if (height !== "") {
    numberHeight += 3;
  }
  well.style.height = `${numberHeight}%`;
}

setInterval(downTheWell, 10000);

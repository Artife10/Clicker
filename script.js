const gomb = document.getElementById("gomb");
const szazalek_gomb = document.getElementById("szaz");
const points_display = document.getElementById("points");

let points = 0;
let szazalek = 1;

function LoadFunc() {
  points_display.innerText = "POINTS: " + Math.round(points).toString();
  szazalek_gomb.innerText = (szazalek * szazalek).toString() + "POINTS";
}

gomb.addEventListener("click", function () {
  points += getRandomInt(2) + 1 * szazalek;
  LoadFunc();
});

szazalek_gomb.addEventListener("click", function () {
  if (CanAfford(szazalek * szazalek)) {
    var price = szazalek * szazalek;
    szazalek += 1;
    points -= price;
  }
  LoadFunc();
});

function CanAfford(price) {
  if (points - price < 0) {
    return false;
  } else {
    return true;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

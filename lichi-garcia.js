let Lista = [0.8, 0.1, 0.02, 0.01, 0.003, 0.003, 0.001, 0.0005];
let Colores = [
  "#33CCFF",
  "#FFFFFF",
  "#33CCFF",
  "#000000",
  "#FFFFFF",
  0,
  "#FFFFFF",
  "#000000",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Cargar el logo de la escuela
  Logo = loadImage("Logo.png");
}

function draw() {
  background(0);

  noStroke();

  for (let i = 0; i < 8; i++) {
    if (i == 5 && Lista[i] > 100 * (width / 400)) {
      Lista[4] = Lista[4] + (65 * (width / 400) - Lista[4]) * 0.3;
    } else {
      Lista[i] = Lista[i] * 1.2;
    }

    if (i == 7) {
      translate(width / 2, height / 2);
      rotate(radians(45));
    }

    fill(Colores[i]);

    if (i != 5 && i != 4) {
      square(width / 2 - Lista[i] / 2, height / 2 - Lista[i] / 2, Lista[i]);
    }

    if (i > 7) {
      square(0, -Lista[i], Lista[i]);
    }
  }

  // Rotación de logo
  rotate(radians(Lista[4] * 2.34));
  image(Logo, -(Lista[4] / 2), -(Lista[4] / 2), Lista[4], Lista[4]);
}

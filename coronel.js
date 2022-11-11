let v, v1, v2, v3, vv, b, b1, fin, logo;
function preload() {
  // Solo lo comenté para probar el algoritmo
  //logo = loadImage("logo.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  v = 0;
  v1 = 0;
  v2 = 1;
  v3 = 0;
  r = 0;
  g = 0;
  b = 255;
  b1 = 3;
  fin = false;
  vv = 3;
}

function draw() {
  background(b);
  strokeWeight(30);
  
  // Se unifica la repetitiva en una. Se produce una simetría entre las líneas y se optimiza el algoritmo
  
  for (let i = 0; i < width / 2; i = i + 1) {
    // Pasar el 38 a variables
    line(i * - 38 + v, 0, i * -38 + v, height);
    line(width + i * 38 + v1, 0, width + i * 38 + v1, height);
    
    if (v < width / 2 - 38) {
      // pasar la velocidad 0.008 a variable
      v = v + 0.008;
      v1 = v1 - 0.008;
    } else fin = true;
  }

 
  if (b < 0) {
    b = 0;
    stroke(0, g, b1);
    
    // Esta condición no se cumple, pero si se cumple que b1>0 🧠
    if (b1 < 0) {
      v2 = 2;
    }
    // Eliminar esta condición o reubicar... nunca se cumple b < 0 (1er condición) y luego b> 255 
    if (b > 255) {
      v2 = -2;
    }
    b1 = b1 + v2;
    g = g + v2;
    strokeWeight(width / 10);
    line(0, height / 2, width, height / 2);
    strokeWeight(0);
    fill(0);
    textSize(150);
    text("CET 30", width / 14, height / 2 + 40);
    text("CET 30", width / 2 + width / 5, height / 2 + 40);
  }

  strokeWeight(20);
  fill(255);
  ellipse(width / 2, height / 2, 0 + v3);
  if (v3 < height / 2 + 150) {
    v3 = v3 + 6.3;
  }

  if (b == 0) {
    // Anulo la IMG del logo. Volver a su estado original.
    push();
    textAlign(CENTER)
    text("LOGO",width / 2, height / 2)
    //image(logo, width / 2 - vv / 2, height / 2 - vv / 2, vv, vv);
    if (vv < height / 2 - height / 12) {
      vv = vv + 6;
    }
    pop();
  }

  if (fin == true) {
    b = b - 2;
  }
}

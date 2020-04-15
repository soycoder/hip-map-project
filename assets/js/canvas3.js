var layer1 = document.getElementById("layer1");
layer1.addEventListener("keydown", doKeyMove, true);
// document.body.appendChild("canvas_2");
layer1_context = layer1.getContext("2d");
layer1_context.fillRect(0, 0, 20, 20);
// layer1_context.fillStyle = "#FF0000";
var x = 0;
var y = 450;

function doKeyMove(e) {
  //====================
  //	THE W KEY
  //====================
  if (e.keyCode == 87) {
    clearCanvas();
    drawMaps();
    y = y - 20;
    if (y < 0) {
      y = 0;
    }
    layer1_context.fillRect(x, y, 20, 20);
  }

  //====================
  //	THE S KEY
  //====================
  if (e.keyCode == 83) {
    clearCanvas();
    drawMaps();
    y = y + 50;
    if (y > 100) {
      y = 100;
    }
    layer1_context.fillRect(x, y, 20, 20);
  }

  //====================
  //	THE A KEY
  //====================
  if (e.keyCode == 65) {
    clearCanvas();
    drawMaps();
    x = x - 20;
    if (x < 0) {
      x = 0;
    }
    layer1_context.fillRect(x, y, 20, 20);
  }

  //====================
  //	THE D KEY
  //====================
  if (e.keyCode == 68) {
    clearCanvas();
    drawMaps();
    x = x + 50;
    if (x > 100) {
      x = 100;
    }
    layer1_context.fillRect(x, y, 20, 20);
  }
}

function clearCanvas() {
  canvas.width = canvas.width;
}

function drawMaps() {
  layer1_context.beginPath();
  for (let i = 1; i <= 9; i++) {
    layer1_context.moveTo(0, i * 20);
    layer1_context.lineTo(100, i * 20);
  }

  for (let i = 1; i <= 9; i++) {
    layer1_context.moveTo(i * 20, 0);
    layer1_context.lineTo(i * 20, 100);
  }

  layer1_context.stroke();
}

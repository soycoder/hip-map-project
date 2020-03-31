
var canvas = document.getElementById("canvas_1");
canvas.addEventListener("keydown", doKeyMove, true);

canvas_context = canvas.getContext("2d");
canvas_context.fillRect(0, 450, 50, 50);
drawMaps();
var x = 0;
var y = 450;

function doKeyMove(e) {
  //====================
  //	THE W KEY
  //====================
  if (e.keyCode == 87) {
    clearCanvas();
    drawMaps();
    y = y - 50;
    if (y < 0) {
      y = 0;
    }
    canvas_context.fillRect(x, y, 50, 50);
  }

  //====================
  //	THE S KEY
  //====================
  if (e.keyCode == 83) {
    clearCanvas();
    drawMaps();
    y = y + 50;
    if (y > 450) {
      y = 450;
    }
    canvas_context.fillRect(x, y, 50, 50);
  }

  //====================
  //	THE A KEY
  //====================
  if (e.keyCode == 65) {
    clearCanvas();
    drawMaps();
    x = x - 50;
    if (x < 0) {
      x = 0;
    }
    canvas_context.fillRect(x, y, 50, 50);
  }

  //====================
  //	THE D KEY
  //====================
  if (e.keyCode == 68) {
    clearCanvas();
    drawMaps();
    x = x + 50;
    if (x > 450) {
      x = 450;
    }
    canvas_context.fillRect(x, y, 50, 50);
  }
}

function clearCanvas() {
  canvas.width = canvas.width;
}

function drawMaps() {
  canvas_context.beginPath();
  var i = 1;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 2;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 3;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 4;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 5;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 6;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 7;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 8;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);
  var i = 9;
  canvas_context.moveTo(0, i * 50);
  canvas_context.lineTo(500, i * 50);

  var i = 1;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 2;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 3;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 4;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 5;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 6;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 7;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 8;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);
  var i = 9;
  canvas_context.moveTo(i * 50, 0);
  canvas_context.lineTo(i * 50, 500);

  canvas_context.stroke();
}
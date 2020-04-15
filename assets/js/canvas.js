var canvas = document.getElementById("canvas_1");
canvas.addEventListener("keydown", doKeyMove, true);
// document.body.appendChild("canvas_2");
canvas_context = canvas.getContext("2d");
canvas_context.fillRect(0, 0, 10, 10);
drawMaps();
drawingImage();
var map_axis_x = 1056;
var map_axis_y = 792;
var map_x_channel = 100;
var map_y_channel = 75;
var tiles_x = map_axis_x/map_x_channel;
var tiles_y = map_axis_y/map_y_channel;
var x = 0;
var y = 0;

function doKeyMove(e) {
  //====================
  //	THE W KEY
  //====================
  if (e.keyCode == 87) {
    clearCanvas();
    drawMaps();
    y = y - tiles_y;
    if (y < 0) {
      y = 0;
    }
    canvas_context.fillRect(x, y, tiles_x, tiles_y);
  }

  //====================
  //	THE S KEY
  //====================
  if (e.keyCode == 83) {
    clearCanvas();
    drawMaps();
    y = y + tiles_y;
    if (y > map_axis_y) {
      y = map_axis_y-tiles_y;
    }
    canvas_context.fillRect(x, y, tiles_x, tiles_y);
  }

  //====================
  //	THE A KEY
  //====================
  if (e.keyCode == 65) {
    clearCanvas();
    drawMaps();
    x = x - tiles_x;
    if (x < 0) {
      x = 0;
    }
    canvas_context.fillRect(x, y, tiles_x, tiles_y);
  }

  //====================
  //	THE D KEY
  //====================
  if (e.keyCode == 68) {
    clearCanvas();
    drawMaps();
    x = x + tiles_x;
    if (x > map_axis_x) {
      x = map_axis_x-tiles_x;
    }
    canvas_context.fillRect(x, y, tiles_x, tiles_y);
  }
}

function clearCanvas() {
  canvas.width = canvas.width;
}

function drawMaps() {
  canvas_context.beginPath();
//   // Grid - Vertical line
//   for (let i = 1; i <= map_y_channel; i++) {
//     canvas_context.moveTo(0, i * tiles_x);
//     canvas_context.lineTo(map_axis_x, i * tiles_x);
//   }

//  // Grid - Horizontal line
//   for (let i = 1; i <= map_x_channel; i++) {
//     canvas_context.moveTo(i * tiles_y, 0);
//     canvas_context.lineTo(i * tiles_y, map_axis_y);
//   }
  drawingImage();
  canvas_context.stroke();
  
}

function drawingImage() {
  var drawing = document.getElementById("canvas_1");
  var con = drawing.getContext("2d");
  // var goofyPic = document.getElementById("truemoney");
  // con.drawImage(goofyPic, 0 , 0, 150, 75);
  var _map = document.getElementById("full-map");
  con.drawImage(_map, 0 , 0, map_axis_x, map_axis_y);
}

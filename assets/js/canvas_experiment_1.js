var mousePressed = false;
var lastX, lastY;
var ctx;


function InitThis() {
  ctx = document.getElementById("myCanvas_ex1").getContext("2d");
  var _map = document.getElementById("full_map_ex1");
  ctx.drawImage(_map, 0, 0, ctx.canvas.width, ctx.canvas.height);
  $("#myCanvas_ex1").mousedown(function (e) {
    mousePressed = true;
    Draw(
      e.pageX - $(this).offset().left,
      e.pageY - $(this).offset().top,
      false
    );
  });

  $("#myCanvas_ex1").mousemove(function (e) {
    if (mousePressed) {
      Draw(
        e.pageX - $(this).offset().left,
        e.pageY - $(this).offset().top,
        true
      );
    }
  });

  $("#myCanvas_ex1").mouseup(function (e) {
    mousePressed = false;
  });
  $("#myCanvas_ex1").mouseleave(function (e) {
    mousePressed = false;
  });
}

function Draw(x, y, isDown) {
  if (isDown) {
    ctx.beginPath();
    // ctx.strokeStyle = $('#selColor').val();
    ctx.strokeStyle = "red";
    // ctx.lineWidth = $('#selWidth').val();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }
  lastX = x;
  lastY = y;
}

function clearArea() {
  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  InitThis();
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL("image/png");
  return image;
}


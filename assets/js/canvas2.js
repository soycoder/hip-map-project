// Declares global variables
var canvas = document.createElement("canvas");
	c = canvas.getContext("2d"),
	make = {},
	maps = {},
	width = 800,
	height = 600;

// Creates the requestAnimationFrame variable
(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
}) ();

// Modifies the canvas' properties
canvas.width = width,
canvas.height = height;



// 2D arrays that make up maps
maps = {
	one: [
	["w","o","w","o","o","o","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","o","w","w","w","w","o","w"],
	["w","o","w","o","o","o","o","w"],
	["w","o","w","o","w","o","o","w"],
	["w","o","w","o","o","w","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","w","w","w","w","w","w","w"]
	],

	two: [
	["w","w","w","w","w","w","w","w"],
	["w","o","o","o","o","o","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","o","w","w","w","w","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","o","o","o","o","o","o","w"],
	["w","w","w","w","w","w","w","w"]
	]
};

// Maps drawing functions
make = {
	map: function ( map2d ) {
		var i,
			j,
			tile,
			tilesX = 8,
			tilesY = 8;

		for (i = 0; i < tilesY; i++) {
			for(j = 0; j < tilesX; j++) {
				if (map2d[i][j] === "w") {
					this.tile(i * 64, j * 64, "w");
				}
			}
		}
	},

	tile: function (x, y, TD) {
		switch (TD) {
			case "w":
                c.beginPath();
				c.rect(x, y, 64, 64);
				c.fillStyle = "black";
				c.fill();
                
				c.lineWidth = 8;
				c.strokeStyle = "black";
				c.stroke();
                c.closePath();
				break;

			case "o":
				c.rect(x, y, 64, 64);
				c.fillStyle = "white";
				c.fill();
				c.lineWidth = 8;
				c.strokeStyle = "white";
				c.stroke();
				break;
		}
	}
}

// Updates constantly
function update () {
	c.clearRect(0, 0, width, height);
	make.map(maps.one);
	requestAnimationFrame(update);
}

// Begins updating when window is ready
window.addEventListener("load", function () {
    // Add the canvas
    document.body.appendChild(canvas);
	update();
});
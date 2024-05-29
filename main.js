// This function calculates the Triangle Area
function calculateTriangleArea() {
	var base = document.getElementById("base_triangle").value;
	var height = document.getElementById("height_triangle").value;
		document.getElementById("area_triangle").value = 0.5 * base * height;
	}

// square
function calculateSquareArea() {
	var side = document.getElementById("side_length").value;
		document.getElementById("area_square").value = side * side;
	}

// rectangle
function calculateRectangleArea() {
	var basse = document.getElementById("base_rectangle").value;
	var heeight = document.getElementById("height_rectangle").value;
		document.getElementById("area_rectangle").value = basse * heeight;
	}

// circle
function calculateCircleArea() {
	var radius = document.getElementById("radius").value;
		document.getElementById("area_circle").value = 3.14 * radius * radius;
	}
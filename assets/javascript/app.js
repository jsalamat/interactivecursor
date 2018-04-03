// Add a class to the body to hide the default cursor
// Add active class to show new cursor
const cursor = document.querySelector('.cursor');
const canvas = document.querySelector('.canvas');
document.addEventListener('DOMContentLoaded',
 function() {
 	document.body.classList.add('no-cursor');
 	cursor.classList.add('active');
});

// Listen to mouse
// - get the new cursor following and react to mouse does
// - start listen to mouse events
// Inside the DOMContentLoaded callback 
function mouseListeners();
// Anywhere outside
function mouseListeners() {
	document.addEventListener('mousemove',onMouseMove, false);
	document.addEventListener('mousedown',onMouseDown, false);
	document.addEventListener('mouseup',onMouseUp, false);
}

function onMouseMove(e) {
	updateCursorLocation(e.clientX, e.clientY);
	updateCursorAngle(e.clientX);
}

function onMouseDown(e) {}

function onMouseUp(e) {}


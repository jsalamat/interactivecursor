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
// - get the new cursor following and rect to moue does
// - start listen to mouse events
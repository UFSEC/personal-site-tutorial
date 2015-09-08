$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
});

function cursorAnimation() {
	$('#cursor').animate({
	    opacity: 0
	}, 'fast', 'swing').animate({
	    opacity: 1
	}, 'fast', 'swing');
}
$(document).ready(function() {
	window.addEventListener('scroll', function() {
		if(window.scrollY < 333) {
			$('#btt').slideUp();

		}
		else {
			$('#btt').slideDown();
		}
	}, false);
});
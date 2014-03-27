$(function() {
	//"Back to top" button animation
	window.addEventListener('scroll', function() {
		if(window.scrollY < 333) {
			$('#btt').slideUp();
		}
		else {
			$('#btt').slideDown();
		}
	}, false);

	//Random background changer
	$('#changeBG').on('click', function() {
   		$('html').css('background-image', 'url(images/wall' + Math.floor((Math.random()*5)+1) + '.jpg)');
  	});
});
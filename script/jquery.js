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
   		$('html').css('background-image', 'url(images/wall' + Math.floor((Math.random()*7)+1) + '.jpg)');
  	});

  	//E-mail tooltip (experimental)
  	$("#mail").on('click', function () {
	    $('div.tooltip').toggle('fast');
	});
});



/*append('<div class="tooltip"><p>Ctrl + C:<br />hamzaazeem1@gmail.com</p></div>')*/
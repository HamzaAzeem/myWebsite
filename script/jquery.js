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
	var loadBg = function() {
		var storedBg = localStorage.getItem("bg");
		console.log("storedBg", storedBg);
		if(storedBg) {
			$('body').css('background-image', storedBg);
		}else {
			$('body').css('background-image', 'url(images/wall5.jpg)');
		}
	}

	$('#changeBG').on('click', function() {
		var bg =  'url(images/wall' + Math.floor((Math.random()*7)+1) + '.jpg)';
		console.log("bg", bg);
		localStorage.setItem("bg", bg);
		loadBg();
  	});

  	//E-mail tooltip (experimental)
  	$("#mail").on('click', function () {
	    $('div.tooltip').toggle('fast');
	    $('.tooltip input').select();
	});

	loadBg();

});



/*append('<div class="tooltip"><p>Ctrl + C:<br />hamzaazeem1@gmail.com</p></div>')*/
$(document).ready(function () {
	$(window).scroll(function () {
		var yPos = $(this).scrollTop();
		$('.parallax').each(function(){
			if ( $(this).is(':first-child') ) { 
				var bgPos = ( yPos - $(this).position().top ) / 3; 
			}
			else { 
				var bgPos = ( yPos - $(this).position().top + $(this).height() )  / 3;
			}
			$(this).css('background-position', '50% -' + bgPos + 'px' );
		});

		$('.flyin').each(function () {
			let objHeight = $(this).height() / 1.6
			let objBottom = $(this).offset().top + $(this).outerHeight();
			let windowBottom = $(window).scrollTop() + $(window).height();
			if(windowBottom > (objBottom - objHeight)){
				$(this).animate({ opacity: '1' }, 2500);
			}
		});
	});
});

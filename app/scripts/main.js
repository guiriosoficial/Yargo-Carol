$(document).ready(function(){
	$(window).scroll(function() {
		$('.parallax').each(function(){
		var yPos = - ( $(window).scrollTop() / 3 );
		var bgPos = '50% '+ yPos + 'px';
		$(this).css('background-position', bgPos );
		});

		$('.flyin').each(function(i){
			var objHeight = $(this).height() / 2
			var objBottom = $(this).offset().top + $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + $(window).height();
			if(windowBottom > (objBottom - objHeight)){
				$(this).animate({ opacity: '1' });
			}
		});
	});
});

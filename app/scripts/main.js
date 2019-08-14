$(document).ready(function(){
	$(window).scroll(function() {
		$('.image').each(function(){
		var yPos = - ( $(window).scrollTop() / 3 );
		var bgPos = '50% '+ yPos + 'px';
		$(this).css('background-position', bgPos );
		});

		$('.flyin').each(function(i){
			var objBottom = $(this).offset().top + $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + $(window).height();
			if(windowBottom > objBottom){
				$(this).animate({'opacity':'1'});
			}
		});
	});
});

$(function(){
	$(window).scroll(function(){
		var scrolltop = $(this).scrollTop();
		
		// Passa por cada elemento com a classe .parallax
		$('.image').each(function(){
			var obj = $(this);
			
		// Garante que apenas trabalhemos no elemento que está visível na tela
		if ( scrolltop >= obj.position().top - obj.height() 
		&& scrolltop <= obj.position().top + obj.height()) {
			
			// O atributo data-divisor vai definir a velocidade do efeito
			var divisor = 4;
			
			// Corrige a diferença do primeiro elemento
			if ( obj.is(':first-child') ) {
				var bg_pos = ( scrolltop - obj.position().top ) / divisor;
			} else {
				var bg_pos = ( scrolltop - obj.position().top + ( obj.height() - 100 ) ) / divisor;
			}
			
			// Modifica a posição do bg
			obj.css({
				'background-position' : '50% -' + bg_pos + 'px'
			});
			
			// Animação do primeiro texto
			obj.children('.text').css({
				'bottom' : ( scrolltop - obj.position().top + 100 ) + 'px'
			});
			
		}
		});
	});
});
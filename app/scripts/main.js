$(document).ready(function(){
    $('.image').each(function(){
        var $obj = $(this);
        $(window).scroll(function() {
            var yPos =  - ( $(window).scrollTop()  / 3 ); 
            var bgpos = '50% '+ yPos + 'px';
            $obj.css('background-position', bgpos );
    });
    }); 
});
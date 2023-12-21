$(function(){
    $('.navbar-toggle').on('click',function(){
		if($('.navigation').hasClass('in')){
			$('body').removeClass('noscroll');
		} else {
			$('body').addClass('noscroll');
		}
	});
	if (parseInt($(window).width()) < 768){
		$('.navigation .navbar-nav li ul').parent().append('<span class="sub-toggle"><i class="caret"></i></span>');
		$('.navigation .navbar-nav li .sub-toggle').on('click',function(){
			$(this).parent().children('ul').toggle();
		});

		$('.works-nav-container').append('<button type="button" class="btn-next"><i class="fa fa-caret-right"></i></button><button type="button" class="btn-prev"><i class="fa fa-caret-left"></i></button>');
		$('.works-nav-container .btn-next').on('click',function(){
			$(this).parent().find('.box').animate({scrollLeft:'+=200'});
		});
		$('.works-nav-container .btn-prev').on('click',function(){
			$(this).parent().find('.box').animate({scrollLeft:'-=200'});
		});
	}
	
	$('.open-contact').click(function() {
        var produkUrl = $(this).attr("href");
        $('#content').animate({
            opacity: 0
        }, 400, function() {
            $(produkUrl).collapse('toggle');
            $('#content').delay(400).animate({
                opacity: 1
            }, 400);
        });
        $('#contact').slideUp(600, function() {
            $('#contact').addClass('open');
            $('html, body').animate({
                scrollTop: $(".meet-bottom").offset().top
            }, 900);
        }).delay(500).slideDown(600, function() {
            $('#content').fadeIn('slow', function() {});
        });
        return false;
    });
    $('.close-contact').click(function(event) {
        var produkUrl = $(this).attr("href");
        $(produkUrl).collapse('toggle');
        $('#content').animate({
            opacity: 0
        }, 400, function() {
            $('#contact').delay(400).slideUp(400).removeClass('open');
            $('html, body').animate({
                scrollTop: $(".meet-top").offset().top - 60
            }, 900);
        });
        return false;
    });
});
$(document).ready( function() {

    
        $(window).scroll(function() {
            if( $(this).scrollTop() > 1 ) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }
        });

        $('a[href^="#"]').on('click', function (event) {

            var target = $($(this).attr('href'));
    
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 650);
            }
        });

        $('.hamburger').on('click', function() {
            $('.mobile_menu').fadeIn();
            $('.overlay').fadeIn();
        });

        $('.fas.fa-times').on('click', function() {
            $('.mobile_menu').fadeOut();
            $('.overlay').fadeOut();
        });

        $('.overlay').on('click', function() {
            $(this).fadeOut();
            $('.mobile_menu').fadeOut();
        });
});
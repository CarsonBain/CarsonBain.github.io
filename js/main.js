$(function(){
  //mobile menu functionality
$('.hamburger__wrap').click(function(){
  $('.mobile-menu ul').slideToggle();
  $('.hamburger-menu').toggleClass('open');
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

});

$(function() {
  // Anchor link scroll
  $('a[href^="#"]').on("click", function(event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });
  // Copyright footer
  var currentYear = new Date().getFullYear();
  $('.year').html(currentYear);
  
});

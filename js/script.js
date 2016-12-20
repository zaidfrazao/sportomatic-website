$( document ).ready(function(){
	$(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy();

  var title = $(document).find("title").text();

  if (title === 'About | Sportomatic') {
    $('.toc-wrapper').pushpin({
      top: $('#vision-statement').offset().top,
      bottom: $('#contact').offset().top
    });
  } else {
    $('.toc-wrapper').pushpin({
      top: $('#scheduling').offset().top,
      bottom: $('#future-updates').offset().top
    });
  }
});

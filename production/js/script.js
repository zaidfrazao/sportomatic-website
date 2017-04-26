$( document ).ready(function(){
	//Initialise and configure side navigation
	$(".button-collapse").sideNav({
		menuWidth: 160,
		draggable: true
	});

	// Initialise ScrollSpy for right nav
  $('.scrollspy').scrollSpy();

	// Configure and initialise the right navigation on the About and Features
	// pages
	var title = $(document).find("title").text();
  if (title === 'About | Sportomatic') {
    $('.toc-wrapper').pushpin({
      top: $('#vision-statement').offset().top,
      bottom: $('#contact').offset().top
    });
  } else if (title === 'Features | Sportomatic') {
    $('.toc-wrapper').pushpin({
      top: $('#scheduling').offset().top,
      bottom: $('#future-updates').offset().top
    });
  }
});

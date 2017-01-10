var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availH = screenW;
}else{
	availH = screenH;
}

;(function($){
	var app = $('.app');
	var bodyH = $('body').height();

	app
		.find('.container .app-head .head-content')
		.find('>h1')
		.addClass('fade-in-down')
		.siblings('p')
		.addClass('fade-in')
		.parent()
		.siblings('.head-icon')
		.find('>img')
		.addClass('scale-animate')
		.parents('.app-head')
		.siblings('.app-body')
		.find('.body-head .body-head-content')
		.addClass('fade-in-up')
		.find('>h1,>p')
		.addClass('fade-in');
	$(window).scroll(function(e){
		var wTop = $(window).scrollTop();
		var aTop = app.find('.container .app-body .body-content').offset().top;

		if(wTop > (aTop - bodyH)){
			app
				.find('.container .app-body .body-content .container-head-content')
				.addClass('fade-in')
				.find('>h1')
				.addClass('fade-in-down')
				.siblings('p')
				.addClass('fade-in-down');
		}
		
		

	})
})(jQuery);
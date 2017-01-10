var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availH = screenW;
}else{
	availH = screenH;
}

;(function($){
	var center = $('.center');
	var bodyH = $('body').height();

	center
		.find('.container .center-head .head-content')
		.find('>h1')
		.addClass('fade-in-down')
		.siblings('p')
		.addClass('fade-in-down-3')
		.parent()
		.siblings('.head-icon')
		.find('>img')
		.addClass('scale-animate')
		.parents('.center-head')
		.siblings('.center-body')
		.find('.body-head .body-head-content')
		.addClass('fade-in-up')
		.find('>h1,>p')
		.addClass('fade-in');
	// console.log($('.product-design').offset().top)
	// console.log($('.abrand-manager').offset().top)
	$(window).scroll(function(e){
		var wTop = $(window).scrollTop();
		var cTop = center.find('.container .center-body .body-content').offset().top;

		if(wTop > (cTop - bodyH)){
			center
				.find('.center-body .body-content .body-container .container-head')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.parent()
				.siblings('.container-paragraph')
				.addClass('fade-in-down-2')
				.find('>span')
				.addClass('fade-in')
				.siblings('.container-content')
				.find('>h6,>p,.content-code')
				.addClass('fade-in');
		}
		// console.log(wTop)
		

	})
})(jQuery);
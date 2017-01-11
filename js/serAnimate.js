var screenW = screen.width;
var screenH = screen.height;
var bodyH;
;(function(e){
	var service = $('.service');
	var serType = service.find('.service-type');
	serType
		.find('.service-head .service-head-img >img')
		.addClass('scale-animate')
		.parent()
		.siblings('.service-head-content')
		.addClass('fade-down')
		.find('>h1,>a')
		.addClass('fade-in')
		.parents('.service-head')
		.siblings('.service-content')
		.addClass('fade-in-dowm-1');
})(jQuery);
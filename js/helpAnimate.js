var screenW = screen.width;
var screenH = screen.height;
var bodyH;
;(function(e){
	var help = $('.help');
	var helpType = help.find('.help-type');
	helpType
		.find('.help-head .help-head-img >img')
		.addClass('scale-animate')
		.parent()
		.siblings('.help-head-content')
		.addClass('fade-down')
		.find('>h1,>a')
		.addClass('fade-in')
		.parents('.help-head')
		.siblings('.help-content')
		.addClass('fade-in-dowm-1');
})(jQuery);
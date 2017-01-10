var screenW = screen.width;
var screenH = screen.height;
var bodyH;
;(function($){
	

	var introduce = $('.introduce');
	var introModule = introduce.find('.intro-module');
	var introMain = introduce.find('.intro-main');
	introModule
		.find('.module-bang')
		.find('.module-bang-icon-1')
		.addClass('module-animate-1')
		.siblings('.module-bang-icon-2')
		.addClass('module-animate-2')
		.siblings('.module-bang-icon-3')
		.addClass('module-animate-3')
		.siblings('.module-bang-icon-4')
		.addClass('module-animate-4')
		.siblings('.module-bang-name')
		.addClass('fade-in')
		.find('.bang-name')
		.addClass('bang-name-animate')
		.parent()
		.siblings('.btn-coat')
		.addClass('fade-in')
		.find('>a')
		.addClass('bang-name-animate')
		.parents('.module-bang')
		.siblings('.module-tech')
		.find('.module-tech-icon-1')
		.addClass('tech-animate-1')
		.siblings('.module-tech-icon-2')
		.addClass('tech-animate-2')
		.siblings('.module-tech-icon-3')
		.addClass('tech-animate-3')
		.siblings('.module-tech-icon-4')
		.addClass('tech-animate-4')
		.siblings('.module-tech-icon-5')
		.addClass('tech-animate-5')
		.siblings('.module-tech-icon-6')
		.addClass('tech-animate-6')
		.siblings('.tech-name')
		.addClass('fade-in')
		.find('.tech-name-con')
		.addClass('tech-name-animate')
		.parent()
		.siblings('.btn-coat')
		.addClass('fade-in')
		.find('>a')
		.addClass('tech-name-animate');
	
	$(window).scroll(function(){
		var wTop = $(window).scrollTop();
		var cTop = introduce.find('.intro-content').offset().top;
		var bTop = $('body').height();
		if(wTop > (cTop - bTop)){
			introduce
				.find('.intro-content')
				.addClass('fade-in');
			introMain
				.find('.intro-main-item')
				.find('.bang-head >img')
				.addClass('fade-in')
				.parent()
				.siblings('.bang-body-coat')
				.find('.bang-body')
				.addClass('fade-in')
				.find('.bang-body-title')
				.addClass('fade-in-down')
				.siblings('p')
				.addClass('fade-in-down')
				.parents('.bang-body-coat')
				.siblings('.bang-head')
				.find('.app-type')
				.addClass('fade-in')
				.find('>p')
				.addClass('scale-animate');
		}
	});

})(jQuery);
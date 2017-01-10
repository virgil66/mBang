;(function($){
	var innerW = $(window).innerWidth();
	var innerH = $(window).innerHeight();
	var mHeight;
	if(innerH > innerW){
		mHeight = innerH - 50;
	}else{
		mHeight = innerW - 50;
	}

	
	/**
	 * home
	 */
	
	var innerH = $(window).innerHeight();
	var home = $('.home');
	home
		.find('.rotation .oneBang')
		.addClass('fade-in-down')
		.find('.oneBang-top')
		.find('.oneBang-top-pics >img')
		.addClass('scale-animate')
		.parent()
		.siblings('.oneBang-top-word')
		.find('.oneBang-animate')
		.addClass('fade-in')
		.parents('.oneBang-top')
		.siblings('.oneBang-bottom')
		.addClass('fade-in-down')
		.find('.oneBang-bottom-word')
		.addClass('fade-in')
		.siblings('.oneBang-bottom-platform')
		.addClass('fade-in-down')
		.find('p')
		.addClass('scale-animate');
	
	var design = home.find('.design');
	var appInroduce = home.find('.appInroduce');
	var appService = home.find('.appService');
	var news = home.find('.news');
	$(window).scroll(function(event) {
		var wTop = $(window).scrollTop();
		var dTop = design.offset().top;
		var aTop = appInroduce.offset().top;
		var sTop = appService.offset().top;
		var nTop = news.offset().top;
		var bTop = $('body').height();
		if(wTop > (dTop - bTop) && wTop < (aTop - bTop)){
			design
				.addClass('fade-in')
				.find('.design-example .example-img >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.example-content')
				.find('>h1')
				.addClass('fade-in-down')
				.siblings('p')
				.addClass('fade-in-down');
			
		}else if(wTop > (aTop - bTop) && wTop < (sTop - bTop)){
			appInroduce
				.addClass('fade-in')
				.find('.description')
				.find('>h1,>p,>a')
				.addClass('fade-in-down')
				.parents('.description')
				.siblings('.series')
				.find('.series-coat .series-content >h3')
				.addClass('fade-in-down')
				.siblings('p')
				.addClass('fade-in-down-1');
			
		}else if(wTop > (sTop - bTop) && wTop < (nTop - bTop)){
			appService
				.addClass('fade-in')
				.find('.service-pics')
				.find('.pics-img-1')
				.addClass('top-series-1')
				.siblings('.pics-img-2')
				.addClass('top-series-2')
				.siblings('.pics-img-3')
				.addClass('top-series-3')
				.siblings('.pics-img-4')
				.addClass('top-series-4')
				.siblings('.pics-img-5')
				.addClass('top-series-5')
				.parent()
				.siblings('.service-content')
				.addClass('fade-in')
				.find('>h1,.service-item')
				.addClass('fade-in-down');
			
		}else if(wTop > (nTop - bTop)){
			news
				.addClass('fade-in')
				.find('.news-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.news-content')
				.addClass('fade-in')
				.find('>h1')
				.addClass('fade-in-down-2')
				.siblings('.news-groups')
				.addClass('fade-in-down');
		}
		// console.log($(window).scrollTop());
		// console.log($('.design').offset().top);
		// console.log(design.offset().top);
	});
	
})(jQuery);
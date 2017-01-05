;(function($){
	var innerW = $(window).innerWidth();
	var innerH = $(window).innerHeight();
	var mHeight;
	if(innerH > innerW){
		mHeight = innerH - 50;
	}else{
		mHeight = innerW - 50;
	}

	$('.home')
		.find('.rotation')
		.css({
			height: mHeight
		})
		.siblings('.design')
		.css({
			height: mHeight
		})
		.find('>div')
		.css({
			height: mHeight / 2
		})
		.parent()
		.siblings('.appInroduce')
		.css({
			height: mHeight
		})
		.find('.description')
		.css({
			height: mHeight * 0.39
		})
		.siblings('.series')
		.css({
			height: mHeight * 0.61
		})
		.parent()
		.siblings('.appService')
		.css({
			height: mHeight
		})
		.find('>div')
		.css({
			height: mHeight / 2
		})
		.parent()
		.siblings('.news')
		.css({
			height: mHeight
		});
	/**
	 * home动态效果
	 */
	
	var innerH = $(window).innerHeight();
	var home = $('.home');
	if(innerH <= 480){
		home
			.find('.rotation .oneBang-top .oneBang-top-pics >img')
			.addClass('opacity-animate')
			.parent()
			.siblings('.oneBang-top-word')
			.find('.oneBang-animate')
			.addClass('fade-in')
			.parents('.oneBang-top')
			.siblings('.oneBang-bottom')
			.find('.oneBang-bottom-word')
			.addClass('fade-in')
			.siblings('.oneBang-bottom-platform')
			.addClass('fade-in-up-1')
			.find('>p')
			.addClass('opacity-animate');
	}else if(innerH > 480){
		home
			.find('.rotation .oneBang-top .oneBang-top-pics >img')
			.addClass('opacity-animate')
			.parent()
			.siblings('.oneBang-top-word')
			.find('.oneBang-animate')
			.addClass('fade-in')
			.parents('.oneBang-top')
			.siblings('.oneBang-bottom')
			.find('.oneBang-bottom-word')
			.addClass('fade-in')
			.siblings('.oneBang-bottom-platform')
			.addClass('fade-in-up')
			.find('>p')
			.addClass('opacity-animate');
	};
	
	var design = home.find('.design');
	var appInroduce = home.find('.appInroduce');
	var appService = home.find('.appService');
	var news = home.find('.news');
	$(window).scroll(function(event) {
		var wTop = $(window).scrollTop();
		if(wTop > 0 && wTop <= design.offset().top){
			if(innerH <= 480){
				design
					.addClass('fade-in')
					.find('.example-img >img')
					.addClass('opacity-animate')
					.parent()
					.siblings('.example-content')
					.find('h1')
					.addClass('fade-in')
					.siblings('p')
					.addClass('fade-in-up-1');
			}else if(innerH > 480){
				design
					.addClass('fade-in')
					.find('.example-img >img')
					.addClass('opacity-animate')
					.parent()
					.siblings('.example-content')
					.find('h1')
					.addClass('fade-in')
					.siblings('p')
					.addClass('fade-in-up');
			}
		}else if(wTop > design.offset().top && wTop <= appInroduce.offset().top){
			if(innerH <= 480){
				appInroduce
					.addClass('fade-in')
					.find('.description >h1')
					.addClass('fade-in')
					.siblings('p')
					.addClass('fade-in')
					.siblings('a')
					.addClass('fade-in-up')
					.parents('.description')
					.siblings('.series')
					.find('.series-content >h3')
					.addClass('fade-in-up-3')
					.siblings('p')
					.addClass('fade-in');
			}else if(innerH > 480){
				appInroduce
					.addClass('fade-in')
					.find('.description >h1')
					.addClass('fade-in')
					.siblings('p')
					.addClass('fade-in')
					.siblings('a')
					.addClass('fade-in-up-2')
					.parents('.description')
					.siblings('.series')
					.find('.series-content >h3')
					.addClass('fade-in-up-3')
					.siblings('p')
					.addClass('fade-in');
			}
		}else if(wTop > appInroduce.offset().top && wTop <= appService.offset().top){
			if(innerH <= 480){
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
					.find('h1')
					.addClass('fade-in')
					.siblings('.service-item')
					.addClass('fade-in-up-4');
			}else if(innerH >480 && innerH <= 736){
				appService
					.addClass('fade-in')
					.find('.service-pics')
					.find('.pics-img-1')
					.addClass('top-series-1-1')
					.siblings('.pics-img-2')
					.addClass('top-series-2-1')
					.siblings('.pics-img-3')
					.addClass('top-series-3-1')
					.siblings('.pics-img-4')
					.addClass('top-series-4-1')
					.siblings('.pics-img-5')
					.addClass('top-series-5-1')
					.parent()
					.siblings('.service-content')
					.find('h1')
					.addClass('fade-in')
					.siblings('.service-item')
					.addClass('fade-in-up-4');
			}else if(innerH > 736){
				appService
					.addClass('fade-in')
					.find('.service-pics')
					.find('.pics-img-1')
					.addClass('top-series-1-2')
					.siblings('.pics-img-2')
					.addClass('top-series-2-2')
					.siblings('.pics-img-3')
					.addClass('top-series-3-2')
					.siblings('.pics-img-4')
					.addClass('top-series-4-2')
					.siblings('.pics-img-5')
					.addClass('top-series-5-2')
					.parent()
					.siblings('.service-content')
					.find('h1')
					.addClass('fade-in')
					.siblings('.service-item')
					.addClass('fade-in-up-4');
			}
			
		}else if(wTop > appService.offset().top && wTop <= news.offset().top){
			news
				.addClass('fade-in')
				.find('.news-icon >img')
				.addClass('opacity-animate')
				.parent()
				.siblings('.news-content')
				.find('>h1')
				.addClass('fade-in')
				.siblings('.news-groups')
				.addClass('fade-in')
				.siblings('.news-groups-last')
				.addClass('news-animate');
		}
		// console.log($(window).scrollTop());
		// console.log($('.design').offset().top);
		// console.log(design.offset().top);
	});
	
})(jQuery);
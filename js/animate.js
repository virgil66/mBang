;(function($){
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
	$(window).scroll(function(event) {
		var wTop = $(window).scrollTop();
		if(wTop > 0){
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
		}
		// console.log($(window).scrollTop());
	});
	
})(jQuery);
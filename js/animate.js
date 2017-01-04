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
	
	// console.log(innerW)
})(jQuery);
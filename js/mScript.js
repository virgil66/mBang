;(function($){
	/**
	 * menu
	 */
	var $menu = $('.head .head-links');
	var $return = $('.menu .menu-head .menu-head-return');
	var $close = $('.menu .menu-head .menu-head-close');
	var $item = $('.menu .menu-main .menu-item');


	$menu.on('click',function(e){
		e.preventDefault();
		$(this)
			.parents('.head')
			.siblings('nav')
			.addClass('menu-animate');
	});

	$close.on('click',function(e){
		e.preventDefault();
		$(this)
			.siblings('.menu-head-return')
			.removeClass('return-animate return-intial')
			.parents('.menu')
			.removeClass('menu-animate');
	});

	$return.on('click',function(e){
		e.preventDefault();
		$(this)
			.addClass('return-intial')
			.removeClass('return-animate');
	})

	$item.on('click',function(e){
		e.preventDefault();
		var i_flag = $(this).has('i');
		if(i_flag.length == 1){
			$(this)
				.parents('.menu-main')
				.siblings('.menu-head')
				.find('.menu-head-return')
				.addClass('return-animate')
				.removeClass('return-intial');
		}
	})
})(jQuery);
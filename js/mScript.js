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
	});

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
	});


	/**
	 * home
	 */
	var $home = $('.home');
	var $videoBg = $home.find('.design .design-video .design-video-bg');
	var $video = $home.find('.design .design-video >video');

	//点击视频分面，播放视屏
	$videoBg.on('click',function(e){
		e.preventDefault();
		$(this).hide();
		$video[0].play();
	});

	$video.on('click',function(e){
		e.preventDefault();
		$video[0].pause();
		$videoBg.show();
	});

	//appIntroduce
	var $dir = $home.find('.appInroduce .series .series-direction >img');

	var app_flag = -1;
	$dir.on('click',function(e){
		e.preventDefault();
		app_flag++;
		var moveL = $(this).parent().siblings('.series-coat').find('.series-groups').width() /2 + 36;
		if(app_flag == 0){
			$(this)
				.attr({
					src: "images/index_app_btn_left.png"
				})
				.siblings('ul')
				.find('li')
				.eq(1)
				.addClass('on')
				.siblings('li')
				.removeClass('on')
				.parents('.series-direction')
				.siblings('.series-coat')
				.find('.series-groups')
				.stop()
				.animate({
					left:-moveL
				});
		}else if(app_flag == 1){
			$(this)
				.attr({
					src: "images/index_app_btn_right.png"
				})
				.siblings('ul')
				.find('li')
				.eq(0)
				.addClass('on')
				.siblings('li')
				.removeClass('on')
				.parents('.series-direction')
				.siblings('.series-coat')
				.find('.series-groups')
				.stop()
				.animate({
					left:"0"
				});
			app_flag = -1;
		}
	})
})(jQuery);
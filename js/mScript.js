var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availW = screenH;
}else{
	availW = screenW;
}
;(function($){
	/**
	 * menu
	 */
	var $menu = $('.head .head-links');
	var $return = $('.menu .menu-head .menu-head-return');
	var $close = $('.menu .menu-head .menu-head-close');
	var $item = $('.menu .menu-main .menu-item');
	var index_p;

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
			.parent()
			.siblings('.menu-main')
			.removeClass('menu-animate-main')
			.find('.menu-primary >li')
			.removeClass('li-animate-left li-animate-right')
			.find('.menu-item >i')
			.removeClass('fade-in-left-next fade-in-right-next')
			.parents('.menu-main')
			.siblings('.sub-menu')
			.removeClass('menu-animate-sub')
			.find('>div >a.links')
			.removeClass('fade-in-left')
			.siblings('ul')
			.find('>li >a')
			.removeClass('fade-in-left-sub')
			.parents('.menu')
			.removeClass('menu-animate');
	});

	$return.on('click',function(e){
		e.preventDefault();
		var flag = $(this).parent().siblings('.menu-main').find('.menu-primary >li .menu-item >i').hasClass('.fade-in-left-next');
		console.log(flag)
		$(this)
			.addClass('return-intial')
			.removeClass('return-animate')
			.parent()
			.siblings('.sub-menu')
			.removeClass('menu-animate-sub')
			.siblings('.menu-main')
			.removeClass('menu-animate-main')
			.find('.menu-primary >li')
			.eq(index_p)
			.removeClass('li-animate-left')
			.addClass('li-animate-right')
			.find('.menu-item >i')
			.removeClass('fade-in-left-next')
			.addClass('fade-in-right-next')
			.parents('.menu-main')
			.siblings('.sub-menu')
			.find('>div')
			.find('>a')
			.removeClass('fade-in-left')
			.siblings('ul')
			.find('>li >a')
			.removeClass('fade-in-left-sub');
	});

	

	$item.on('click',function(e){
		// e.preventDefault();
		var i_flag = $(this).has('i');
		var index = $(this).parent().index();
		index_p = index;
		var i_index = (index / 2) - 1;

		if(i_flag.length == 1){
			$(this)
				.find('>i')
				.addClass('fade-in-left-next')
				.removeClass('fade-in-right-next')
				.parent()
				.parent()
				.addClass('li-animate-left')
				.removeClass('li-animate-right')
				.parents('.menu-main')
				.addClass('menu-animate-main')
				.siblings('.menu-head')
				.find('.menu-head-return')
				.addClass('return-animate')
				.removeClass('return-intial')
				.parent()
				.siblings('.sub-menu')
				.addClass('menu-animate-sub')
				.find('>div')
				.eq(i_index)
				.show()
				.find('>a')
				.addClass('fade-in-left')
				.siblings('ul')
				.find('>li>a')
				.addClass('fade-in-left-sub')
				.parent()
				.parent()
				.parent()
				.siblings('div')
				.hide()
				.find('>a')
				.removeClass('fade-in-left')
				.siblings('ul')
				.find('>li>a')
				.removeClass('fade-in-left-sub');
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

	// $video.on('click',function(e){
	// 	e.preventDefault();
	// 	$video[0].pause();
	// 	$videoBg.show();
	// });

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
	});

	/**
	 * introduce
	 */
	
	var introduce = $('.introduce');
	var $navList = introduce.find('.intro-content .intro-nav .intro-nav-list');
	var $bangBtn = introduce.find('.module-bang .btn-coat >a');
	var $techBtn = introduce.find('.module-tech .btn-coat >a');

	$bangBtn.on('click',function(e){
		e.preventDefault();
		$('html,body')
			.animate({
				scrollTop: $('.intro-content').offset().top - 50
			},300);
		setTimeout(function(e){
			introduce
				.find('.intro-nav >li')
				.eq(0)
				.add('active')
				.siblings('li')
				.removeClass('active')
				.parent()
				.siblings('.line-groups')
				.find('.crude-line >li')
				.eq(0)
				.addClass('active')
				.siblings('li')
				.removeClass('active')
				.parents('.line-groups')
				.siblings('.intro-main')
				.animate({
					left: 0
				},300);
		},300)
	});

	$techBtn.on('click',function(e){
		e.preventDefault();
		var w = introduce.width();
		$('html,body')
			.animate({
				scrollTop: $('.intro-content').offset().top - 50
			},300);
		setTimeout(function(e){
			introduce
				.find('.intro-nav >li')
				.eq(1)
				.add('active')
				.siblings('li')
				.removeClass('active')
				.parent()
				.siblings('.line-groups')
				.find('.crude-line >li')
				.eq(1)
				.addClass('active')
				.siblings('li')
				.removeClass('active')
				.parents('.line-groups')
				.siblings('.intro-main')
				.animate({
					left: -w
				},300);
		},300)
	});

	$navList.on('click',function(e){
		e.preventDefault();
		var index = $(this).index();
		var w = introduce.width();
		$(this)
			.addClass('active')
			.siblings('li')
			.removeClass('active')
			.parent()
			.siblings('.line-groups')
			.find('.crude-line >li')
			.eq(index)
			.addClass('active')
			.siblings('li')
			.removeClass('active')
			.parents('.line-groups')
			.siblings('.intro-main')
			.animate({
				left: -index * w
			},300);
	});


	/**
	 * app
	 */
	var app = $('.app');
	var $liBtn = app.find('.container .app-body .body-content .container-head-groups >li');
	var liW = $liBtn.width() + availW * 0.01;
	var triangle = app.find('.container .app-body .body-content .triangle');
	var triLeft = ($('body').width() - $('.container-head-groups').width()) / 2;
	
	
	triangle.css({
		marginLeft: triLeft
	})

	$liBtn.on('click',function(e){
		e.preventDefault();
		var index = $(this).index();
		var bW = $(this).parents('.container-head').siblings('.container-main').width();

		$(this)
			.addClass('active')
			.siblings('li')
			.removeClass('active')
			.parent()
			.siblings('.triangle')
			.css({
				marginLeft: index * liW + triLeft
			})
			.parent()
			.siblings('.container-main')
			.find('.container-main-groups')
			.stop().animate({
				left: - index * bW
			},300)
			.find('>li')
			.eq(index)
			.find('>div')
			.addClass('show')
			.parent()
			.siblings('li')
			.find('>div')
			.removeClass('show');
	});

	var $typeLi = app.find('.container .app-body .body-content .container-main .service-detaile-body .type-list .type-list-title >ul >li');

	$typeLi.on('click',function(e){
		e.preventDefault();
		var index_ = $(this).index();
		$(this)
			.parents('.type-list-title')
			.siblings('.type-list-content')
			.find('>li')
			.eq(index_)
			.slideToggle('fast')
			.siblings('li')
			.slideUp("fast")
			.parents('.type-list')
			.siblings('.type-list')
			.find('.type-list-content >li')
			.slideUp("fast");
	});

	/**
	 * app-video
	 */
	var videoBody = app.find('.container .app-body .body-content .container-main .video-teach .video-body');
	var $videoCover = videoBody.find('.video-items .video-cover');
	var $video = videoBody.find('.video-items >video');

	$videoCover.on('click',function(e){
		e.preventDefault();
		var v_index = $(this).parent().index();
		$(this)
			.hide()
			.siblings('video')[0]
			.play();
		$(this)
			.parent()
			.siblings('.video-items')
			.find('>video')[0]
			.pause();

	});

	




















})(jQuery);
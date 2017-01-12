var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availH = screenW;
}else{
	availH = screenH;
}

;(function($){
	window.addEventListener("load",function() {
		  setTimeout(function(){
		    window.scrollTo(0, 0);
		  }, 0);
		});
	
	var advisory = $('.advisory');
	var bodyH = $('body').height();

	advisory
		.find('.container .advisory-head .head-content')
		.find('>h1')
		.addClass('fade-in-down')
		.siblings('p')
		.addClass('fade-in-down')
		.parent()
		.siblings('.head-icon')
		.find('>img')
		.addClass('scale-animate')
		.parents('.advisory-head')
		.siblings('.advisory-body')
		.find('.body-head .body-head-content')
		.addClass('fade-in-up')
		.find('>h1,>p')
		.addClass('fade-in');
	$(window).scroll(function(e){
		var wTop = $(window).scrollTop();
		var aTop = advisory.find('.container .advisory-body .body-content').offset().top;

		if(wTop > (aTop - bodyH)){
			advisory
				.find('.advisory-body .body-content .tencent-qq')
				.addClass('fade-in')
				.find('.tencent-icon')
				.addClass('scale-animate')
				.siblings('h6')
				.addClass('fade-in-down-2')
				.siblings('p')
				.addClass('fade-in-down')
				.parent()
				.siblings('.tencent-wechat')
				.addClass('fade-in')
				.find('.tencent-icon')
				.addClass('scale-animate')
				.siblings('h6')
				.addClass('fade-in-down-2')
				.siblings('p')
				.addClass('fade-in-down');
		}
		// console.log(wTop)
		

	})
})(jQuery);
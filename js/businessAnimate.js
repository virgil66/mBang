var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availH = screenW;
}else{
	availH = screenH;
}

;(function($){
	var business = $('.business');
	var bodyH = $('body').height();

	business
		.find('.container .business-head .head-content')
		.find('>h1')
		.addClass('fade-in-down')
		.siblings('p')
		.addClass('fade-in')
		.parent()
		.siblings('.head-icon')
		.find('>img')
		.addClass('scale-animate')
		.parents('.business-head')
		.siblings('.business-body')
		.find('.body-head .body-head-content')
		.addClass('fade-in-up')
		.find('>h1,>p')
		.addClass('fade-in');
	// console.log($('.product-design').offset().top)
	// console.log($('.store-design').offset().top)
	$(window).scroll(function(e){
		var wTop = $(window).scrollTop();
		var pTop = $('.product-design').offset().top;
		var sTop = $('.store-design').offset().top;
		var eTop = $('.equipments-materials').offset().top;
		var nTop = $('.open-store').offset().top;
		var tTop = $('.body-tail').offset().top + availH * 0.08;
		// console.log(tTop)

		if(wTop > (pTop - bodyH) && wTop < (sTop - bodyH)){
			business
				.find('.container .business-body .body-content')
				.find('.product-design .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}else if(wTop >= (sTop - bodyH) && wTop < (eTop - bodyH)){
			business
				.find('.container .business-body .body-content')
				.find('.store-design .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}else if(wTop >= (eTop - bodyH) && wTop < (nTop - bodyH)){
			business
				.find('.container .business-body .body-content')
				.find('.equipments-materials .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}else if(wTop >= (nTop - bodyH) && wTop < (tTop - bodyH)){
			business
				.find('.container .business-body .body-content')
				.find('.open-store .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}else{
			business
				.find('.container .business-body .body-tail .tail-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}

		// console.log(wTop)
		

	})
})(jQuery);
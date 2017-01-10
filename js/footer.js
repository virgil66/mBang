var screenH = screen.height;
;(function($){
	/**
	 * footer
	 */
	var footer = $("<footer class='footer'>"
					+"<div class='footer-head'>"
						+"<div class='footerlinks'>"
							+"<a href='javascript:;' class='about-us'>关于我们</a>"
							+"<a href='javascript:;' class='company-address'>公司地址</a>"
							+"<a href='javascript:;' class='recurit-talent'>招贤纳士</a>"
						+"</div>"
						+"<div class='footer-icon'>"
							+"<a href='javascript:;'><img src='images/index_footer_wechat.png' alt='wechat' class='footer-wechat' /></a>"
							+"<a href='javascript:;'><img src='images/index_footer_qq.png' alt='qq' class='footer-qq' /></a>"
							+"<a href='javascript:;'><img src='images/index_footer_weibo.png' alt='weibo' class='footer-weibo' /></a>"
						+"</div>"
					+"</div>"
					+"<div class='footer-main'>"
						+"<div class='footer-main-content'>"
							+"<p class='oneBang-links'>友情链接：<a href='javascript:;'>壹杯加科技（上海）有限公司</a></p>"
							+"<p class='oneBang-copy'>&copy;2016 Qualcomm Technologies, Inc, and/or its affiliated companies.</p>"
						+"</div>"
						+"<div class='footer-main-pics'>"
							+"<img src='images/index_icon_logo.png' alt='壹帮帮' />"
						+"</div>"
					+"</div>"
				+"</footer>"
				+"<div class='return-top' id='return-top'>"
					+"<img src='images/return_top.png' alt='返回顶部' />"
				+"</div>");
	$('body').append(footer);

	var $returnTop = $('.return-top');

	$(window).scroll(function(){
		var wTop = $(window).scrollTop();
		if(wTop > screenH){
			$returnTop
				.addClass('return-top-show')
				.removeClass('return-top-hide');
		}else{
			$returnTop
				.addClass('return-top-hide')
				.removeClass('return-top-show');
		}
	});

	$returnTop.on('click',function(e){
		e.preventDefault();
		$('html,body')
			.animate({
				scrollTop: 0
			},300);
	});
	
	
	// console.log(screenH)
})(jQuery);





;(function($){
	var random = parseInt(Math.random() * (9999 - 999) + 999);

	myRefresh();

	function myRefresh(){
		var url = window.location.pathname;
		url = url + "#v=" + random;
		window.location.href = url;
	}
})(jQuery);
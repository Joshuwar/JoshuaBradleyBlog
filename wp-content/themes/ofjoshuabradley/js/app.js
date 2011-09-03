$(document).ready(function(){
	// Detect webkit browsers to alter letterspacing in CSS
	
	if ($.browser.webkit) {
		$('body').addClass('webkit');
	}
	
	$.localScroll();
	
	
	
	
});
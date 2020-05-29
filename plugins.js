$(document).ready(function(){
	
	"use strict";
	new WOW().init();

 
    $(".navbar a").click(function(){

    let aHref =$(this).attr("href");
    
    let profileOffset = $(aHref).offset().top; 
    $("body,html").animate({scrollTop:profileOffset} ,1000)

})
    
	$(window).scroll(function(){
		var h =$(window).scrollTop();
		if (h>=120)
			{
				$(".navbar-inverse").css({
					backgroundColor:'white'
				});
				$(".navbar-brand").css({
					color:'#f05f40'
				});
                $("#logo span").css({color:'#fff'})
			}
		else 
			{
				$(".navbar-inverse").css({
					backgroundColor:'transparent'
				});
				$(".navbar-brand").css({
					color:'white'
				});
			}
	});
	
});
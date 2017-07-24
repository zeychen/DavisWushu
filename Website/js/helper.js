// Webpage text helper
var HTMLaboutText = '<p class="description-text"></p>';
var HTMLpracticeText = '<p class="description-text"></p>';
var HTMLmembersText = '<p class="description-text"></p>';
var HTMLofficersText = '<p class="description-text"></p>';
var HTMLcoachesText = '<p class="description-text"></p>';



// on scroll, horizontal center nav bar and have it fixed on screen with primary bkgd color


// translate video so only bottom 100px is showing
// transition video to solid

$(window).scroll(function(){
	if($(this).scrollTop() > 0){
		$('.tint').css('position','fixed');
		$('.tint').animate({
			backgroundColor: '#032e62'
		}, 2500);
		$('.video-foreground, .tint').addClass('anim');
		$('.welcome').hide(100);

		$('.header').animate({
			'height': '12vh',
		}, {
	    	'duration': 2000,
	    	'specialEasing': {
	      		height: 'easeOutQuad'
	    	}
		});
	}
	
});



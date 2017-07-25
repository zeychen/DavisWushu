// Webpage text helper
var HTMLaboutText = '<p class="description-text"></p>';
var HTMLpracticeText = '<p class="description-text"></p>';
var HTMLmembersText = '<p class="description-text"></p>';
var HTMLofficersText = '<p class="description-text"></p>';
var HTMLcoachesText = '<p class="description-text"></p>';


$('.upper-box').hide();
$('.lower-box').hide();
$('.about-text').hide();
$('.about-bkgd h1').hide();

// header animation
$(window).scroll(function(){
	if($(this).scrollTop() > 0){
		$('.video-foreground, .tint').addClass('anim');
		$('.welcome').hide();

		$('.header').animate({
			'height': '10vh',
		}, {
	    	'duration': 1000,
	    	'specialEasing': {
	      		height: 'easeOutQuad'
	    	}
		});
		$('.tint').css('position','fixed');
		$('.tint').animate({
			backgroundColor: '#023b60'
		}, 2500, 'linear', function(){
			$('.upper-box').slideDown(1000, function(){
				$('.about-text').show("slide", { 
					direction: "left" 
				}, 1000, function(){
					$('.upper-box').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%)');
				});
				$('#endurance').fadeIn(1000, function(){
					$('#flexibility').fadeIn(1000, function(){
						$('#strength').fadeIn(1000).delay(200);
					}).delay(150);
				}).delay(100);
			});
			$('.lower-box').show("slide", { 
					direction: "right" 
				}, 1000, function(){
					$('.lower-box').css('clip-path', 'polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)');
				});
		});
	}
});



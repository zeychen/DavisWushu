$(document).ready(function(){
	var ofHeight = $(window).height()*(1/4);
	// var tfHeight = $(window).height()*(3/4);

	/* =============== Page Controller =============== */
	var leaveController = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	var centerController = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onCenter'
		}
	});

	var enterController = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter"
		}
	});


	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#collaborate-title, #gallery-title', 1, {marginLeft: '10vw', delay: 0.5})
		// .addIndicators({name: "title"})
		.addTo(leaveController);

	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#collaborate-text, #gallery-text', 1, {marginLeft: '70vw', delay: 0.5})
		// .addIndicators({name: "lower box"})
		.addTo(leaveController);
	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#collaborate-upper-box-blue, #gallery-upper-box-blue', 1, {y: "0%", x: "0%", ease: Linear.easeNone})
		// .addIndicators({name: "upper blue"})
		.addTo(leaveController);
	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#collaborate-upper-box, #gallery-upper-box', 1, {y: "0%", x: "0%", ease: Linear.easeNone})
		// .addIndicators({name: "section box"})
		.addTo(leaveController);
});
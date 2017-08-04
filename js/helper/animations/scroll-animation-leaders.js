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
		.setTween('#officer-title', 1, {marginLeft: '10vw'})
		// .addIndicators({name: "title"})
		.addTo(leaveController);

	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#officer-lower-box', 1, {y: "-50%", ease: Linear.easeNone})
		// .addIndicators({name: "lower box"})
		.addTo(leaveController);
	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#officer-upper-box-blue', 1, {y: "-80%", ease: Linear.easeNone})
		// .addIndicators({name: "upper blue"})
		.addTo(leaveController);
	new ScrollMagic.Scene({triggerElement: '#oheader'})
		.setTween('#officer-section-box', 1, {y: "-40%", ease: Linear.easeNone})
		// .addIndicators({name: "section box"})
		.addTo(leaveController);


	new ScrollMagic.Scene({triggerElement: '#officer-text'})
		.setTween('#coach-title', 1, {marginLeft: '80vw'})
		// .addIndicators({name: "5"})
		.addTo(leaveController);

	new ScrollMagic.Scene({triggerElement: '#officer-section-box'})
		.setTween('#coach-section-box', 1, {marginLeft: '0vw'})
		// .addIndicators({name: "5"})
		.addTo(leaveController);
});
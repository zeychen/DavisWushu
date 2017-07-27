
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

	/* =============== Parallax =============== */
	// var parallax = new ScrollMagic.Scene({triggerElement: "#about-section"})
	// 	.setTween("#about-bkgd-box", {y: "80%", ease: Linear.easeNone})
	// 	// .addIndicators({name: "parallax 1"})
	// 	.addTo(centerController);



	var parallax2 = new ScrollMagic.Scene({triggerElement: "#practice-section"})
		.setTween("#practice-box", 1, {y: "30%", ease: Power2.easeInOut, opacity: 1})
		// .addIndicators({name: "parallax 2"})
		.addTo(centerController);

	var parallax3 = new ScrollMagic.Scene({triggerElement: "#practice-section"})
		.setTween("#practice-info", {y: "60%", ease: Linear.easeNone, opacity: 1})
		// .addIndicators({name: "parallax 3"})
		.addTo(centerController);
		
	var parallax4 = new ScrollMagic.Scene({triggerElement: "#practice-section"})
		.setTween("#practice-lower-box", {y: "80%", ease: Linear.easeNone})
		// .addIndicators({name: "parallax 4"})
		.addTo(centerController);

	// var parallax5 = new ScrollMagic.Scene({triggerElement: "#member-box"})
	// 	.setTween("#practice-section", {y: "50%", ease: Linear.easeNone})
	// 	// .addIndicators({name: "parallax 5"})
	// 	.addTo(leaveController);

	// var memberBkgd = new ScrollMagic.Scene({triggerElement: "#member-box", duration: 400})
	// 	.setTween("#instabkgd",  {y: "50%", ease: Linear.easeNone})
	// 	.addIndicators({name: "member"})
	// 	.addTo(leaveController);

	// var parallax6 = new ScrollMagic.Scene({triggerElement: '#trigger2'})
	// 	.setTween('#social-section', {y: "65%", ease: Linear.easeNone})
	// 	// .addIndicators({name: "parallax 6"})
	// 	.addTo(centerController);

	var parallax7 = new ScrollMagic.Scene({triggerElement: '#trigger2'})
		.setTween('#contact-upper-box', {y: "100%", ease: Linear.easeNone})
		// .addIndicators({name: "parallax 7"})
		.addTo(centerController);

	// var parallax8 = new ScrollMagic.Scene({triggerElement: '#contact-section', duration: '10'})
	// 	.setTween('#footer', {y: "80%", ease: Linear.easeNone})
	// 	// .addIndicators({name: "parallax 8"})
	// 	.addTo(centerController);

	/* =============== Animation =============== */
	// var fiveStance = TweenMax.to();
	// var parallax6 = new ScrollMagic.Scene({triggerElement: "#practice-info"})
	// 	.setTween(fiveStance)
	// 	.addIndicators({name: "5 stance"})
	// 	.addTo(centerController);

	/* =============== Header =============== */
	var navBar = new ScrollMagic.Scene({offset: 100})
		.setPin('#nav')
		.setTween('#nav', 0.1, {backgroundColor: '#01243C'})
		// .addIndicators({name: "1"})
		.addTo(leaveController);

	var navItem = new ScrollMagic.Scene({offset: 100})
		.setTween('.nav-item', 0.1, {color: '#CA9716'})
		// .addIndicators({name: "1"})
		.addTo(leaveController);

	var blurElement = {a:0};
	var welcomeVid = new ScrollMagic.Scene({offset: 50})
		.setTween(blurElement, 0.5, {a:5, onUpdate:applyBlur})
		// .addIndicators({name: "3"})
		.addTo(leaveController);

	var welcomeText = new ScrollMagic.Scene({offset: 50})
		.setTween('#welcome', 1, {opacity: 0})
		// .addIndicators({name: "2"})
		.addTo(leaveController);

	/* =============== About Section =============== */
	var aboutBkgd = new ScrollMagic.Scene({triggerElement: "#about-section"})
		.setTween(".about-bkgd",2, {height: '700px'})
		// .addIndicators({name: "parallax 1"})
		.addTo(centerController);

	var aboutLowerBox = new ScrollMagic.Scene({triggerElement: "#about-section"})
		.setTween("#about-lower-box", {y: "-150px", ease: Linear.easeNone})
		// .addIndicators({name: "parallax 1"})
		.addTo(centerController);

	var aboutSection = new ScrollMagic.Scene({offset: ofHeight})
		.setTween('#about-text', 1, {marginLeft: '10vw'})
		// .addIndicators({name: "4"})
		.addTo(leaveController);

	// var aboutBkgdTween = new TweenMax.to('#endurance', 1, {opacity: '0.5', y: '30px'});

	var endurance = new ScrollMagic.Scene({triggerElement: '#about-section'})
		.setTween('#endurance', 1, {opacity: '1', y: '30px', delay: 0.5})
		// .addIndicators({name: "about text"})
		.addTo(centerController);
	var flexibility = new ScrollMagic.Scene({triggerElement: '#about-section'})
		.setTween('#flexibility', 1, {opacity: '1', delay: 1.5})
		// .addIndicators({name: "about text"})
		.addTo(centerController);
	var strength = new ScrollMagic.Scene({triggerElement: '#about-section'})
		.setTween('#strength', 1, {opacity: '1', y: '-30px', delay: 2.5})
		// .addIndicators({name: "about text"})
		.addTo(centerController);

	/* =============== Practice Section =============== */
	var practiceSection = new ScrollMagic.Scene({triggerElement: '#practice-section'})
		.setTween('#practice-title', 1, {marginLeft: '10vw'})
		// .addIndicators({name: "5"})
		.addTo(centerController);



	/* =============== Social Section =============== */
	var socialLink = new ScrollMagic.Scene({triggerElement: '#trigger2'})
		.setTween('.social-link', 1, {opacity: 1, y: '20px'})
		// .addIndicators({name: "social text"})
		.addTo(centerController);

	var socialText1 = new ScrollMagic.Scene({triggerElement: '#trigger2'})
		.setTween('#social1', 0.5, {y: '-20px'})
		// .addIndicators({name: "social text"})
		.addTo(centerController);

	var socialText2 = new ScrollMagic.Scene({triggerElement: '#trigger2'})
		.setTween('#social2', 0.5, {y: '20px'})
		// .addIndicators({name: "social text"})
		.addTo(centerController);

	var socialText3 = new ScrollMagic.Scene({triggerElement: '#trigger2'})
		.setTween('#social3', 0.5, {y: '50px'})
		// .addIndicators({name: "social text"})
		.addTo(centerController);

	var socialText4 = new ScrollMagic.Scene({triggerElement: '#contact-section'})
		.setTween('#social4', 0.5, {marginLeft: '10vw'})
		// .addIndicators({name: "social text"})
		.addTo(centerController);

	/* =============== Contact Section =============== */
	var contactSection = new ScrollMagic.Scene({triggerElement: '#practice-lower-box'})
		.setTween('#contact-text', 1, {marginLeft: '60vw', y: '-68px'})
		// .addIndicators({name: "contact text"})
		.addTo(leaveController);

	var emailText = new ScrollMagic.Scene({triggerElement: '#practice-lower-box'})
		.setTween('#contactText3', 1.5, {opacity: 1, delay: 1})
		// .addIndicators({name: "contact text"})
		.addTo(leaveController);

	/* =============== Helper Functions =============== */
	// change controller to scroll instead of jump
	leaveController.scrollTo(function (newpos) {
		TweenMax.to(window, 3, {scrollTo: {y: newpos}, ease: Power2.easeOut});
	});

	//  bind scroll to anchor links
	$(document).on('click', "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// var idPos = $(this).scrollTop()+52;
			// console.log($(id).length);

			// trigger scroll
			leaveController.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});

	// blur function
	function applyBlur(){
		TweenMax.set(['#video-foreground'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
	}
});
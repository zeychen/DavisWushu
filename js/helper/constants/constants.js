// JSON used to organize webpage constants

var general = {
	"socials": [
		{
			"text": "",
			"link": ""
		}
	]
}

var constants = {
	"gallery": [
		{
			"galleryHeader": "Gallery",
			"galleryText": "Currently Under Construction<br>Check Back Soon",
		}
	],
	"leaders": [
		{
			"officersHeader": "Officers",
			"officersText": "Each officer is in charge of a vital aspect of Davis Wushu to achieve early club goals. Without their leadership, we would be like a herd of lost alpacas.",
			"officersBox": "Meet the brains of our family",
			"coachesHeader": "Coaches",
			"coachesBox": "Meet the backbones of our family",
		}
	],
	"collaborate": [
		{
			"collabHeader": "Collaborate",
			"collabText": "Need someone for your next event? Keep us in mind",
			"instructLine1": "Send Us A Request",
			"instructLine2": "Let us know about your event<br>be sure to include",
			"instructLine3": "the purpose<br>location<br><span style='font-size: .6em;'>&</span><br>date",
			"instructLine4": "We will get back to you as soon as possible about our availability",
		}
	]
};

var home = {
	"header": [{
		"h1": "welcome",
		"h2": "to",
		"h3": "davis",
		"h4": "wushu",
		"h5": "UC Davis Chinese Martial Arts Club",
	}],

	"about": [{
		"aboutText": "We are a Chinese martial arts club formed by UC Davis students in 2000 that focuses on",
		"endurance": "Endurance",
		"flexibility": "Flexibility",
		"strength": "Strength",
	}],

	"membersBox": [
		{ 
			"header": "Members",
			"mtext": "Our club would not be possible without our wonderful members who put in valuable time and effort to make Davis Wushu a success.",
			"linkText": "Meet The Members",
			"link": "gallery.html",
		 },
		{ 
			"header": "Officers",
			"mtext": "Our officers are dedicated students who make sure Davis Wushu thrives.",
			"linkText": "Meet The Officers",
			"link": "leaders.html#officers",
		},
		{ 
			"header": "Coaches",
			"mtext": "Our coaches are well trained Wushu practitioners who take time out of their busy student lives to teach others members who are interested in learning or improving their skills.",
			"linkText": "Meet The Coaches",
			"link": "leaders.html#coaches",
		}
	],

	"practice": [
		{
			"practiceHeader": "Practice",
			"practiceText": "Our club trains practitioners of all skill levels to perform demonstrations for local events and compete in the taolu (forms) portion of annual tournaments, such as Davis Dance Revolution, the Chinese Martial Arts Tournament (CMAT), and the Collegiate Wushu Championships.",

			"practiceText1": "Practice Makes",
			"practiceText2": "Perfect",
			"practiceText3": "UC Davis Pavilion",
			"practiceText4": "Mon & Wed",
			"practiceText5": "6-8PM",
			"practiceText6": "6-8PM",
		}
	],

	"social": [{
		"social1": "We love to train",
		"social2": "but we also love to have fun",
		"social3": "Join Our FB Group",
		"link": "https://www.facebook.com/groups/252321617687/",
	}],

	"contact": [{
		"social": "Follow Us On Instagram",
		"link1": "https://www.instagram.com/daviswushu/",
		"contactText1":"Have More Questions?",
		"contactText2":"Whether you want us at your next event or simply to say hi",
		"contactText3":"We are a quick email away",
		"link2": "DavisWushu@gmail.com"
	}]
};

// add constants
constants.display = function() {
	for (text in constants.about){
		$("#about-text:last").append(constants.about[text].aboutText);
		$("#endurance:last").append(constants.about[text].endurance);
		$("#flexibility:last").append(constants.about[text].flexibility);
		$("#strength:last").append(constants.about[text].strength);
	};

	for (text in constants.members){
		$("#member-box").append(HTMLmembersStart);
		var memberHeader = HTMLmemberHeader.replace('%data%', constants.members[text].membersHeader);
		$(".memberHeader:last").append(memberHeader);

		$("#about-text:last").append(constants.about[text].aboutText);
		$("#endurance:last").append(constants.about[text].endurance);
		$("#flexibility:last").append(constants.about[text].flexibility);
		$("#strength:last").append(constants.about[text].strength);
	};
	// gallery page
	for (text in constants.gallery){
		$("#gallery-title:last").append(constants.gallery[text].galleryHeader);
		$("#gallery-text:last").append(constants.gallery[text].galleryText);
	};

	// leader page
	for (text in constants.leaders){
		$("#officer-title:last").append(constants.leaders[text].officersHeader);
		$("#officer-text:last").append(constants.leaders[text].officersText);
		$("#officer-box-text:last").append(constants.leaders[text].officersBox);
		$("#coach-title:last").append(constants.leaders[text].coachesHeader);
		$("#coaches-box-text:last").append(constants.leaders[text].coachesBox);
	};

	// collaborate page
	for (text in constants.collaborate){
		$("#collaborate-title:last").append(constants.collaborate[text].collabHeader);
		$("#collaborate-text:last").append(constants.collaborate[text].collabText);
		$("#ins1:last").append(constants.collaborate[text].instructLine1);
		$("#ins2:last").append(constants.collaborate[text].instructLine2);
		$("#ins3:last").append(constants.collaborate[text].instructLine3);
		$("#ins4:last").append(constants.collaborate[text].instructLine4);
	};


};


home.display = function() {
	for (text in home.header){
		var header1 = HTMLheaderText1.replace('%num%', '1');
		headerText1 = header1.replace('%text%', home.header[text].h1);
		$("#welcome:last").append(headerText1);
		
		var header2 = HTMLheaderText2.replace('%num%', '2');
		headerText2 = header2.replace('%text%', home.header[text].h2);
		$("#welcome:last").append(headerText2);
		var header3 = HTMLheaderText1.replace('%num%', '3');
		headerText3 = header3.replace('%text%', home.header[text].h3);
		$("#welcome:last").append(headerText3);
		var header4 = HTMLheaderText1.replace('%num%', '4');
		headerText4 = header4.replace('%text%', home.header[text].h4);
		$("#welcome:last").append(headerText4);
		var header5 = HTMLheaderText1.replace('%num%', '5');
		headerText5 = header5.replace('%text%', home.header[text].h5);
		$("#welcome:last").append(headerText5);
	};

	for (text in home.membersBox){
		$("#member-box").append(HTMLmembersStart);
		var header = HTMLmemberHeader.replace('%data%', home.membersBox[text].header);
		$(".memberContainer:last").append(header);
		var mtext = HTMLmemberText.replace('%data%', home.membersBox[text].mtext);
		$(".memberContainer:last").append(mtext);
		var linkText = HTMLmemberLink.replace('%text%', home.membersBox[text].linkText);
		link = linkText.replace('%link%', home.membersBox[text].link)
		$(".memberContainer:last").append(link);
	};

	for (text in home.about){
		$("#about-text:last").append(home.about[text].aboutText);
		$("#endurance:last").append(home.about[text].endurance);

		$("#flexibility:last").append(home.about[text].flexibility);
		$("#strength:last").append(home.about[text].strength);
		
	};

	for (text in home.practice){
		$("#practice-title:last").append(home.practice[text].practiceHeader);
		$("#practice-text:last").append(home.practice[text].practiceText);

		$("#practiceText1:last").append(home.practice[text].practiceText1);
		$("#practiceText2:last").append(home.practice[text].practiceText2);
		$("#practiceText3:last").append(home.practice[text].practiceText3);
		$("#practiceText4:last").append(home.practice[text].practiceText4);
		$("#practiceText5:last").append(home.practice[text].practiceText5);
		
	};

	for (text in home.social){
		$("#social1:last").append(home.social[text].social1);
		$("#social2:last").append(home.social[text].social2);

		var social = HTMLfbLink.replace('%text%', home.social[text].social3);
		var fbLink = social.replace('%link%', home.social[text].link);
		$("#fb-link:last").append(fbLink);
	};

	for (text in home.contact){
		$("#contactText1:last").append(home.social[text].social1);
		$("#contactText2:last").append(home.social[text].social2);

		var social1 = HTMLemailLink.replace('%text%', home.contact[text].contactText3);
		var emailLink = social1.replace('%link%', home.contact[text].link2);
		$("#contactText3:last").append(emailLink);

		var social2 = HTMLinstagramLink.replace('%text%', home.contact[text].social);
		var instaLink = social2.replace('%link%', home.contact[text].link1);
		$("#social-text:last").append(instaLink);

	};
};

constants.display();
home.display();
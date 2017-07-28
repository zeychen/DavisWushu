// JSON used to organize leader bios

/* *******bio format *********
add, take out, or change bios according to following format

{
	"name": "",
	"title": "",
	"intro": "introduction",
	"fun": " fun fact",
	"photo": "url link"
}
*/
var constants = {
	"home": [
		{
			"name": "Stacey",
			"title": "president",
			"intro": "Hi, my name is Stacey and I'm the President of Davis Wushu.",
			"fun": "I love alpacas.",
			"photo": "president"
		},
		{
			"name": "Justin",
			"title": "Vice president",
			"intro": "Hi, my name is Justin and I'm the Vice President of Davis Wushu.",
			"fun": "I love the 80s.",
			"photo": "vp"
		},
		{
			"name": "Jenny",
			"title": "Treasurer",
			"intro": "Hi, my name is Jenny and I'm the Treasurer of Davis Wushu.",
			"fun": "I love kpop.",
			"photo": "treasurer"
		},
		{
			"name": "Austin",
			"title": "Secretary",
			"intro": "Hi, my name is Austin and I'm the Secretary of Davis Wushu.",
			"fun": "I love my cello.",
			"photo": "secretary"
		},
	],
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

// Add bio section to website
constants.display = function() {

	for (text in constants.gallery){
		$("#gallery-title:last").append(constants.gallery[text].galleryHeader);
		$("#gallery-text:last").append(constants.gallery[text].galleryText);
	};

	for (text in constants.leaders){
		$("#officer-title:last").append(constants.leaders[text].officersHeader);
		$("#officer-text:last").append(constants.leaders[text].officersText);
		$("#officer-box-text:last").append(constants.leaders[text].officersBox);
		$("#coach-title:last").append(constants.leaders[text].coachesHeader);
		$("#coaches-box-text:last").append(constants.leaders[text].coachesBox);
	};

	for (text in constants.collaborate){
		$("#collaborate-title:last").append(constants.collaborate[text].collabHeader);
		$("#collaborate-text:last").append(constants.collaborate[text].collabText);
		$("#ins1:last").append(constants.collaborate[text].instructLine1);
		$("#ins2:last").append(constants.collaborate[text].instructLine2);
		$("#ins3:last").append(constants.collaborate[text].instructLine3);
		$("#ins4:last").append(constants.collaborate[text].instructLine4);
	};


};
constants.display();

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
			"name": "Albert",
			"title": "Head Coach",
			"intro": "Hi, my name is Albert and I'm the Head Coach of Davis Wushu.",
			"fun": "I love Wushu.",
			"photo": "1"
		},
		{
			"name": "Henderson",
			"title": "Coach",
			"intro": "Hi, my name is Henderson and I'm the Beginners Coach of Davis Wushu.",
			"fun": "I love Wushu.",
			"photo": "2"
		}
	]
};

// Add bio section to website
constants.display = function() {

	for (text in constants.leaders){
		$("#officer-title:last").append(constants.leaders[text].officersHeader);
		$("#officer-text:last").append(constants.leaders[text].officersText);
		$("#officer-box-text:last").append(constants.leaders[text].officersBox);
		$("#coach-title:last").append(constants.leaders[text].coachesHeader);
		$("#coaches-box-text:last").append(constants.leaders[text].coachesBox);
	};

	for (text in constants.gallery){
		$("#gallery-title:last").append(constants.gallery[text].galleryHeader);
		$("#gallery-text:last").append(constants.gallery[text].galleryText);
	};

	
};
constants.display();

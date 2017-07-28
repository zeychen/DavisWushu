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
var bios = {
	"officers": [
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
	"coaches": [
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
bios.display = function() {

	for (officers in bios.officers){
		$("#officers").append(HTMLleadersStart);
		var formattedImg = HTMLleadersPhoto.replace("%title%", "officers");
		var formattedPhoto = formattedImg.replace("%img%", bios.officers[officers].photo);
		$(".leaders:last").append(formattedPhoto);
		var formattedName = HTMLleadersName.replace("%data%", bios.officers[officers].name);
		$(".leaders:last").append(formattedName);
		var formattedTitle = HTMLleadersTitle.replace("%data%", bios.officers[officers].title);
		$(".leaders:last").append(formattedTitle);
	};

	for (coaches in bios.coaches){
		$("#coaches").append(HTMLleadersStart);
		var formattedImg = HTMLleadersPhoto.replace("%title%", "coaches");
		var formattedPhoto = formattedImg.replace("%img%", bios.coaches[coaches].photo);
		$(".leaders:last").append(formattedPhoto);
		var formattedName = HTMLleadersName.replace("%data%", bios.coaches[coaches].name);
		$(".leaders:last").append(formattedName);
		var formattedTitle = HTMLleadersTitle.replace("%data%", bios.coaches[coaches].title);
		$(".leaders:last").append(formattedTitle);
	}
};
bios.display();

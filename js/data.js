const MASTER_DB = {
	
	CONFIG: {
		MAX_INPUT: 100,						// max length of typing
		MAX_ATTEMPT_ANS: 2,					// attempts for showing answer button
		INPUT_FILTER_STATUS: false,
		INPUT_FILTER: [84, 116, 70, 102],	//T AND F
		
		INPUT_TRANSFORM: 'default',		// uppercase | lowercase | default
		INPUT_TEXT_CODE: '[<>]',

		FEEDBACK_TIME: 2500
	},
	
	TITLE: 'Match the following.',
	INSTRUCTION: 'Match the expressions.',
	QUESTIONS: [
		{
			feedback: {
				positive: '<img src="img/correct_Img.gif" alt="" />',
				negative: '<img src="img/incorrect_Img.gif" alt="" />'
			}
		}
	],
	
	ANSWERS: {
		INSTRUCTION: 'Answers'
	}
}

var tempJsonObj =
{
	"LeftHeading"  : "Column A",
	"RightHeading" : "Column B",
     "Left": [
      	"<img src='img/1.png'>",
		"<img src='img/2.png'>",
        "<img src='img/3.png'>",
		"<img src='img/4.png'>"
	   
    ],
    "Right": [
		"<img src='img/5.png'>",
		"<img src='img/6.png'>",
        "<img src='img/7.png'>",
		"<img src='img/8.png'>"

	    
		
    ],
    "Answer": [
        "l1_r2",
        "l2_r1",
        "l3_r4",
        "l4_r3"
		
       
    ],
    "text": "Click on an option in Column A and then click on the correct answer in Column B.<br /> <br /> After completing, click on Submit.<br /> <br />To check answer, click on Show Answer."
}
var button_text={
	"1" : "Submit",
	"2" : "Show Answers"
}
var language_code={
 "1":"0"//0 for english and 1 for hindi
}
var information_text={
	"1": "Information",
	"2": "Audio"
}
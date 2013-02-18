//this script is very short and straight-forward but it works... most of the time.

//full version. 
var id = 711055;
var start, cur;
for(var i=49; i<150; i++) {
	input = (i*1.0)/10;
	$(".studentanswerfield", $("#question_" + id))[0].value = input;
	checkAnswers(id);
	var  msecs = 1000;
	console.log(input); 	start = new Date().getTime(); 	cur = start; 	while(cur - start < msecs) 	{ 		cur = new Date().getTime(); 	} 
}

//short version
var id=711056;var start,cur;for(var i=390;i<400;i++){input=(i*1.0)/10;$(".studentanswerfield",$("#question_"+id))[0].value=input;checkAnswers(id);var msecs=1000;console.log(input);start=new Date().getTime();cur=start;while(cur-start<msecs)cur=new Date().getTime();}

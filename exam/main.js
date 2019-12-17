function check()
{
	var question1=document.exam.question1.value;
	var question2=document.exam.question2.value;
	var question3=document.exam.question3.value;
	var correct=0;
	if(question1=="london")
	{
		correct++;
	}
	if(question2=="Washington")
	{
		correct++;
	}
	if(question3=="Cairo")
	{
		correct++;
	}
var messages=["Excellent jop !","That is just good !","you really need to do better !"];
var pictures=["img/win.gif","img/good.gif","img/fail.gif"];
var range;
if(correct<1)
{
	range=2;
}
if(correct >0 && correct<3)
{
	range=1;
}
if(correct>2)
{
	range=0;
}
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("message").innerHTML=messages[range];
	document.getElementById("number_correct").innerHTML= "You got "+correct+" correct."; 
	document.getElementById("picture").src=pictures[range];
}

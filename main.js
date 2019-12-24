function startTimer() {
  var tobj = document.getElementById("timespent")
  var t = "0:00";
  var s = 00;
  var d = new Date();
  document.getElementById("date").innerHTML=d;
  var timeint = setInterval(function () {
    s += 1;
    d.setMinutes("0");
    d.setSeconds(s);
    min = d.getMinutes();
    sec = d.getSeconds();
    if (sec < 10) sec = "0" + sec;
    document.getElementById("timespent").value = min + ":" + sec;
  }, 1000);
  
  tobj.value = t;
	console.timeEnd("0:30");
}
  setTimeout(function(){ window.alert("The Time is out"); }, 20000);
if (window.addEventListener) {              
  window.addEventListener("load", startTimer);
} else if (window.attachEvent) {                 
  window.attachEvent("onload", startTimer);
}
function check()
{
	var question1=document.exam.question1.value;
	var question2=document.exam.question2.value;
	var question3=document.exam.question3.value;
	var question4=document.exam.question4.value;
	var question5=document.exam.question5.value;
	var question6=document.exam.question6.value;
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
	if(question4=="Paris")
	{
		correct++;
	}
	if(question5=="Madrid")
	{
		correct++;
	}
	if(question6=="Berlin")
	{
		correct++;
	}
var messages=["Excellent jop !","That is just good !","you really need to do better !"];
var pictures=["Image/win.gif","Image/good.gif","Image/fail.gif"];
var range;
if(correct<1)
{
	range=2;
}
if(correct >0 && correct<6)
{
	range=1;
}
if(correct>5)
{
	range=0;
}
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("message").innerHTML=messages[range];
	document.getElementById("number_correct").innerHTML= "You got "+correct+" correct."; 
	document.getElementById("picture").src=pictures[range];
	document.getElementById("timespent").innerHTML="Your time is 20 seconds.";
}

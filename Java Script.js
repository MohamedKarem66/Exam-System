function go(src)
{
	 window.location =src;
}
function dis(val)
{
document.getElementById("textef").value+=val;
}
function equal()
{
 var x=document.getElementById("textef").value;
 if(x=="")
 {
  window.alert("**plese enter number to solv it");
 }
 else
 {
 var y=eval(x);
 document.getElementById("textef").value= y;
 }
}
function ac()
{
document.getElementById("textef").value="";
}
function c()
{
var x;
x=document.getElementById("textef").value;
document.getElementById("textef").value=x.substring(0,x.length-1);
}
function math (id)
{
var y=document.getElementById("textef").value;
if (id=="sin")
{
document.getElementById("textef").value=Math.sin(y);
}
else if(id=="cos")
{
document.getElementById("textef").value=Math.cos(y);
}
else if (id=="tan")
{
document.getElementById("textef").value=Math.tan(y);
}
else if(id=="bin")
{
var x=parseInt(y);
document.getElementById("textef").value=x.toString(2);
}
else if(id=="oct")
{
var j=parseInt(y);
document.getElementById("textef").value=j.toString(8);
}
else if(id=="hex")
{
var m=parseInt(y);
document.getElementById("textef").value=m.toString(16);
}
else if(id=="dec")
{
document.getElementById("textef").value=parseInt(y,16);
}
else if(id=="pp")
{
document.getElementById("textef").value=Math.pow(y,2);
}
}
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
var pictures=["Image/win.gif","Image/good.gif","Image/fail.gif"];
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
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



function maseg()
{
	var a=document.getElementById("firstname").value;
	var b=document.getElementById("lastname").value;
	

localStorage.setItem("firstname",a);
localStorage.setItem("lastname",b);


var p=document.getElementById("mmm").value;
localStorage.setItem("mmm",p);

var counter;
if(a=="")
{
	counter=0;
}
else
{
	counter=counter+1;
}
	

}

function getmasge()
{
	document.getElementById("nb").innerHTML=localStorage.getItem("counter");
	document.getElementById("jj").innerHTML=localStorage.getItem("firstname");
	document.getElementById("lname").innerHTML=localStorage.getItem("lastname");
	document.getElementById("mm").innerHTML=localStorage.getItem("mmm");
}



function s()
{
var x=document.getElementById("idsd").value;

localStorage.setItem("idsd",x);

}

function get()
{
document.getElementById("idfff").innerHTML=localStorage.getItem("idsd");
}

/* exam java */

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
	console.timeEnd("1:00");
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
var pictures=["img/win.gif","img/good.gif","img/fail.gif"];
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
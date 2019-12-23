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


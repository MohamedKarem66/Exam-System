function go(src)
{
	 window.location =src;
}






function dis(val)
{

document.getElementById("text").value+=val;
 
}

function equal()
{
 var x=document.getElementById("text").value;
 if(x=="")
 {
  window.alert("**plese enter number to solv it");
 }
 else
 {
 var y=eval(x);
 document.getElementById("text").value= y;
 }
 
}

function ac()
{

document.getElementById("text").value="";

}

function c()
{
var x;
x=document.getElementById("text").value;
document.getElementById("text").value=x.substring(0,x.length-1);
}


function math (id)
{
var y=document.getElementById("text").value;
if (id=="sin")
{
document.getElementById("text").value=Math.sin(y);
}
else if(id=="cos")
{
document.getElementById("text").value=Math.cos(y);
}
else if (id=="tan")
{
document.getElementById("text").value=Math.tan(y);
}
else if(id=="bin")
{
var x=parseInt(y);
document.getElementById("text").value=x.toString(2);

}
else if(id=="oct")
{
var j=parseInt(y);
document.getElementById("text").value=j.toString(8);
}

else if(id=="hex")
{
var m=parseInt(y);
document.getElementById("text").value=m.toString(16);
}

else if(id=="dec")
{
document.getElementById("text").value=parseInt(y,16);
}

else if(id=="pp")
{

document.getElementById("text").value=Math.pow(y,2);
}


}
var a=document.getElementById("big-image");
var b=document.getElementsByClassName("small-image");
b[0].onclick=function(){
a.src=b[0].src;}

b[1].onclick=function(){
a.src=b[1].src;}

b[2].onclick=function(){
a.src=b[2].src;}

b[3].onclick=function(){
a.src=b[3].src;}

function abc(){
	alert("Item added to cart!");
}
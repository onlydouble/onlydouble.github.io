function positionMessage(){
	if (!document.getElementById) {return flase;}
	if (!document.getElementById("message")) {return flase;}
	var elem=document.getElementById("message");
	    elem.style.position="absolute";
	    elem.style.top="50px";
	elem.style.left="100px";
}
function moveMessage(){
	var elem=document.getElementById("message");
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos == 500 && ypos == 300 ){return true;}
	if(xpos<500){xpos++;}
	if (ypos<300) {ypos++;}
	if(xpos>500){xpos--;}
	if (ypos>300) {ypos--;}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	movement=setTimeout("moveMessage()",10);

}
addLoadEvent(positionMessage);
addLoadEvent(moveMessage);



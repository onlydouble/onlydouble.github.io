function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return flase;
	if (!document.getElementById(elementID)) return flase;
	var elem = document.getElementById(elementID);//不需要引号
	if (!elem.style.left){
		elem.style.left="0px";
	}
	if (!elem.style.left){
		elem.style.top="0px";
	}
	if (elem.movement){
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dlist=0;
	if(xpos == final_x && ypos == final_y ){return true;}
	if(xpos < final_x){
		dlist = Math.ceil((final_x-xpos)/10);
		xpos = dlist+xpos;
	}
	if (ypos< final_y) {		
		dlist = Math.ceil((final_y-ypos)/10);
		ypos = dlist+ypos;
	}
	if(xpos > final_x){		
		dlist = Math.ceil((xpos-final_x)/10);
		xpos = xpos-dlist;}
	if (ypos > final_y) {		
		dlist = Math.ceil((ypos-final_y)/10);
		yops = ypos-dlist;}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}
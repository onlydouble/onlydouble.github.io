function positionMessage(){
	if (!document.getElementById) return false;
	if (!document.getElementById("message")) return false;
	var elem=document.getElementById("message");
		elem.style.position="absolute";//注意拼写
		elem.style.left="50px";
		elem.style.top="50px";
		moveElement("message",500,500,20);
	if (!document.getElementById("message1")) return false;
	var elem=document.getElementById("message1");
		elem.style.position="absolute";//注意拼写
		elem.style.left="45px";
		elem.style.top="45px";
		moveElement("message1",450,45,20);
	if (!document.getElementById("message2")) return false;
	var elem=document.getElementById("message2");
		elem.style.position="absolute";//注意拼写
		elem.style.left="500px";
		elem.style.top="500px";
		moveElement("message2",10,10,20);
}
addLoadEvent(positionMessage);

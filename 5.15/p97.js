window.onload=function (){
	var testdiv=document.getElementById('testdiv');
	var para=document.createElement("p");
	var txt1=document.createTextNode("This is ");
	     para.appendChild(txt1);
	var ement=document.createElement("em");
	var txt2=document.createTextNode("my ");
	      ement.appendChild(txt2);
	      para.appendChild(ement);
	var txt=document.createTextNode("content");
	     para.appendChild(txt);
	testdiv.appendChild(para);
	
	
}
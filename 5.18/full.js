
function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有省略词
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs = new Array();//定义数组
	for(var i=0; i<abbreviations.length;i++){//遍历abbreviation数组
		var current_abbr=abbreviations[i];
		var definition = current_abbr.getAttribute("title");//获取title属性的值；
		var key=current_abbr.lastChild.nodeValue;//把文本节点的属性赋值给key；
		defs[key]=definition;
	}
//创建定义列表
	var dlist=document.createElement("dl");
	//遍历定义
	for (key in defs){
		var definition=defs[key];
		//创建定义标题
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把他们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}
       addLoadEvent(displayAbbreviations);
	

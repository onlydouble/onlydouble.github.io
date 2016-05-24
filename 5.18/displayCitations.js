function displayCitations(){
	if (!document.createElement||!document.getElementsByTagName||!document.createTextNode) {return false;}
	//获取引用
	var quotes=document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i=0;i<quotes.length;i++){
		if(!quotes[i].getAttribute("cite")){continue;}
		//如果没有blockquote继续循环
	var url=quotes[i].getAttribute("cite");
	//保存cite属性
	var quoteChildren=quotes[i].getElementsByTagName("*");
	//取得引用中所有元素节点
	if(quoteChildren.length<1){continue;}
	//如果没有元素节点继续循环
	var elem=quoteChildren[quoteChildren.length-1];
	//取得引用中最后一个节点
	var link=document.createElement("a");
	//创建标记
	var link_text=document.createTextNode("sorce");
	link.appendChild(link_text);
	link.setAttribute("href",url);
	var superscript = document.createElement("sup");
	superscript.appendChild(link);
	elem.appendChild(superscript);
	}
}
    addLoadEvent(displayCitations);
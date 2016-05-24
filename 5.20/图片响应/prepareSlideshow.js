function prepareSlideshow(){
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById('linklist')) return false;
	
	var slideshow=document.createElement("div");
		slideshow.setAttribute("id","slideshow");
	var preview=document.createElement("img");
		preview.setAttribute("src","topics.gif");
		preview.setAttribute("alt","building blocksof web design");
		preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);

	/*var preview=document.getElementById("preview");
		 preview.style.position="absolute";
		 preview.style.left="0px";
		 preview.style.top="0px";
		因为moveElement.js文件已经声明存在elem.style.属性=值；
		
		 //取得列表中的所有连接
	var list = document.getElementById("linklist"); */
	var links = list.getElementsByTagName('a');
	//为mouseover事件添加动画效果
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(prepareSlideshow);
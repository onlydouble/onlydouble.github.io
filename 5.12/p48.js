		function showPic(windoc){
			if (!document.getElementById('placehoder')) return false;
			var  source=windoc.getAttribute("href");
			var placehoder=document.getElementById("placehoder");
			if (placehoder.nodeName !="IMG") return false ;
			placehoder.setAttribute("src",source) ;
			if (document.getElementById('description'))
			{
				var text=windoc.getAttribute("title")?windoc.getAttribute("title"):"";
						var description=document.getElementById('description');
						if (description.firstChild.nodeType==3)
						{
							description.firstChild.nodeValue=text;
						}
					}
					return true;
		}
		/*window.onload = function countBodyChildren(){
		var bo=document.getElementsByTagName("body")[0];
		alert(bo.childNodes.length);
		alert(bo.nodeType);}*/
		function prepareGallery(){
			if(!document.getElementsByTagName||!document.getElementById) return false;
			if(!document.getElementById) return false;
			if(!document.getElementById('style')) return false;
			var style = document.getElementById("style");
			var links = style.getElementsByTagName("a");
			for(var i=0;i<links.length;i++)
			{
				links[i].onclick=function()
				{
					return showPic(this) ? false:true;/*返回true，更新placeholer.切换不成功返回flase;*/

				}	
			}
			
		}
		function insertAfter(newElement,targetElement){
			var parent=targetElement.parentNode;
			if(parent.lastChild==targetElement){
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement,targetElement.nextSibling);
			}
		}
		function preparePlaceholder(){
			var placehoder=document.createElement("img");
			placehoder.setAttribute("id","placehoder");
			placehoder.setAttribute("src","01.jpg");
			placehoder.setAttribute("alt","YFL");
			var description=document.createElement("p");
			description.setAttribute("id","description");
			 var desctetx=document.createTextNode("choose an img");
			 description.appendChild(desctetx);
			  var style=document.getElementById('style');
			insertAfter(placehoder,style);
			insertAfter(description,placehoder);
			
		}

		/*function addLoadEvent(func){
			var onload = window.onload;
			if(typeof window.onload != "function"){
				window.onload=func;
			}else{
				window.onload = function(){
					oldonload();
					func();
					
				}
			}

		}
		addLoadEvent(preparePlaceholder);
		addLoadEvent(prepareGallery);*/

		window.onload =function() { preparePlaceholder();  prepareGallery() }

		
		
		
		
		

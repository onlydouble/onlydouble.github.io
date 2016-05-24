	function popUp(winURL){
			window.open(winURL,"popup","width=320,height=480")
		}
		window.onload=preparelinks;
		function preparelinks(){
			if(!document.getElementsByTagName) return false;
			var links=document.getElementByTagName("a");
				for (var i=0;i<lins.length;i++){
					if(links[i].getAttribute("class")=="popup"){
						links[i].onclick=function(){
							popUp(this.getAttribute("href"));
							return false;
						}
					}
				}
			}

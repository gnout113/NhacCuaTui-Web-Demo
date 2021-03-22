var nav = document.getElementsByClassName('a-nav');
	var show = document.getElementsByClassName('show-child');
	nav[0].style.border = "5px solid orange";
	show[0].style.visibility = "visible";
	var count = 0 ;

	nav[0].firstChild.addEventListener("mouseover", mouseOver);
	nav[1].firstChild.addEventListener("mouseover", mouseOver);
	nav[2].firstChild.addEventListener("mouseover", mouseOver);
	nav[3].firstChild.addEventListener("mouseover", mouseOver);
	nav[4].firstChild.addEventListener("mouseover", mouseOver);

	function mouseOver(event) {
		for(var i = 0 ; i < 5 ; i++){
			nav[i].style.border = "none";
		} 
		event.target.parentNode.style.border = "5px solid orange";
		var index = parseInt(event.target.dataset.id);
		for(var i = 0 ; i < 5 ; i++){
			show[i].style.visibility = "hidden";
		}
		show[index].style.visibility = "visible";
		count = index;
	}

	setInterval(function(){
		nav[count].style.border = "5px solid orange";
		show[count].style.visibility = "visible";
		for (var i = 0 ; i < 5 ; i++){
			if (i !== count){
				nav[i].style.border = "none";
				show[i].style.visibility = "hidden";
			}
		}
		count++;
		if (count === 5){
			count = 0 ;
		}
	}, 5000);
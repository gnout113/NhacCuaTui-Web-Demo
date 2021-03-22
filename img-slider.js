var nav = document.getElementsByClassName('a-nav');
	var show = document.getElementsByClassName('show-child');
	nav[0].style.border = "5px solid orange";
	show[0].style.visibility = "visible";
	var count1 = 0 ;

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
		count1 = index;
	}

	setInterval(function(){
		nav[count1].style.border = "5px solid orange";
		show[count1].style.visibility = "visible";
		for (var i = 0 ; i < 5 ; i++){
			if (i !== count1){
				nav[i].style.border = "none";
				show[i].style.visibility = "hidden";
			}
		}
		count1++;
		if (count1 === 5){
			count1 = 0 ;
		}
	}, 5000);
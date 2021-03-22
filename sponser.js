	var brandAmount = 16;
	var count = 6;
	var brand = document.getElementsByClassName('sponser');
	var strTemp = '';
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	for (var i = 1 ; i <= brandAmount ; i ++){
		strTemp += '<a href="#"><img src="./img4/' + i + '.png"></a>\n'
	}
	for (var i = 1 ; i <= 6 ; i ++){
		strTemp += '<a href="#"><img src="./img4/' + i + '.png"></a>\n'
	}
	for (var i = 0 ; i <= 5 ; i ++){
		strTemp = '<a href="#"><img src="./img4/' + (brandAmount-i).toString() + '.png"></a>\n' + strTemp;
	}
	brand[0].style.transform = "translateX(-1170px)";
	brand[0].innerHTML = strTemp;

	next.addEventListener('click', onClickNext);
	prev.addEventListener('click', onClickPrev);

	function onClickNext() {
		if (count >= 22) {
			return ;
		}

		count++;
		var temp = count*-195;

		brand[0].style.transform = 'translate('+ temp.toString() + 'px)';
		
		brand[0].addEventListener('transitionend' , function(){
			if (count === 22){
				brand[0].style.transition = "none";
				brand[0].style.transform = "translateX(-1170px)";
				count = 6;
			}	
		});	
			brand[0].style.transition = "all 0.25s";		
	}

	function onClickPrev() {
		if (count <= 0) {
			return ;
		}
		count --;
		var temp = count*-195;

		brand[0].style.transform = 'translate('+ temp.toString() + 'px)';
		
		brand[0].addEventListener('transitionend' , function(){
			if (count === 0){
				brand[0].style.transition = "none";
				brand[0].style.transform = "translateX(-3120px)"
				count = 16;
			}	
		});	
			brand[0].style.transition = "all 0.25s";		
	}
var bxhArea1 = document.querySelectorAll('.bxh-mv-wrapper .bxh-area div');
		var bxhmvs = document.querySelector('.bxh-mv-wrapper .bxh-mvs');
		var tempStr1 = '';
		var content = '<a href="#">MV Việt Nam</a> <a href="#">Nghệ sĩ Việt Nam</a>';
		var selectedArea1 = 0;

		for (var i = 2 ; i <= 5 ; i++){
			tempStr1 += '<div class="rest-rank"> <a href="#" class="rank-img"> <img src="https://picsum.photos/110/62"> <div class="overlay"></div> <div class="play-btn"> <i class="fal fa-play-circle fa-2x"></i> </div> </a> <div class="rank-number">'+ i +'</div> <div class="rank-info"> <a href="#">Curabitur urna magna</a> <a href="#">Lectus Vel</a> </div> </div>'
		}

		bxhmvs.innerHTML += tempStr1;

		var mvNum = document.querySelectorAll('.bxh-mv-wrapper .bxh-mvs .rest-rank .rank-number')
		for (var i = 0 ; i <= 3 ; i++){
			if (i === 0){
				mvNum[i].style.color = '#1abc9c';
			} else if (i === 1) {
				mvNum[i].style.color = '#f39c12';
			} else {
				mvNum[i].style.color = 'white'
			}
		}

		bxhArea1[0].style.backgroundColor = 'rgb(231, 76, 60)';
		bxhArea1[0].style.color = 'white';

		bxhArea1[0].addEventListener('mouseover', bxhOverFunc1);
		bxhArea1[1].addEventListener('mouseover', bxhOverFunc1);
		bxhArea1[2].addEventListener('mouseover', bxhOverFunc1);

		bxhArea1[0].addEventListener('click', bxhClickFunc1);
		bxhArea1[1].addEventListener('click', bxhClickFunc1);
		bxhArea1[2].addEventListener('click', bxhClickFunc1);

		function bxhOverFunc1(event) {
			var tempID = parseInt(event.target.dataset.area1);
			if(tempID === selectedArea1){
				bxhArea1[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
				bxhArea1[tempID].style.color = 'white';
			} else {
				bxhArea1[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
				bxhArea1[tempID].style.color = 'white';
				bxhArea1[tempID].addEventListener('mouseout', bxhOutFunc1);
			}
		}

		function bxhOutFunc1(event) {
			event.target.style.backgroundColor = 'lightgrey';
			event.target.style.color = 'black';
		}

		function bxhClickFunc1(event){
			var tempID = parseInt(event.target.dataset.area1);
			bxhArea1[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
			bxhArea1[tempID].style.color = 'white';
			bxhArea1[tempID].removeEventListener("mouseout", bxhOutFunc1);
			bxhArea1[tempID].removeEventListener('mouseover', bxhOverFunc1);
			selectedArea1 = tempID;

			for (var i = 0 ; i < 3 ; i++){
				if (i !== selectedArea1){
					bxhArea1[i].style.backgroundColor = 'lightgrey';
					bxhArea1[i].style.color = 'black'
					bxhArea1[i].addEventListener("mouseout", bxhOutFunc1);
					bxhArea1[i].addEventListener('mouseover', bxhOverFunc1);
				}
			}
			if (selectedArea1 === 0){
				content = '<a href="#">MV Việt Nam</a> <a href="#">Nghệ sĩ Việt Nam</a>';
			} else if(selectedArea1 === 1){
				content = '<a href="#">MV Âu Mỹ</a> <a href="#">Nghệ sĩ Âu Mỹ</a>';
			} else if (selectedArea1===2){
				content = '<a href="#">MV Hàn Quốc</a> <a href="#">Nghệ sĩ Hàn Quốc</a>';
			}
			render1(content);
		}

		function render1(t){
			var firstRank = document.querySelector('.bxh-mv-wrapper .bxh-mvs .first-rank .rank-info');
			firstRank.innerHTML =  t;
		}
		render1(content);
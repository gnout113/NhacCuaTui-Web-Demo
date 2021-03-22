var bxhArea = document.querySelectorAll('.bxh-song-wrapper .bxh-area div');
		var bxhSongs = document.querySelector('.bxh-song-wrapper .bxh-songs');
		var tempStr = '';
		var selectedArea = 0;
		var tempStr1 = '<a href="#">Một Bài Hát Việt Nam</a><a href="#">Một Ca Sĩ Việt Nam</a>';

		
		for (var i = 2 ; i <= 10 ; i ++){
			tempStr += '<div class="rest-rank"> <div class="rank-number">'+ i +'</div> <div class="rank-info"> <a href="#">Curabitur urna magna</a> <a href="#">Lectus Vel</a> </div> </div>'
		}
		bxhSongs.innerHTML += tempStr;

		var rankNumber = document.querySelectorAll(".bxh-song-wrapper .bxh-songs .rest-rank .rank-number");
		for(var i = 0 ; i < 9 ; i++){
			rankNumber[i].style.fontSize = '20px';
			rankNumber[i].style.fontWeight = 'bolder';
			if (i === 0){
				rankNumber[i].style.color = '#1abc9c';
			} else if(i === 1){
				rankNumber[i].style.color = '#f39c12';
			} else {
				rankNumber[i].style.color = '#7a7a7a';
			}
		}
		bxhArea[0].style.backgroundColor = 'rgb(231, 76, 60)';
		bxhArea[0].style.color = 'white';

		bxhArea[0].addEventListener('mouseover', bxhOverFunc);
		bxhArea[1].addEventListener('mouseover', bxhOverFunc);
		bxhArea[2].addEventListener('mouseover', bxhOverFunc);

		bxhArea[0].addEventListener('click', bxhClickFunc);
		bxhArea[1].addEventListener('click', bxhClickFunc);
		bxhArea[2].addEventListener('click', bxhClickFunc);



		function bxhOverFunc(event) {
			var tempID = parseInt(event.target.dataset.area);
			if(tempID === selectedArea){
				bxhArea[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
				bxhArea[tempID].style.color = 'white';
			} else {
				bxhArea[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
				bxhArea[tempID].style.color = 'white';
				bxhArea[tempID].addEventListener('mouseout', bxhOutFunc);
			}
		}

		function bxhOutFunc(event) {
			event.target.style.backgroundColor = 'lightgrey';
			event.target.style.color = 'black';
		}

		function bxhClickFunc(event){
			var tempID = parseInt(event.target.dataset.area);
			bxhArea[tempID].style.backgroundColor = 'rgb(231, 76, 60)';
			bxhArea[tempID].style.color = 'white';
			bxhArea[tempID].removeEventListener("mouseout", bxhOutFunc);
			bxhArea[tempID].removeEventListener('mouseover', bxhOverFunc);
			selectedArea = tempID;

			for (var i = 0 ; i < 3 ; i++){
				if (i !== selectedArea){
					bxhArea[i].style.backgroundColor = 'lightgrey';
					bxhArea[i].style.color = 'black'
					bxhArea[i].addEventListener("mouseout", bxhOutFunc);
					bxhArea[i].addEventListener('mouseover', bxhOverFunc);
				}
			}
			if (selectedArea === 0){
				tempStr1 = '<a href="#">Một Bài Hát Việt Nam</a><a href="#">Một Ca Sĩ Việt Nam</a>';
			} else if (selectedArea === 1) {
				tempStr1 = '<a href="#">Một Bài Hát Âu Mỹ</a><a href="#">Một Ca Sĩ Âu Mỹ</a>';
			} else if (selectedArea === 2) {
				tempStr1 = '<a href="#">Một Bài Hát Hàn Quốc</a><a href="#">Một Ca Sĩ Hàn Quốc</a>';
			}
			render(tempStr1);
		}

		function render(string){
			var rankInfo = document.querySelector('.bxh-song-wrapper .bxh-songs .first-rank .rank-info');
			rankInfo.innerHTML = string;
		}

		render(tempStr1);
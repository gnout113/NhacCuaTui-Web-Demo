var singerImg = document.getElementsByClassName('singer-img-child');
	var singerAva = document.getElementsByClassName('singer-ava-child');
	var singerName = document.getElementById('singer-name');
	var singerNames = ['Bird', 'Monkey', 'Tiger', 'Dog', 'Cat'];
	var count = 0;

	singerImg[0].style.opacity = "1";
	singerImg[0].style.visibility = "visible";
	singerName.innerHTML  = singerNames[0];
	singerAva[0].lastChild.style.border = '1px solid #43A1F4';


	setInterval(function(){
		for(var i = 0 ; i < 5 ; i++){
			singerImg[i].style.opacity = "0";
			singerImg[i].style.visibility = "hidden";
			singerAva[i].lastChild.style.border = 'none'
		}
		singerImg[count].style.opacity = "1";
		singerImg[count].style.visibility = "visible";
		singerName.innerHTML  = singerNames[count];
		singerAva[count].lastChild.style.border = '1px solid #43A1F4';
		count++;
		if (count > 4){
			count = 0;
		}
	},5000);

	singerAva[0].firstChild.addEventListener('mouseover',mouseOver);
	singerAva[1].firstChild.addEventListener('mouseover',mouseOver);
	singerAva[2].firstChild.addEventListener('mouseover',mouseOver);
	singerAva[3].firstChild.addEventListener('mouseover',mouseOver);
	singerAva[4].firstChild.addEventListener('mouseover',mouseOver);

	function mouseOver(event){
		var index = parseInt(event.target.dataset.id);
		for(var i = 0 ; i < 5 ; i++){
			singerImg[i].style.opacity = "0";
			singerImg[i].style.visibility = "hidden";
			singerAva[i].lastChild.style.border = 'none';
		}
		singerImg[index].style.opacity = "1";
		singerImg[index].style.visibility = "visible";
		singerName.innerHTML = singerNames[index];
		singerAva[index].lastChild.style.border = '1px solid #43A1F4';
		count = index;
	}
var topWrap = document.querySelector('.top-wrapper');
var topTemp = topWrap.lastElementChild.outerHTML;
var topStr = ''

for (var i = 0 ; i <=3 ; i++){
	topStr += topTemp;
	}

topStr += '<div> <a href="#" class="view-all"> Xem tất cả TOP 100 </a> </div>';

topWrap.innerHTML += topStr;
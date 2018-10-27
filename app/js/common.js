var sidebar = document.getElementById('sidebar');
var offsetLeft = sidebar.getBoundingClientRect().left;
var leftOverlay = document.getElementById('left-overlay');
leftOverlay.style.width = offsetLeft+"px";
var footerOverlay = document.getElementById('footer-overlay');
//footerOverlay.style.width = document.getElementById('main-content').getBoundingClientRect().left + "px";
window.onresize = function (e) {
	offsetLeft = sidebar.getBoundingClientRect().left;
	leftOverlay.style.width = offsetLeft + "px";
	//footerOverlay.style.width = document.getElementById('main-content').getBoundingClientRect().left + "px";
}
document.getElementById('button-menu').addEventListener('click',function(){
	event.preventDefault();
	if(sidebar.classList.contains('active')){
		sidebar.classList.remove('active');
	}
	else
		sidebar.classList.add('active');
})

document.onmouseup = function(e){
	e = e || event;
	target = e.target || e.srcElement;
	if (target != sidebar && !sidebar.contains(target)){
		sidebar.classList.remove('active');
	}
}




window.onload =function(){
	var page = 0;
	console.log(page);
	var length = $("#lunbo ul li").length;
	console.log(length);
	auto = setInterval(function(){
		if(length > 1){
			page++;
			if(page>length-1){
				page = 0;
			}
//			console.log(page);
			$("#lunbo li").eq(page).fadeIn(400).siblings().fadeOut(400);
		}
		
	},1000);
}

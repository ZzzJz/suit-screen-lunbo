
window.onload = function(){
	var img = document.getElementById("img");
	var prev= document.getElementById("right_btn");
	var next= document.getElementById("left_btn");
	
	console.log("img的左边距为:" +img.style.left);
	var temp= 0;
	function animate(offset){
		if(parseInt(img.style.left) == -11520){
			img.style.left="-1920px";
			console.log("img的左边距为:" +img.style.left);
		}
		if(parseInt(img.style.left) == 0 ){
			img.style.left="-9600px";
			console.log("img的左边距为:" +img.style.left);
		}
		var newLeft = parseInt(img.style.left)+offset;
		$("#img").animate({left:newLeft+"px"});
//		img.style.left = newLeft +"px";
		console.log(newLeft);
		temp = newLeft/(-1920)-1;
		if(temp == -1){
			temp = 4;
		}
		if(temp == 5){
			temp = 0;
		}
		$(".dian ul li").eq(temp).addClass("on").siblings().removeClass("on");	 
	}
	prev.onclick = function(){
		animate(-1920);
		console.log("img的左边距为:" +img.style.left);
	}
	next.onclick = function(){
		animate(1920);
		console.log("img的左边距为:" +img.style.left);
	}
	auto=setInterval(function(){
		$(prev).trigger('onclick');
	},4000);
	$(".dian ul li").mouseover(function(){
					clearInterval(auto);
					var index = $(this).index();
					img.style.left = (index+1)*(-1920)+"px";
					$(".dian ul li").eq(index).addClass("on").siblings().removeClass("on");
				}).mouseout(function(){
					
					auto = setInterval(function(){
						$(prev).trigger("onclick");
					},4000);
				})
	
	//鼠标指上的时候停止
	$(".img li,.left_btn,.right_btn").mouseover(function(){
		clearInterval(auto);
	}).mouseout(function(){
		auto=setInterval(function(){
			$(prev).trigger('onclick');
		},4000);
	})
};

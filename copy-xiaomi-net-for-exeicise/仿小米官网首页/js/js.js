window.onload = function() {
	var isHover = false;
	var time;
	var test = document.getElementById("drop_down_list");
	$(".shopping_cart").hover(function() {
		isHover = true;
		$(".shopping_prompt").stop().slideDown(100);
	}, function() {
		isHover = false;
		time = setTimeout(function() {
			if(!isHover) {
				$(".shopping_prompt").stop().slideUp(100);
			}
		}, 400);
	}); //购物车弹出信息

	$(document).click(function() {
		$(".drop_down_list").hide();
		$(".title_search_text").removeClass("search_public_hover title_search_text_hover");
		$(".title_search_btn").removeClass("search_public_hover");
		$(".drop_down_list").removeClass("search_public_hover drop_down_list_hover");
		$(".drop_down_list").css("border-top", "none");
		if($(".title_search_text").val() == "") {
			$(".title_search_word_first").fadeIn(200);
			$(".title_search_word_second").fadeIn(200);
		}
	});
	$(".title_search_text").click(function() {
		$(".drop_down_list").show();
		const displayVal = window.getComputedStyle(test,null).display;
		console.log(displayVal);
		$(".title_search_text").addClass("search_public_hover title_search_text_hover");
		$(".title_search_btn").addClass("search_public_hover");
		$(".drop_down_list").addClass("search_public_hover drop_down_list_hover");
		$(".drop_down_list").css("border-top", "none");
		$(".title_search_word_first").fadeOut(200);
		$(".title_search_word_second").fadeOut(200);
		return false;
	}); //搜索框下拉

	var isHover_shopping = false;
	var time_shopping;
	var li_index = $(".title_main li").index();
	console.log(li_index);
	var ul_index = $(".title_shopping_box ul").index();
	var tmp;
	$(".title_main li").hover(function() {
		isHover_shopping = true;
		tmp = $(this).index();
		$(".title_shopping_box ul").eq(tmp).show().siblings().hide();
		$(".title_shopping").stop().slideDown(300);
	}, function() {
		//		isHover_shopping = false;
		//		time_shopping = setTimeout(function(){
		//			if(!isHover){
		//				
		//			}
		//		},400);
		$(".title_shopping").stop().slideUp(300);
	});
	$(".title_shopping").mouseover(function(){
		$(".title_shopping_box ul").eq(tmp).show().siblings().hide();
		$(".title_shopping").stop().slideDown(300);
	}).mouseout(function(){
		$(".title_shopping").stop().slideUp(300);
	});

	//	$(".choose_shopping a").hover(function(){
	////		isHover = true;
	//		$(".choose_shopping a").stop().slideDown(100);
	//	},function(){
	//		isHover = false;
	//		time = setTimeout(function(){
	//			if(!isHover){
	//				$(".shopping_prompt").stop().slideUp(100);
	//			}
	//		},400);
	//	});

	$(function() {
		$(".imgBox li").eq(0).show().siblings().hide();
		var page = 0;

		//右箭头点击控制轮播
		$(".next").click(function() {
			page++;
			if(page == 5) {
				page = 0;
			}
//			console.log(page);
			$(".flicking li").eq(page).addClass("on").siblings().removeClass("on");
			$(".imgBox li").eq(page).fadeIn(400).siblings().fadeOut(400);
		})
		$(".next").bind("autoF",function(){
			page++;
			if(page == 5) {
				page = 0;
			}
//			console.log(page);
			$(".flicking li").eq(page).addClass("on").siblings().removeClass("on");
			$(".imgBox li").eq(page).fadeIn(400).siblings().fadeOut(400);
		});

		//左箭头点击控制轮播
		$(".prev").click(function() {
			page--;
			if(page == -1) {
				page = 4;
			}
			$(".imgBox li").eq(page).fadeIn(400).siblings().fadeOut(400);
			$(".flicking li").eq(page).addClass("on").siblings().removeClass("on");
		})

		
		//设置自动轮播
		auto = setInterval(function() {
			$(".next").trigger("autoF");
			const displayVal = window.getComputedStyle(test,null).display;
			console.log(displayVal);
		}, 4000);

		//小圆点控制图片
		$(".flicking li").click(function() {
			clearInterval(auto);
			var index = $(this).index();
			page = index;
			$(".imgBox li").eq(index).fadeIn(400).siblings().fadeOut(400);
			$(".flicking li").eq(index).addClass("on").siblings().removeClass("on");
		})

		//鼠标移入定时器关闭，鼠标移出定时器继续
		$(".imgBox li,.prev,.next,.flicking li").mouseover(function() {
			clearInterval(auto);
		}).mouseout(function() {
			auto = setInterval(function() {
				$(".next").trigger("autoF");
			}, 4000);
		});

	})
//	
//	var type_left = parseInt($(".list_box li").width()/2) -parseInt($(".star_type")/2);
//	var introduce_left = parseInt($(".list_box li").width()/2) -parseInt($(".star_introduce")/2);
//	var price_left = parseInt($(".list_box li").width()/2) -parseInt($(".star_price")/2);
//	var star_type = document.getElementsByClassName(star_type);
//	var sss = document.getElementById(sss);
//	sss.style.left = type_left +"px";
//	star_type.style= type_left+"px";
//	console.log(sss.style.left);
	var list_box = document.getElementById("list_box");
	$(".star_list_top_right").click(function(){
		
//		list_box.style.left = "-1280px";
		if(parseInt(list_box.style.left) == 0){
			var change_left = parseInt(list_box.style.left) - 1280;
			console.log(change_left);
			$("#list_box").animate({left:change_left+"px"},800);
			console.log(list_box.style.left);
			$(".star_list_top_right").css("background","url(img/right_b_2.png) no-repeat center");
			$(".star_list_top_left").css("background","url(img/left_b_1.png) no-repeat center");
		}
	});
	$(".star_list_top_left").click(function(){
		
//		list_box.style.left = "-1280px";
		if(parseInt(list_box.style.left) == -1280){
			var change_left = parseInt(list_box.style.left) + 1280;
			console.log(change_left);
			$("#list_box").stop().animate({left:change_left+"px"},800);
			console.log(list_box.style.left);
			$(".star_list_top_right").css("background","url(img/right_b_1.png) no-repeat center");
			$(".star_list_top_left").css("background","url(img/left_b_2.png) no-repeat center");
		}
	});//小米明星单品移动
	
//	var intelligent_span = $(".intelligent_top span").index();
//	var intelligent_ul = $(".intelligent_content_right ul").index();
	$(".intelligent_top span").mouseover(function(){
		var tmp = $(this).index();
		console.log(tmp);
		$(".intelligent_content_right ul").eq(tmp-1).show().siblings().hide();
		
	});
	$(".intelligent_comment").hover(function(){
		$(".hot_introduce").slideDown("slow");
		
	},function(){
		$(".hot_introduce").slideUp("slow");
	});
}
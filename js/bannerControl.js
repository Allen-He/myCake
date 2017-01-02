var bannerControl = function(){
	var bannerList = $("#banner-list");
	var b = document.getElementById("banner-list");
	var navList = $("#banner-nav span");
	var bannerW = $("#banner-list img").eq(0).width();
	//var navList = $bannerNav.$("span");
	var index = 0;
	var temp = false;
	var timer;
	var timer_in = 0;

	function move(offset){
		var banLeft = parseInt(b.style.left) + offset; 
		//console.log(banLeft);
		//debugger;
		temp = true;
		bannerList.stop(true,false).animate({
			left : banLeft  + "px"
		},300,function(){
			 temp = false;

			 if(banLeft <= -4900){
			 	b.style.left = "0px";
			 }
			 //重设left=0要在animate的回调函数中设置，因为动画需要时间完成，若在animate函数后设置为0
			 //等animate结束后，left又变为移动后的数
		});
		//b.style.left = "0px";
		//debugger;			 
	}

	function showBtn(){
		var btn = navList.eq(index);
		var cls = btn.attr('className');
		if(!/nav-over/.test(cls)){
			btn.addClass("nav-over").siblings().removeClass("nav-over");
		}
	}

	function showBan(ele){
		//console.log(index);
		if(!/nav-over/.test(ele.className)){
			var myIndex = parseInt(ele.attr("index"));
			var range = (index - myIndex) * bannerW;
			timer_in = index = myIndex;		
			move(range);
			showBtn();
			//console.log(temp);
		}
	}

	function interval(){		
		timer_in++;			
			//console.log(timer_in);
		if(timer_in == 5){			
			index = 0;
			move(-980);
			showBtn();
			timer_in = 0;						
			//console.log("aa:"+bannerList.css("left"));
			//debugger;
		}else{		
			var nav = navList.eq(timer_in);
			showBan(nav);
		}		
	}	

	function play(){
		timer = setInterval(interval,2000);	
	}

	function stop(){
		clearInterval(timer);
	}

	navList.each(function(i){
		$(this).mouseover(function(){
					console.log(temp);
			if(!temp){
				showBan($(this));
				stop();
			}	
		});
		$(this).mouseout(function(){
			if(!temp){	
				play();	
			}
		});
	});

	bannerList.hover(stop,play);

	play();
	//setTimeout(interval,2000);
}()

var classifyControl = function(){
	var cl1 = $("#classify1");
	var cl2 = $("#classify2");
	var cl3 = $("#classify3");
	var cl4 = $("#classify4");
	var cl5 = $("#classify5");
	var cl6 = $("#classify6");
	var cld1 = cl1.find("dt");
	var cld2 = cl2.find("dt");
	var cld3 = cl3.find("dt");
	var cld4 = cl4.find("dt");
	var cld5 = cl5.find("dt");
	var cld6 = cl6.find("dt");
	cl1.hover(function(){
		cld1.stop().animate({
			left : 0 + "px"
		},400);
	},function(){
		cld1.stop().animate({
			left : -650 + "px"
		},400);
	});
	cl4.hover(function(){
		cld4.stop().animate({
			left : 0 + "px"
		},400);
	},function(){
		cld4.stop().animate({
			left : -650 + "px"
		},400);
	});
	cl2.hover(function(){
		cld2.stop().animate({
			top : 0 + "px"
		},400);
	},function(){
		cld2.stop().animate({
			top : -410 + "px"
		},400);
	});
	cl5.hover(function(){
		cld5.stop().animate({
			top : 0 + "px"
		},400);
	},function(){
		cld5.stop().animate({
			top : 410 + "px"
		},400);
	});
	cl3.hover(function(){
		cld3.stop().animate({
			right : 0 + "px"
		},400);
	},function(){
		cld3.stop().animate({
			right : -650 + "px"
		},400);
	});
	cl6.hover(function(){
		cld6.stop().animate({
			right : 0 + "px"
		},400);
	},function(){
		cld6.stop().animate({
			right : -650 + "px"
		},400);
	});
}()

var itembuyControl = function(){
	$("#goodsitem ul").each(function(i){
		var index = i;
			$(this).mouseover(function(){
				$("#goodsitem ul .item-buy").eq(index).stop().animate({
					top : "220px"
				},400);
				console.log("11");
			});

			$(this).mouseout(function(){
				$("#goodsitem ul .item-buy").eq(index).stop().animate({
					top : "322px"
				},400);
			});
	});

	$("#item-buy span").each(function(i){
		$(this).click(function(){
			$(this).addClass("size-cho-on").siblings().removeClass("size-cho-on");
		});
	});
}()


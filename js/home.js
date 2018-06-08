window.onload=function(){
// 置顶导航条
var mynav=document.getElementById("fjn")
window.onscroll = function(){
	var top = document.documentElement.scrollTop||document.body.scrollTop;
	if(top>100){
		mynav.style.display = 'block';
	}else{
		mynav.style.display = 'none';
	}
}
// 倒计时
var myTime1=document.getElementById("times1")
var myTime2=document.getElementById("times2")
function myDate(){
var days1="2018-1-20 00:00:00";//倒计时日期
var days1=new Date(days1.replace(/-/g,"/"));
var days2=new Date();//当前日期
var days=days1.getTime() - days2.getTime();//差数
var time=parseInt(days / (1000*60*60*24))
var leave1=days%(24*3600*1000)// 计算天数后剩余的毫秒数
var hours=parseInt(leave1 /(3600*1000))
var leave2=leave1%(3600*1000)//计算小时后剩余的毫秒数
var minutes=parseInt(leave2/(60*1000))
var leave3=leave2%(60*1000)//计算分钟后剩余的毫秒数
var seconds=parseInt(leave3/1000)
myTime1.innerHTML=time+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒"
myTime2.innerHTML=time+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒"
}
myDate();
setInterval(myDate,1000)

//置顶按钮
var setTop=document.getElementById("setTo")
setTop.onclick=function(){
	var times=setInterval(function(){
		window.scrollBy(0,-5);
		if(document.body.scrollTop==0){
			clearInterval(times);
		}
	},1);
}
$(document).ready(function(){
	//购物车界面控制
	$("#lanzi").click(function(){
		$(".bian").toggleClass("bian1");
		$(".shop").toggleClass("shop1");
	});
	//移除商品按钮
	$(".close").click(function(){
		$(".shop-s").css("opacity","0");
	})
	//滚动条控制事件
$(window).scroll(function(){	
	if($(window).scrollTop()>350){
	$("#one").css("opacity","1")
	}
	if($(window).scrollTop()>800){
	$("#tow").css("opacity","1")
	$("#three").css("opacity","1")
	}
	if($(window).scrollTop()>1100){
	$("#four").css("opacity","1")
	$("#five").css("opacity","1")
	}
	if($(window).scrollTop()>1900){
	$("#six").css("opacity","1")
	}
	if($(window).scrollTop()>2300){
	$("#sever").css("opacity","1")
	$("#eight").css("opacity","1")
	}
	if($(window).scrollTop()>2900){
	$("#night").css("opacity","1")
	}
	if($(window).scrollTop()>3500){
	$("#ten").css("opacity","1")
	}
	if($(window).scrollTop()>3400){
	$("#eleven").css("opacity","1")
	}
})
})
}

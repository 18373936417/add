window.onload=function(){
	//置顶按钮
var setTop=document.getElementById("setTo")
setTop.onclick=function(){
	var times=setInterval(function(){
		window.scrollBy(0,-5);
		if(document.body.scrollTop==0){
			clearInterval(times);
		}
	},1)
	}
	//图片切换
	var imgList=["img/max3.jpg","img/max2.jpg","img/max5.jpg","img/max7.jpg"]
	var itmes=document.getElementsByClassName("myImg")[0]
	var myul=document.getElementsByClassName("sm")[0]
	var mylist=myul.getElementsByTagName("li")
	itmes.src=imgList[0]
	for(var i=0;i<4;i++){
		(function(k){
			mylist[k].onclick=function(){
				itmes.src=imgList[k]
			}
		}(i))
	}
	//左右按钮
	var prev=document.getElementById("shang")
	var next=document.getElementById("xia")
	var index=0
	prev.onclick=function(){
		index--;
		if(index<0){
			index=3
		}
		itmes.src=imgList[index]
	}
	next.onclick=function(){
		index++;
		if(index>=4){
			index=0;
		}
		itmes.src=imgList[index]
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
})
}

window.onload=function(){
//购物车加减按钮
//JQ方法
$(document).ready(function(){
	//获得文本对象
	var t=$("#number");
	//增加
	$("#jia").click(function(){
		t.val(Math.floor(t.val())+1);
	})
	//减少
	$("#jian").click(function(){
		t.val(Math.floor(t.val())-1);
	if(parseInt(t.val())==1){
	$("#jian").attr("disabled",true)
	}
	})
	//购物车界面控制
	$("#lanzi").click(function(){
		$(".bian").toggleClass("bian1");
		$(".shop").toggleClass("shop1");
	});
	$(".blockA").click(function(){
		$(".bian").addClass("bian1");
		$(".shop").addClass("shop1");
		$(".shop-s").css("opacity","1");
		var l=$("#jiage").text();
		var m=t.val();
		$("#n").text(m);
		$("#jiesuan").text("小计："+"￥"+l*m);
		
	})
	//移除商品按钮
	$(".close").click(function(){
		$(".shop-s").css("opacity","0");
		$("#jiesuan").text(" ");
	})
})

//置顶按钮
var setTop=document.getElementById("setTo")
setTop.onclick=function(){
	var times=setInterval(function(){
		window.scrollBy(0,-5);
		if(document.body.scrollTop==0){
			clearInterval(times);
		}
	},0.5);
}

}
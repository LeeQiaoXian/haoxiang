	//让mycontent_zb下的子元素隐藏并让第一个显示
	$(".mycontent_zb").children().hide().first().show();
	$(".zhibo ul li").hover(function(){
		var indx = $(this).index();//获取索引
		$(".mycontent_zb").children().hide().eq(indx).show();
	})
	/**
	 * banner轮播图
	 */
	var banlis = $(".bandul").children();//获取bandul下的li集合
	var btnlis = $(".btns").children();//获取btns下的子元素集合
	var index = 0 ;//定义一个控制li的索引
	var myid ;//定义一个清除定时器返回的id
	//定义一个判断定时器是否运行的标示  true运行   false清除了
	var flage;
	//初始化
		hilde(banlis);//先隐藏所以的li
		//显示索引对应的li
		banlis[0].style.opacity="1";
		btnlis[0].style.background="#ed145b";
		//定时器
		myid=setInterval(show,2000);
		
		//上一张
		$(".prev").click(function(){
			if (flage) {//如果定时器正在运行
				--index;//让索引回到自身
				flage=false;//修改标示
			}
			--index;
			//处理第四张的特殊情况
			if (index==-2) {
				index=2;
			}
			if (index<0) {
				index=14;
			}
			hilde(banlis);
			clearInterval(myid);
			//显示索引对应的li
			banlis[index].style.opacity="1";
			btnlis[index].style.background="#ed145b";
			myid=setInterval(show,2000);
		})
		//下一张
		$(".next").click(function(){
			if (flage) {//如果定时器正在运行
				--index;//让索引回到自身
				flage=false;//修改标示
			}
			++index;
			if (index>14) {
				index=0;
			}
			hilde(banlis);
			clearInterval(myid);
			//显示索引对应的li
			banlis[index].style.opacity="1";
			btnlis[index].style.background="#ed145b";
			myid=setInterval(show,2000);
		})
		//点击方法
		function anNiu(indx){
			//清除定时器
			clearInterval(myid);
			hilde(banlis);
			//显示索引对应的li
			banlis[indx].style.opacity="1";
			btnlis[indx].style.background="#ed145b";
			//修改indx的值
			index=indx;
			//修改后，启动定时器
			myid=setInterval(show,2000);
		}
		//显示的方法
		function show(){
			flage=true;
			hilde(banlis);//先隐藏所以的li
			//显示索引对应的li
			banlis[index].style.opacity="1";
			btnlis[index].style.background="#ed145b";
			index++;
			if (index > banlis.length-1) {
				index=0;
			}
		}
		//隐藏的方法
		function hilde(num){
			for (var i=0;i<num.length;i++) {
				num[i].style.opacity="0";//隐藏   透明度改为0
			}
			for (var i=0;i<btnlis.length;i++) {
				btnlis[i].style.background="#ccc";
			}
		}
	/**
	 * 中间内容部分切换
	 */
	$(".bott_content1 .conlit_right .fade").hide().first().show();
	$(".bott_content1 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content1 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content2 .conlit_right .fade").hide().first().show();
	$(".bott_content2 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content2 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content3 .conlit_right .fade").hide().first().show();
	$(".bott_content3 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content3 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content4 .conlit_right .fade").hide().first().show();
	$(".bott_content4 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content4 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content5 .conlit_right .fade").hide().first().show();
	$(".bott_content5 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content5 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content6 .conlit_right .fade").hide().first().show();
	$(".bott_content6 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content6 .conlit_right .fade").hide().eq(idx).show();
	})
	$(".bott_content7 .conlit_right .fade").hide().first().show();
	$(".bott_content7 .conlit ul li").hover(function(){
		var idx = $(this).index();
		$(".bott_content7 .conlit_right .fade").hide().eq(idx).show();
	})
/**
 * 全部类目切换效果
 */	
	$(".jectcon li").hover(function(){
		var index = $(this).index();
		$(".jectcon #hide_mask").hide().eq(index).show();
	},function(){
		$(".jectcon #hide_mask").hide();
	})

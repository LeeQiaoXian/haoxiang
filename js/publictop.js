
window.onload=function(){
	//获取对象   hao24
	var boxul = document.getElementsByClassName("myhao24")[0];
	var ul = boxul.getElementsByClassName("bxul")[0];
	var lisa = ul.getElementsByTagName("a");
	//获取对象  手机
	var myul = document.getElementsByClassName("shouji")[0];
	var uls = myul.getElementsByTagName("ul")[0];
	var lts = uls.getElementsByTagName("li");
	//获取对象  全部目录下子元素
	
	//给boxul添加鼠标移入事件
	boxul.onmouseover=function(){
		//改变li样式
		ul.style.display = 'block';
		//遍历li
		for (var i = 0; i < lisa.length ; i++) {
			//给li添加鼠标移入事件
			lisa[i].onmouseover=function(){
				this.style.color = '#ed145b';
//				console.log(5);
			}
			//给li添加鼠标移出事件
			lisa[i].onmouseout=function(){
				this.style.color = '#666';
			}
		}
	}
	//给myul添加鼠标移入事件
	myul.onmouseover=function(){
		//改变li样式
		uls.style.display = 'block';
	}
	//给boxul添加鼠标移出事件
	boxul.onmouseout=function(){
		//鼠标移出,li隐藏
		ul.style.display = 'none';
	}
	//给myul添加鼠标移出事件
	myul.onmouseout=function(){
		//鼠标移出,ul隐藏
		uls.style.display = 'none';
	}
}	
	


$("#lis").hover(function(){
	$(this).children().children().show();
},function(){
	$(this).children().children().hide();
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
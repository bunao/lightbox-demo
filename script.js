$(function(){
	var mask = $("#bg_mask"),
		showbox = $("#showbox"),
		pics = $(".pics img"),
		showpic = $("#show_pic"),
		picslength = pics.length,
		currentspan = showbox.find("span.current");
	showbox.find("span.length").html(picslength);
	function changepic(src,relindex){
		showpic.attr("src",src);
		showpic.attr("relindex",relindex);
		currentspan.html(relindex+1);
	}
	function hideShowbox(){
		mask.hide();
		showbox.hide();
	}
	for(var i=0;i<picslength;i++){
		pics.eq(i).data("index",i);
	}
	pics.click(function(){
		var $this = $(this),
			picindex = $this.data("index");
		changepic($this.data("src"),picindex);
		mask.toggle();
		showbox.toggle();
	});
	
	$(".show_arrow_l").click(function(){
		var picindex = showpic.attr("relindex"),
			previndex = parseInt(picindex)-1;
		if(picindex>0){
			var prevsrc = pics.eq(previndex).data("src");
			changepic(prevsrc,previndex);
		}
		else{
			hideShowbox();
		}
	});
	$(".show_arrow_r").click(function(){
		var picindex = showpic.attr("relindex"),
			nextindex = parseInt(picindex)+1;
		if(picindex<picslength-1){
			var nextsrc = pics.eq(nextindex).data("src");
			changepic(nextsrc,nextindex);
		}
		else{
			hideShowbox();
		}
	});
	
	mask.click(function(){
		hideShowbox();
	});
})
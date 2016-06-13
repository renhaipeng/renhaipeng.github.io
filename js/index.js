$(function () {
	$('#fullpage').fullpage({
		navigation:true,
		anchors:['a','b','c','d','e','f'],
	});
	$('#xia').on('click',function(){
		$.fn.fullpage.moveSectionDown();
	})
})
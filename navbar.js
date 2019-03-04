$(document).ready(function(){
	$('#nav-bar-menu').click(function(){
		$(this).toggleClass('open');
	});
});

 $(document).ready(function(){
	$("#nav-bar-menu").click(function(){
		$(".navbar-ul").slideToggle(500);
	})
})
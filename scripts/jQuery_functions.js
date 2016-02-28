$(document).ready(function () {
	menuResize(0);
});
$(window).resize(function () {
    menuResize(0);
});

/*
bug z ładowaniem czcionki ustawia złą pozycję menu przy załadowaniu, trzeba zmienić wartość ręcznie po dodaniu/usunięciu elementu menu
*/
function menuResize(plus) {
		var el=$('.all');
		var el2=$('.menudivwrap');
		var bodywidth = $('body').width();
		var height1 = el2.height();
		var menuwidth = el2.width();
		el.css('padding-top',height1+'px');
		//el2.css('left',(($(window).width() / 2)-(el2.width()/2) + plus) + 'px');
}

$('.upIcon').click(function(){
	$('html, body').animate({scrollTop : 0},400);
	return false;
});
$('.tile1').click(function(){
	$('html, body').animate({scrollTop : $('.block1wrap').offset().top - 67},400);
	return false;
});
$('.tile2').click(function(){
	$('html, body').animate({scrollTop : $('.block2wrap').offset().top - 60},400);
	return false;
});
$('.tile3').click(function(){
	$('html, body').animate({scrollTop : $('.block3wrap').offset().top - 60},400);
	return false;
});
$('.register').click(function(){
	$('html, body').animate({scrollTop : $('.rejestracjawrap').offset().top - 60},400);
	return false;
});
$('.tile4').click(function(){
	$('html, body').animate({scrollTop : $('.block4wrap').offset().top - 60},400);
	return false;
});
$('.tile5').click(function(){
	$('html, body').animate({scrollTop : $('.block5wrap').offset().top - 60},400);
	return false;
});
$('.tile6').click(function(){
	$('html, body').animate({scrollTop : $('.block6wrap').offset().top - 60},400);
	return false;
});
$('.tile7').click(function(){
	$('html, body').animate({scrollTop : $('.block7wrap').offset().top - 60},400);
	return false;
});
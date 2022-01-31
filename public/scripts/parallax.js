// Y axis scroll speed
var velocity = 0.5;

function update() {
	var pos = $(window).scrollTop();
	var $element = $('.banner');
	$($element).css('transform', 'translateY(-' + Math.round(pos * velocity) + 'px)');
};

$(window).bind('scroll', update);
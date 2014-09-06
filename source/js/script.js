$(function() {
	$('.menu .link').click(function(event) {
		event.preventDefault();

		var that = $(this),
			thisLeft = that.offset().left,
			thisWidth = parseInt(that.css('width')),
			checkLeft = $('.check').offset().left;

		$('.menu .link').removeClass('actif');
		that.addClass('actif');

		if(/suis/.test(that.text()))
			bg = 'rgb(190,0,31)';
		else if(/éali/.test(that.text()))
			bg = 'rgb(1,184,130)';
		else if(/vice/.test(that.text()))
			bg = 'rgb(245,194,14)';
		else if(/tact/.test(that.text()))
			bg = 'rgb(0,122,148)';
		else
			bg = 'rgb(255,255,255)';

		$('.check')
			.css({
				'background-color' : bg,
				'left' : checkLeft
			})
			.animate({
				'left' : thisLeft,
				'width' : thisWidth
			});
	});

});
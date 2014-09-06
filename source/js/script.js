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
			bg = 'rgb(204,0,51)';
		else if(/éali/.test(that.text()))
			bg = 'rgb(0,204,153)';
		else if(/vice/.test(that.text()))
			bg = 'rgb(255,204,0)';
		else if(/tact/.test(that.text()))
			bg = 'rgb(0,102,153)';
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
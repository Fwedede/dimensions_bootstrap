$(function() {
	$('.menu .link').click(function(event) {
		event.preventDefault();

		var that = $(this),
			thisLeft = that.offset().left,
			thisWidth = parseInt(that.css('width')),
			checkLeft = $('.check').offset().left;

		$('.menu .link').removeClass('actif');
		that.addClass('actif');

		$('.check')
			.css('left',checkLeft)
			.animate({
				'left' : thisLeft,
				'width' : thisWidth
			});
	});

});
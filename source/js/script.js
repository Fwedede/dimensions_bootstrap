$(function() {
	$('.menu .link').click(function(event) {
		event.preventDefault();

		var that = $(this),
			thisLeft = that.offset().left;

		thisPadding = parseInt(that.css('padding-left')) * 2;
		thisWidth = parseInt(that.css('width'));
		thisBorder = parseInt(that.css('border-left-width')) * 2;

		$('.check').animate({
			'left' : thisLeft,
			'width' : thisWidth
		});
	});

});
function menuClick() {
	$('.menu .link').click(function(event) {
		event.preventDefault();

		var that = $(this),
			thisLeft = that.offset().left,
			thisWidth = parseInt(that.css('width')),
			checkLeft = $('.check').offset().left;

		$('.menu .link').removeClass('actif');
		that.addClass('actif');

		if(/suis/.test(that.text())) {
			bg = 'rgb(204,0,51)';
			sectionTop = $('#qui-suis-je').offset().top;
		}
		else if(/éali/.test(that.text())) {
			bg = 'rgb(0,204,153)';
			sectionTop = $('#realisations').offset().top;
		}
		else if(/vice/.test(that.text())) {
			bg = 'rgb(255,204,0)';
			sectionTop = $('#services').offset().top;
		}
		else if(/tact/.test(that.text())) {
			bg = 'rgb(0,102,153)';
			sectionTop = $('#contact').offset().top;
		}
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

		$('html,body').animate({scrollTop : sectionTop - $('.nav').height() - parseInt($('.section').css('padding-top')) });
	});
}
function apparence() {
	$('.header, .section').css('height', windowHeight);

	$(window).scroll(function() {
		if($(window).scrollTop() > windowHeight) {
			$('.nav').css({
				'position' : 'fixed',
				'top' : 0
			});

			$('.section').css('top', $('.nav').height());
		}
		else {
			$('.nav').css('position','relative');
			$('.section').css('top', 0);
		}
	});
}

windowHeight = $(window).height();

$(function() {
	menuClick();
	apparence();
});
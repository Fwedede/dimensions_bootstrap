function menuClick() {
	$('.menu .link').click(function(event) {
		event.preventDefault();

		var that = $(this),
			thisLeft = that.offset().left,
			thisWidth = parseInt(that.css('width'));

		if(/suis/.test(that.text()))
			sectionTop = $('#qui-suis-je').offset().top;
		else if(/éali/.test(that.text()))
			sectionTop = $('#realisations').offset().top;
		else if(/vice/.test(that.text()))
			sectionTop = $('#services').offset().top;
		else if(/tact/.test(that.text()))
			sectionTop = $('#contact').offset().top;

		$('.check')
			.css('left', $('.check').offset().left)
			.animate({
				'left' : thisLeft,
				'width' : thisWidth
			});

		$('html,body').animate({scrollTop : sectionTop - $('.nav').height() - parseInt($('.section').css('padding-top')) }, 800);
	});
}
function apparence() {
	$('.header, .section').css('min-height', windowHeight);

	$(window).scroll(function() {
		if($(window).scrollTop() >= windowHeight) {
			$('.nav').css({
				'position' : 'fixed',
				'top' : 0
			});

			$('.section').css('top', $('.nav').height());
		}
		else {
			$('.nav').css('position','relative');
			$('.section').css('top', 0);
			$('.menu .link').removeClass('actif');
		}

		$('.menu .link').removeClass('actif');

		if($(window).scrollTop() >= $('.contact').offset().top - parseInt($('.section').css('top'))) {
			that = $('.menu .link[href=#contact]');
			bg = 'rgb(0,102,153)';
			
			that.addClass('actif');
		}
		else if($(window).scrollTop() >= $('.services').offset().top - parseInt($('.section').css('top'))) {
			that = $('.menu .link[href=#services]');
			bg = 'rgb(255,204,0)';
			
			that.addClass('actif');
		}
		else if($(window).scrollTop() >= $('.realisations').offset().top - parseInt($('.section').css('top'))) {
			that = $('.menu .link[href=#realisations]');
			bg = 'rgb(0,204,153)';
			
			that.addClass('actif');
		}
		else if($(window).scrollTop() >= $('.qui-suis-je').offset().top - parseInt($('.section').css('top'))) {
			that = $('.menu .link[href=#qui-suis-je]');
			bg = 'rgb(204,0,51)';
			
			that.addClass('actif');
		}
		else
			bg = 'rgb(255,255,255)';

		$('.check')
			.css({
				'background-color' : bg,
				'left' : $('.check').offset().left
			});
	});
}

windowHeight = $(window).height();

$(function() {
	menuClick();
	apparence();
});
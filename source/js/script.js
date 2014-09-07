windowHeight = $(window).height();

function menuClick() {
	$('.link').click(function(event) {
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
		else
			sectionTop = 0;
		

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
	$('.section').css('min-height', windowHeight); // Chaque "page" fait la totalité de l'écran

	$(window).scroll(function() { // Dès qu'on scroll sur le site
		if($(window).scrollTop() >= windowHeight) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}

		var sectionPadd = parseInt($('.section').css('top'));
		$('.link').removeClass('actif');

		if($(window).scrollTop() >= $('main .section:nth-child(4)').offset().top - sectionPadd) {
			that = $('.menu .link:nth-child(4)');
			sectionTop = $('main .section:nth-child(4)').offset().top;
			bg = 'rgb(0,102,153)';
		}
		else if($(window).scrollTop() >= $('main .section:nth-child(3)').offset().top - sectionPadd) {
			that = $('.menu .link:nth-child(3)');
			sectionTop = $('main .section:nth-child(3)').offset().top;
			bg = 'rgb(255,204,0)';
		}
		else if($(window).scrollTop() >= $('main .section:nth-child(2)').offset().top - sectionPadd) {
			that = $('.menu .link:nth-child(2)');
			sectionTop = $('main .section:nth-child(2)').offset().top;
			bg = 'rgb(0,204,153)';
		}
		else if($(window).scrollTop() >= $('main .section:nth-child(1)').offset().top - sectionPadd) {
			that = $('.menu .link:nth-child(1)');
			sectionTop = $('main .section:nth-child(1)').offset().top;
			bg = 'rgb(204,0,51)';
			charge();
		}
		else {
			that = $('.logo .link');
			bg = 'transparent';
		}
		
		that.addClass('actif');
		thatLeft = that.offset().left;
		thatWidth = parseInt(that.css('width'));

		$('.check')
			.css({
				'background-color' : bg,
				'width' : thatWidth,
				'left' : thatLeft
			});
	});
}
function charge(){
	$('#performances .mini_perform .chart').easyPieChart({
		barColor: 'rgb(204,0,51)',
		trackColor: 'rgb(204,204,204)',
		scaleColor: false,
		lineCap: 'butt',
		lineWidth: 5,
		size: 80,
		animate: 5000
	});
}

$(function() {
	menuClick();
	apparence();
});
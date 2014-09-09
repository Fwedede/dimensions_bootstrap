windowHeight = $(window).height();

function menuClick() {
	$('.link').click(function(event) {
		event.preventDefault();

		var thisLeft = $(this).offset().left,
			thisWidth = parseInt($(this).css('width')),
			sectionTop = 0;

		if(/suis/.test($(this).text()))
			sectionTop = $('#qui-suis-je').offset().top;
		else if(/éali/.test($(this).text()))
			sectionTop = $('#realisations').offset().top;
		else if(/vice/.test($(this).text()))
			sectionTop = $('#services').offset().top;
		else if(/tact/.test($(this).text()))
			sectionTop = $('#contact').offset().top;
		

		$('.check')
			.css('left', $('.check').offset().left)
			.animate({
				'left': thisLeft,
				'width': thisWidth
			});

		$('html,body').animate({scrollTop: sectionTop - $('.nav').height()}, 800);
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

		var sectionPadd = parseInt($('.section').css('top')),
			i = 4,
			ok = false;

		$('.link').removeClass('actif');

		while(ok == false) {
			if(i > 0) {
				if(i == 1)
					charge();

				if($(window).scrollTop() >= $('main .section:nth-child('+i+')').offset().top - sectionPadd) {
					that = $('.menu .link:nth-child('+i+')');
					bg = $('main .section:nth-child('+i+')').css('background-color');
					ok = i;
				}
			}
			else {
				console.log(i);
				that = $('.logo .link');
				bg = 'transparent';
				ok = i;
			}
			i--;
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

	$('.mini_perform a').tooltip({
		délai: {show: 500, hide: 100}
	});
});
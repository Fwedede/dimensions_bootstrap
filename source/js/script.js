windowHeight = window.innerHeight;

function menuClick() { // Gère les animations au moment d'un clique sur le menu
	$('.link').click(function(e) {
		var lien = $(this);
		var sectionTop = 0;

		if(!lien.attr('target'))
			e.preventDefault();

		if(/suis/.test(lien.text()))
			sectionTop = $('#qui-suis-je').offset().top;
		else if(/éali/.test(lien.text()))
			sectionTop = $('#realisations').offset().top;
		else if(/vice/.test(lien.text()))
			sectionTop = $('#services').offset().top;
		else if(/tact/.test(lien.text()))
			sectionTop = $('#contact').offset().top;

		$('body').animate({scrollTop: sectionTop - $('.nav').height()}, 800);
	});
}
function apparence() {
	$('.header .section').css('min-height', windowHeight); // Chaque "page" fait la totalité de l'écran

	$(window).scroll(function() { // Dès qu'on scroll sur le site
		var i = 4;
		var ok = false;
		var that = $('.logo .link');
		var bg = 'transparent';

		$('.link').removeClass('actif').css('background-color', 'transparent');


		if($(window).scrollTop() >= windowHeight) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}


		while(ok == false) {
			if(i > 0) {
				if(i == 1)
					who();

				if($(window).scrollTop() >= $('main .section:nth-child('+i+')').offset().top - parseInt($('.section').css('top'))) {
					that = $('.menu .link:nth-child('+i+')');
					bg = $('main .section:nth-child('+i+')').css('background-color');
					ok = i;
				}
			}
			else
				ok = i;

			i--;
		}

		that.addClass('actif').css('background-color', bg);
	});
}
function who() {
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
function contact() {
	$('form')
		.on('focusout, keyup', '#form-contact-email', function() {
			if(/^[\w-\._%\+]+@[\w-\._%\+]+\.[a-z]{2,6}$/g.test($(this).val()))
				$(this).css('color','green');
			else
				$(this).css('color','red');
		})
		.submit(function(e) {
			e.preventDefault();

			if($('#form-contact-email').css('color') == 'rgb(0, 128, 0)') {
				$.post($(this).attr('action'), $(this).serializeArray()).done(function(res) {
					$('body').animate({scrollTop:0}).html(res);
				});
			}
		});
}

$(function() {
	menuClick();
	apparence();
	contact();

	$('.cell').popin();
	
	$('.mini_perform .chart').tooltip({
		delay: {show: 500, hide: 100}
	});

	var homeTop = (parseInt(windowHeight) - parseInt($('#home').height())) / 2 + 1;
	var bodyTop = (parseInt(windowHeight) - parseInt($('.body').height())) / 2;

	$('#home').css('top', homeTop);

	if(bodyTop > 0)
		$('.body').css('top', homeTop);
});
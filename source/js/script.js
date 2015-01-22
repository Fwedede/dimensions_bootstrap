var windowHeight = window.innerHeight;

// Gère les animations au moment d'un clique sur le menu
function menuClick() {

	$('.link').click(function(event) {

		var lien = $(this);
		var sectionTop = 0;

		// Si le lien ne doit pas s'ouvrir sur une autre fenêtre
		if(!lien.attr('target'))
			event.preventDefault();


		// Si c'est la première section
		if(/suis/.test(lien.text()))
			sectionTop = $('#qui-suis-je').offset().top;

		// Si c'est la deuxième section
		else if(/éali/.test(lien.text()))
			sectionTop = $('#realisations').offset().top;

		// Si c'est la troisième section
		else if(/vice/.test(lien.text()))
			sectionTop = $('#services').offset().top;

		// Si c'est la quatrième section
		else if(/tact/.test(lien.text()))
			sectionTop = $('#contact').offset().top;


		// La page scroll à la section choisie
		$('body').animate({scrollTop: sectionTop - $('.nav').height()}, 800);
	});
}

// Animations du menu
function apparence() {

	// Chaque "page" fait au moins la moitié de l'écran
	$('.header .section').css('min-height', windowHeight);

	// Dès qu'on scroll sur le site
	$(window).scroll(function() {
		var i = 4;
		var ok = false;
		var that = $('.logo .link');
		var bg = 'transparent';

		$('.link').removeClass('actif').css('background-color', 'transparent');

		// Si le scroll de la page est au moins égale à la taille de la fenêtre
		if($(window).scrollTop() >= windowHeight) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}

		// Si le scroll n'a pas encore atteint la taille de la fenêtre
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}

		// Tant qu'on scroll
		while(ok == false) {
			if(i > 0) {
				if(i == 1)
					who();

				// Check de chaque section pour adapté le menu
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

// Animation de la barre de niveau dans la section "qui-suis-je"
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

// Gère les différents paramètres du formulaire de contact
function contact() {

	$('form')
	// Vérifie la viabilité de l'email
	.on('focusout, keyup', '#form-contact-email', function() {
		if(/^[\w-\._%\+]+@[\w-\._%\+]+\.[a-z]{2,6}$/g.test($(this).val()))
			$(this).css('color','green');
		else
			$(this).css('color','red');
	})

	// Lors de l'envoie du formulaire
	.submit(function(event) {
		event.preventDefault();

		// Si l'email est valide
		if($('#form-contact-email').css('color') == 'rgb(0, 128, 0)') {

			$.post($(this).attr('action'), $(this).serializeArray()).done(function(res) {
				$('body').animate({scrollTop:0}).html(res);
			});
		}
	});
}

$(function() {

	var homeTop = (parseInt(windowHeight) - parseInt($('#home').height())) / 2 + 1;
	var bodyTop = (parseInt(windowHeight) - parseInt($('.body').height())) / 2;

	menuClick();
	apparence();
	contact();

	$('.cell').popin();

	$('.mini_perform .chart').tooltip({
		delay: {show: 500, hide: 100}
	});

	$('#home').css('top', homeTop);

	if(bodyTop > 0)
		$('.body').css('top', homeTop);
});
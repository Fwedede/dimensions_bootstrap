$(function() {
	// Déclaration de differentes dimensions
	var heightWindow = window.innerHeight;
	var widthWindow = window.innerWidth;
	var heightHome = $('#home section').height();
	var heightD = $('.body').height();
	var widthD = $('.body').width();

	// Delais d'affichage des info-bulles dans "qui-suis-je"
	$('.chart').tooltip({
		delay: {show: 500, hide: 100}
	});

	// Centrage du "D" de fond par rapport a l'écran
	$('.body').css({
		'top': (heightWindow - heightD) / 2,
		'left': (widthWindow - widthD) / 2
	});

	// Ajustement de la "home"
	$('#home').css('height', heightWindow - $('.nav').height());
	$('#home section').css('top', ((heightWindow - heightHome) / 2) - parseInt($('#home').css('padding-top')) - $('.nav').height());

	// Fonction qui gère les liens
	$('.link').click(function(event) {
		var sectionTop = 0;

		// Si c'est un lien interne on bloque l'evenement
		if($(this).attr('target') == undefined)
			event.preventDefault();

		// Récupère la position de la catégorie en fonction du menu choisi
		if($(this).is($('.menu .link').eq(0)))
			sectionTop = $('main .section:eq(0)').offset().top;
		else if($(this).is($('.menu .link').eq(1)))
			sectionTop = $('main .section:eq(1)').offset().top;
		else if($(this).is($('.menu .link').eq(2)))
			sectionTop = $('main .section:eq(2)').offset().top;
		else if($(this).is($('.menu .link').eq(3)))
			sectionTop = $('main .section:eq(3)').offset().top;

		// Scroll sur la bonne section
		$('body').animate({scrollTop: sectionTop - $('.nav').height()}, 800);
	});

	$('form')
	// Lors du remplissage de l'email du formulaire
	.on('focusout, keyup', '#form-contact-email', function() {
		// S'il y a un email valide
		if(/^[\w-\._%\+]+@[\w-\._%\+]+\.[a-z]{2,6}$/g.test($(this).val()))
			$(this).css('color','green');
		// Si l'email n'est pas valide
		else
			$(this).css('color','red');
	})
	// Lorsque le formulaire est validé
	.submit(function(event) {
		event.preventDefault();

		// Vérification de la validité de l'email
		if($('#form-contact-email').css('color') == 'rgb(0, 128, 0)') {
			// Envoie des informations
			$.post($(this).attr('action'), $(this).serializeArray()).done(function(res) {
				$('body').animate({scrollTop:0}).html(res);
			});
		}
	});

	// Quand on scroll la page
	$(window).scroll(function() {
		var i = $('main .section').length;
		var ok = false;
		var that = $('.logo .link');
		var bg = 'transparent';

		$('.menu .link').removeClass('actif').css('background-color', 'transparent');

		// Si la page n'est pas sur la "home"
		if($(window).scrollTop() >= heightWindow - $('.nav').height()) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.logo').fadeIn(0); // On affiche le logo du menu
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		// Si la page est encore sur la "home"
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.logo').fadeOut(0); // On cache le logo du menu
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}

		while(ok == false) {
			if(i > 0) {
				// Si on se trouve au niveau de la premiere section
				if(i == 1) {
					$('.chart').easyPieChart({
						barColor: 'rgb(204,0,51)',
						trackColor: 'rgb(204,204,204)',
						scaleColor: false,
						lineCap: 'butt',
						lineWidth: 5,
						size: 80,
						animate: 5000
					});
				}

				// Vérifie ou se trouve la page
				if($(window).scrollTop() >= $('main .section:nth-child('+i+')').offset().top - $('.nav').height()) {
					that = $('.menu .link:nth-child('+i+')');
					bg = $('main .section:nth-child('+i+')').css('background-color');
					ok = i;
				}
			}
			else
				ok = i;

			i--;
		}

		// Colorise le menu
		that.addClass('actif').css('background-color', bg);
	});
});


// Fonction en cours....
$(function() {
	$('.cell').popin();
});
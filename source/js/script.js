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
	
	$('.cell').popover({
		delay: { "show": 100, "hide": 100 },            		
	});

	var xhr = new XMLHttpRequest();
	// On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
	xhr.open('GET', 'source/js/realisations.json');
	xhr.onreadystatechange = function () {

		$('.cell').click(function() {
			$.getJSON('source/js/realisations.json', function(donnees) {
				$('.popover-content').html('<p>' + donnees.titre + '</p>');
				$('.popover-content').append('<p>' + donnees.desc + '</p>');
				$('.popover-content').append('<p>' + donnees.image + '</p>');
			});
		});
	}

	/*
	Alors.... Ce qui suit dans le commentaire marche, mais pas comme tu souhaites.
	Lorsque tu cliques sur l'image, sa fait bien la requette et chercher le fichier json, le problème c'est qu'il n'arrive pas a lire toute les informations du json
	Pour que sa marche j'ai du enlever des informations...

	Deuxieme problème, c'est qu'il n'affiche pas du tout les informations au moment voulu. Sa intervient qu'au 2eme clique sur l'image
	Je te laisse essayer le code j'ai mit des alerts pour que tu comprennes.


	J'ai peut etre une solution pour les deux problèmes mais je suis fatigué ce soir donc je verrais ça demain.

	J'ai mit en commentaire ce que tu avais fait pour pas perdre, sa pourrait etre utile !
	*/

	$('.cell').click(function() {
		$.getJSON('source/js/realisations.json', function(donnees) {
			$('.popover-content').html('<p>' + donnees.titre + '</p>');
			$('.popover-content').append('<p>' + donnees.desc + '</p>');
			// L'image est en commentaire vu qu'elle existe pas encore et qu'il va mettre un message d'erreur sinon
			//$('.popover-content').append('<p>' + donnees.image + '</p>');
			alert('Petite alerte pour voir les infos');
		});
	});
	
	$('.mini_perform a').tooltip({
	délai: {show: 500, hide: 100}
	});
});

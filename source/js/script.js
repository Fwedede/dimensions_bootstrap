<<<<<<< HEAD
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
=======
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


>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102
		if($(window).scrollTop() >= windowHeight) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}

<<<<<<< HEAD
		var sectionPadd = parseInt($('.section').css('top')),
		i = 4,
		ok = false;

		$('.link').removeClass('actif');
=======
>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102

		while(ok == false) {
			if(i > 0) {
				if(i == 1)
<<<<<<< HEAD
					charge();

				if($(window).scrollTop() >= $('main .section:nth-child('+i+')').offset().top - sectionPadd) {
=======
					who();

				if($(window).scrollTop() >= $('main .section:nth-child('+i+')').offset().top - parseInt($('.section').css('top'))) {
>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102
					that = $('.menu .link:nth-child('+i+')');
					bg = $('main .section:nth-child('+i+')').css('background-color');
					ok = i;
				}
			}
<<<<<<< HEAD
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
=======
			else
				ok = i;

			i--;
		}

		that.addClass('actif').css('background-color', bg);
	});
}
function who() {
>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102
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
<<<<<<< HEAD
=======
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
>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102

$(function() {
	menuClick();
	apparence();
<<<<<<< HEAD

		$.getJSON('source/js/realisations.json', function(data) {
			var titre = data[0].titre,
				image = $(this).html('<p>' + data[0].image + '</p>'),
				contenu = data[0].desc;
			//$('.popover-content').append('<p>' + data[0].desc + '</p>');
			// L'image est en commentaire vu qu'elle existe pas encore et qu'il va mettre un message d'erreur sinon
			//$('.popover-content').append('<p>' + data.image + '</p>');
		$('.cell').popover({
			delay: { "show": 100, "hide": 100 },
			title: titre,
			content: contenu+image
		});
	});
	/*
	var xhr = new XMLHttpRequest();
	// On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
	xhr.open('GET', 'source/js/realisations.json');
	xhr.onreadystatechange = function () {

		$('.cell').click(function() {
			$.getJSON('source/js/realisations.json', function(data) {
				$('.popover-content').html('<p>' + data.titre + '</p>');
				$('.popover-content').append('<p>' + data.desc + '</p>');
				$('.popover-content').append('<p>' + data.image + '</p>');
			});
		});
	}
	Alors.... Ce qui suit dans le commentaire marche, mais pas comme tu souhaites.
	Le problème, c'est qu'il n'affiche pas du tout les informations au moment voulu. Sa intervient qu'au 2eme clique sur l'image
	Je te laisse essayer le code j'ai mit des alerts pour que tu comprennes.

	J'ai mit en commentaire ce que tu avais fait pour pas perdre, sa pourrait etre utile !
	*/

	
	$('.mini_perform a').tooltip({
	délai: {show: 500, hide: 100}
	});
=======
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
>>>>>>> 3805b0e4224e93a1cba3b6ffd525436234590102
});
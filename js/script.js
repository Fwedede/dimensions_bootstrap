var heightWindow = window.innerHeight;
var widthWindow = window.innerWidth;

$(function() {
	var heightHome = $('#home section').height();
	var heightD = $('.body').height();
	var widthD = $('.body').width();

	$('.body').css({
		'top': (heightWindow - heightD) / 2,
		'left': (widthWindow - widthD) / 2
	});

	$('#home').css('height', heightWindow - $('.nav').height());
	$('#home section').css('top', ((heightWindow - heightHome) / 2) - parseInt($('#home').css('padding-top')) - $('.nav').height());

	$('.link').click(function(event) {
		var sectionTop = 0;

		if($(this).attr('target') == undefined)
			event.preventDefault();

		if($(this).is($('.menu .link').eq(0)))
			sectionTop = $('main .section:eq(0)').offset().top;
		else if($(this).is($('.menu .link').eq(1)))
			sectionTop = $('main .section:eq(1)').offset().top;
		else if($(this).is($('.menu .link').eq(2)))
			sectionTop = $('main .section:eq(2)').offset().top;
		else if($(this).is($('.menu .link').eq(3)))
			sectionTop = $('main .section:eq(3)').offset().top;

		$('body').animate({scrollTop: sectionTop - $('.nav').height()}, 800);
	});

	$('form')
	.on('focusout, keyup', '#form-contact-email', function() {
		if(/^[\w-\._%\+]+@[\w-\._%\+]+\.[a-z]{2,6}$/g.test($(this).val()))
		$(this).css('color','green');
		else
		$(this).css('color','red');
	})
	.submit(function(event) {
		event.preventDefault();

		if($('#form-contact-email').css('color') == 'rgb(0, 128, 0)') {
			$.post($(this).attr('action'), $(this).serializeArray()).done(function(res) {
				$('body').animate({scrollTop:0}).html(res);
			});
		}
	});

	$(window).scroll(function() { // Dès qu'on scroll sur le site
		var i = $('main .section').length;
		var ok = false;
		var that = $('.logo .link');
		var bg = 'transparent';

		$('.menu .link').removeClass('actif').css('background-color', 'transparent');

		if($(window).scrollTop() >= heightWindow - $('.nav').height()) {
			$('.nav').css('position', 'fixed'); // Le menu devient fixe
			$('.logo').fadeIn(0);
			$('.section').css('top', $('.nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		else {
			$('.nav').css('position','relative'); // Le menu redevient relatif
			$('.logo').fadeOut(0);
			$('.section').css('top', 0); // Remise a la bonne hauteur des "pages"
		}



		while(ok == false) {
			if(i > 0) {
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

		that.addClass('actif').css('background-color', bg);
	});
});

/*
	$(function() {

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
*/
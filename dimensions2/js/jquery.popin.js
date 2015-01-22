/*

Fonction qui créé une pop-in dans le navigateur.
Production : TokaLazy (Steeve Clément).
Fait pour : http://www.dimensions.com/

*/

(function($) {

	// Déclaration des propriétées par défauts
	var defaut = {
		"show" : 200,
		"hide" : 200,
		"bgcolor" : 'white',
		'txtcolor' : 'black'
	};

	$.fn.popin=function(options) {

		// Fusion entre les propriétées par défauts et les options mises par le développeur
		var param = $.extend(defaut, options);

		// Pour chaque élément qui appelle le plugin
		return this.each(function() {

			// Lorsqu'on clique sur l'élément 
			$(this).click(function() {

				// Si l'élément a bien l'attribut nécessaire au plugin
				if(/\d+/.test($(this).attr('popin-projet'))) {

					// Récupération du numero de l'élément
					var projet = $(this).attr('popin-projet');

					if(projet != undefined && projet != '') {

						$.post('controller/popin.php', {'projet': projet}).done(function(res) {

							$('.popin-bg').html(res);
							$('.popin-bg').fadeIn(param.show);
							var imgMaxHeight = ($('.popin').height() - parseInt($('.popin').css('padding-top')) - $('.popin .title').height() - parseInt($('.popin .title').css('padding-bottom')) - parseInt($('.popin .title').css('margin-top')) - parseInt($('.popin .title').css('margin-bottom')));
							$('.carousel .img').css('max-height', imgMaxHeight);
							$('.popin').find('.close').click(function() {
								$('.popin-bg').fadeOut(param.hide);
							});
						});
					}
				}
			});
		});
	};
})(jQuery);
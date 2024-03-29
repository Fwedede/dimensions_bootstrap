<html>
	<head>
		<meta charset="utf-8">
		<title>Dimensions - Local</title>
		<link rel="icon" type="image/png" href="source/images/favicon.png">
		<link href='http://fonts.googleapis.com/css?family=Exo' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="source/css/style.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src ="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.4/jquery.easypiechart.min.js"></script>
		<script type="text/javascript" src="source/js/jquery.popin.js"></script>
		<script type="text/javascript" src="source/js/script.js"></script>
	<script>
		(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=110325512318605&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<div id="fb-root"></div>


	<body class="clr-white">
		<header class="header centre bg-gray">
			<section class="section">
				<div id="home">
					<h1 class="font-bold"><img class="img" src="source/images/logoDimensions2.gif" alt="Dimensions_logo"></h1>
					<div class="txt">Donnez une autre dimension à votre image</div>
				</div>
			</section>
		</header>
		<nav class="nav bg-white centre">
			<div class="logo">
				<a class="link" href="#home"><img class="img" src="source/images/logoDimensionsMenu.png" alt="Dimensions_menu"></a>
			</div>
			<div class="menu right">
				<a class="link font-bold" href="#qui-suis-je">Qui suis-je?</a><!--
				--><a class="link font-bold" href="#realisations">Réalisations</a><!--
				--><a class="link font-bold" href="#services">Services</a><!--
				--><a class="link font-bold" href="#contact">Contacts</a>
			</div>
		</nav>
		<main>
			<section class="section bg-red">
				<div id="qui-suis-je" class="block">
					<h1 class="font-bold size-xl">Qui suis-je?</h1>	
					<hr class="hr"/>
					<article class="article">
						<p>
							Passionnée de design, mon cursus professionnel en a l’empreinte quelqu’en&nbsp;soit le support ou la dimension.<br/><br/>
							En passant par le print, le web ou la décoration, l’image est primordiale, de la création d’un logo, d’un site web ou d’un agencement.
						</p><br>
						<p class="right">Frédérique CLEMENT</p><br>
						<div id="performances">
							<h2>Mes compétences</h2>
							<div class="mini_perform block-white">
								<h3 class="clr-gray">Print</h3>
								<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Photoshop CS5: logiciel de retouche, de traitement et de dessin sur ordinateur." data-placement="bottom" data-percent="70">
									<img src="source/images/Ps.png" alt="Logo_Photoshop">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Illustrator CS5: logiciel de création graphique vectorielle." data-placement="bottom" data-percent="60">
								<img src="source/images/Ai.png" alt="Logo_Illustrator">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Indesign CS5: logiciel de mise en page, de publication sur ordinateur" data-placement="bottom" data-percent="80">
									<img src="source/images/Id.png" alt="Logo_Indesgign">
								</button>
							</div>
							<div class="mini_perform block-white">
								<h3 class="clr-gray">Web</h3>
								<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Dreamweaver CS5: éditeur de site web." data-placement="bottom" data-percent="80">
									<img src="source/images/Dw.png" alt="Logo_Dreamweaver">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="HTML 5: langage pour représenter les pages web." data-placement="bottom" data-percent="90">
									<img src="source/images/Html.png" alt="Logo_Html">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="CSS 3: langage qui décrit la présentation des documents HTML." data-placement="bottom" data-percent="90">
									<img src="source/images/Css.png" alt="Logo_Css">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Javascript: langage de programmation de scripts utilisé dans les pages web interactives." data-placement="bottom" data-percent="40">
									<img src="source/images/Js.png" alt="Logo_Javascript">
								</button>
							</div>		
							<div class="mini_perform block-white">
								<h3 class="clr-gray">Décoration</h3>
								<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="AutoCad: logiciel de dessin assisté par ordinateur (DAO) pour la 2D et le 3D." data-placement="bottom" data-percent="80">
									<img src="source/images/AutoCad.png" alt="Logo_AutoCad">
								</button><!--
								--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Google Sketchup: logiciel de modélisation 3D, d'animation et de cartographie orienté vers l'architecture." data-placement="bottom" data-percent="65">
									<img src="source/images/Sketchup.png" alt="Logo_Sketchup">
								</button>
							</div>
						</div>
					</article>
				</div>
				<div class="photo"></div>
			</section>
			<section class="section bg-green">
				<div id="realisations" class="block">
					<h1 class="font-bold size-xl">Mes réalisations</h1>
					<hr class="hr"/>
					<?php require('controller/realisations.php');?>
				</div>
			</section>
			<section class="section bg-yellow">
				<div id="services" class="block">
					<h1 class="font-bold size-xl">Mes services</h1>
					<hr class="hr"/>
					<div class="package">
						<h2>Voici trois packages pour répondre à vos besoins en matière d'image</h2>
						<div class="block-white clr-gray">
							<img src="source/images/Package01.png">
							<h3>Une dimension Visuelle</h3>
							<p>Communiquer sous plusieurs formes pour une entreprise ou un produit avec une identité visuelle, un logo, des affiches, des flyers, des cartes de visites mais aussi avec un site web.</p>
						</div>
						<div class="block-white clr-gray">
							<img src="source/images/Package02.png">
							<h3>Une dimension Agencée</h3>
							<p>En plus du package Dimension Visuelle, un agencement et une décoration en adéquation avec votre identité visuelle pour une entreprise, un produit ou tout autre évèmement.</p>
						</div>
						<div class="block-white clr-gray">
							<img src="source/images/Package03.png">
							<h3>Une dimension Évènementielle</h3>
							<p>Célébrer un évènement personnel(mariages, anniversaires, babyshower,...) ou professionnel avec une identité visuelle et une décoration en rapport avec un thème.</p>
						</div>
					</div>
				</div>
			</section>
			<section class="section bg-blue contact">
				<div id="contact" class="block">
					<h1 class="font-bold size-xl">Contactez-moi</h1>
					<hr class="hr"/>
					<p>Besoin de me contacter sur mes services, mon agence ou tout autre chose, c'est ici</p>
					<div class="form">
						<form method="post" action="controller/formulaire.php">
							<label class="form-label" for="form-contact-nom">NOM Prénom</label>
							<input class="form-input" type="text" id="form-contact-nom" name="form-contact-nom">
							<label class="form-label" for="form-contact-email">Email</label>
							<input class="form-input" type="email" id="form-contact-email" name="form-contact-email">
							<label class="form-label" for="form-contact-objet">Objet</label>
							<input class="form-input" type="text" id="form-contact-objet" name="form-contact-objet">
							<label class="form-label" for="form-contact-message">Message</label>
							<textarea class="form-area" id="form-contact-message" name="form-contact-message"></textarea>
							<button class="btn form-btn right" type="submit">Valider</button>
						</form>
					</div><!--
					--><div class="coord">
						<p>
							Dimensions<br>
							<a class="clr-white link-u" href="tel:0642351092" target="_blank">06.42.35.10.92</a><br><br>
							<a class="clr-white link-u" href="mailto:clementfj@gmail.com" target="_blank">clementfj@gmail.com</a><br><br>
							<a href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" target="_blank">
								<img class="img first" src="source/images/LogoFacebook.png" alt="LogoFacebook"></a>
							<a href="http://fr.linkedin.com/pub/frederique-clement/95/a06/434/" target="_blank">
								<img class="img" src="source/images/LogoLinkedin.png" alt="LogoLinkedin"></a>
							<a href="http://fr.pinterest.com/Fwedede/" target="_blank">
								<img class="img last" src="source/images/LogoPinterest.png" alt="LogoPinterest"></a>
						</p>
					</div>
				</div>
			</section>
		</main>	
		<footer class="centre bg-gray footer">		
			<p>Agence Dimensions - Créatrice d'une dimension visuelle, agencée ou évenementielle pour votre image.</p>
			<div class="fb-like" data-href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false" data-font="segoe ui"></div>
			<div class="g-plusone" data-href="https://plus.google.com/u/0/114364871015253242303"></div>
			<script type="text/javascript">
				window.___gcfg = {lang: 'fr'};

				(function() {
					var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
					po.src = 'https://apis.google.com/js/platform.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				})();
			</script>
			<p class="size-xs">© Copyright 2014 - Site développé par <a href="http://steeve-clement.fr/" target="_blank">Steeve "TokaLazy" Clément</a></p>	
		</footer>
		<div class="body"><img class="img" src="source/images/Grand_D.png" alt="Grand_D"></div>
		<div class="popin-bg"></div>
	</body>
</html>
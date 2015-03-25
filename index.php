<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Dimensions - Local</title>
		<link rel="icon" type="image/png" href="img/favicon.png">
		<link href="http://fonts.googleapis.com/css?family=Exo" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet/less" type="text/css" href="css/dimensions.less">
		<!--link rel="stylesheet" type="text/css" href="css/dimensions.css"-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="js/less.min.js" type="text/javascript"></script>
	</head>

	<div id="fb-root"></div>


	<body>
		<header id="home" class="section">
			<section>
				<h1 class="title"><img class="img" src="img/logoDimensions2.gif" alt="Dimensions_logo"></h1>
				<div class="txt">Donnez une autre dimension à votre image</div>
			</section>
		</header>

		<nav class="nav">
			<div class="logo">
				<a class="link" href="#home"><img class="img" src="img/logoDimensionsMenu.png" alt="Dimensions_menu"></a>
			</div>
			<div class="menu">
				<a class="link" href="#qui-suis-je">Qui suis-je?</a><!--
				--><a class="link" href="#realisations">Réalisations</a><!--
				--><a class="link" href="#services">Services</a><!--
				--><a class="link" href="#contact">Contacts</a>
			</div>
		</nav>

		<main>
			<section id="qui-suis-je" class="section">
				<h1 class="title">Qui suis-je?</h1>
				<article class="article">
					<p>
						Passionnée de design, mon cursus professionnel en a l’empreinte quelqu’en&nbsp;soit le support ou la dimension.<br><br>
						En passant par le print, le web ou la décoration, l’image est primordiale, de la création d’un logo, d’un site web ou d’un agencement.
					</p><br>
					<p class="right">Frédérique CLEMENT</p><br>
					<div class="performances">
						<h2>Mes compétences</h2>
						<div class="mini_perform block-white">
							<h2 class="clr-gray">Print</h2>
							<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Photoshop CS5: logiciel de retouche, de traitement et de dessin sur ordinateur." data-placement="bottom" data-percent="70">
								<img src="img/Ps.png" alt="Logo_Photoshop">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Illustrator CS5: logiciel de création graphique vectorielle." data-placement="bottom" data-percent="60">
							<img src="img/Ai.png" alt="Logo_Illustrator">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Indesign CS5: logiciel de mise en page, de publication sur ordinateur" data-placement="bottom" data-percent="80">
								<img src="img/Id.png" alt="Logo_Indesgign">
							</button>
						</div>
						<div class="mini_perform block-white">
							<h2 class="clr-gray">Web</h2>
							<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Adobe Dreamweaver CS5: éditeur de site web." data-placement="bottom" data-percent="80">
								<img src="img/Dw.png" alt="Logo_Dreamweaver">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="HTML 5: langage pour représenter les pages web." data-placement="bottom" data-percent="90">
								<img src="img/Html.png" alt="Logo_Html">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="CSS 3: langage qui décrit la présentation des documents HTML." data-placement="bottom" data-percent="90">
								<img src="img/Css.png" alt="Logo_Css">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Javascript: langage de programmation de scripts utilisé dans les pages web interactives." data-placement="bottom" data-percent="40">
								<img src="img/Js.png" alt="Logo_Javascript">
							</button>
						</div>		
						<div class="mini_perform block-white">
							<h2 class="clr-gray">Décoration</h2>
							<button type="button" class="btn btn-default chart" data-toggle="tooltip" title="AutoCad: logiciel de dessin assisté par ordinateur (DAO) pour la 2D et le 3D." data-placement="bottom" data-percent="80">
								<img src="img/AutoCad.png" alt="Logo_AutoCad">
							</button><!--
							--><button type="button" class="btn btn-default chart" data-toggle="tooltip" title="Google Sketchup: logiciel de modélisation 3D, d'animation et de cartographie orienté vers l'architecture." data-placement="bottom" data-percent="65">
								<img src="img/Sketchup.png" alt="Logo_Sketchup">
							</button>
						</div>
					</div>
				</article>
			</section>

			<section id="realisations" class="section">
				<h1 class="title">Mes réalisations</h1>
				<?php require('app/realisations.php');?>
			</section>

			<section id="services" class="section">
				<h1 class="title">Mes services</h1>
				<p>Voici trois packages pour répondre à vos besoins en matière d'image</p>
				<div class="table">
					<div class="package">
						<img src="img/Package01.png">
						<h2 class="title">Une dimension Visuelle</h2>
						<p>Communiquer sous plusieurs formes pour une entreprise ou un produit avec une identité visuelle, un logo, des affiches, des flyers, des cartes de visites mais aussi avec un site web.</p>
					</div>
					<div class="package">
						<img src="img/Package02.png">
						<h2 class="title">Une dimension Agencée</h2>
						<p>En plus du package Dimension Visuelle, un agencement et une décoration en adéquation avec votre identité visuelle pour une entreprise, un produit ou tout autre évèmement.</p>
					</div>
					<div class="package">
						<img src="img/Package03.png">
						<h2 class="title">Une dimension Évènementielle</h2>
						<p>Célébrer un évènement personnel(mariages, anniversaires, babyshower,...) ou professionnel avec une identité visuelle et une décoration en rapport avec un thème.</p>
					</div>
				</div>
			</section>

			<section id="contact" class="section">
				<h1 class="title">Contactez-moi</h1>
				<p>Besoin de me contacter sur mes services, mon agence ou tout autre chose, c'est ici</p>
				<div class="form">
					<form method="post" action="app/formulaire.php">
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
					Dimensions<br>
					<a class="link-u" href="tel:0642351092" target="_blank">06.42.35.10.92</a><br><br>
					<a class="link-u" href="mailto:clementfj@gmail.com" target="_blank">clementfj@gmail.com</a><br><br>
					<a href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" target="_blank"><img class="img" src="img/LogoFacebook.png" alt="LogoFacebook"></a>
					<a href="http://fr.linkedin.com/pub/frederique-clement/95/a06/434/" target="_blank"><img class="img" src="img/LogoLinkedin.png" alt="LogoLinkedin"></a>
					<a href="http://fr.pinterest.com/Fwedede/" target="_blank"><img class="img last" src="img/LogoPinterest.png" alt="LogoPinterest"></a>
				</div>
			</section>
		</main>

		<footer class="section footer">
			<p>Agence Dimensions - Créatrice d'une dimension visuelle, agencée ou évenementielle pour votre image.</p>
			<div class="fb-like" data-href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false" data-font="segoe ui"></div>
			<div class="g-plusone" data-href="https://plus.google.com/u/0/114364871015253242303"></div>
			<p><br>© Copyright 2014 - Site développé par <a href="http://steeve-clement.fr/" target="_blank">Steeve "TokaLazy" Clément</a></p>	
		</footer>

		<img class="body img" src="img/Grand_D.png" alt="Grand_D">
		<div class="popin-bg"></div>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!--script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.1.0/less.min.js"></script-->
		<script src ="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.4/jquery.easypiechart.min.js"></script>
		<script type="text/javascript" src="js/popin.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
		<script>
			(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=110325512318605&version=v2.0";
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
		<script type="text/javascript">
			window.___gcfg = {lang: 'fr'};

			(function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				po.src = 'https://apis.google.com/js/platform.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			})();
		</script>
	</body>
</html>
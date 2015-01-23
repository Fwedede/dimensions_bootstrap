<?php
//Si le formulaire n'est pas posté de notre site on renvoie vers la page d'accueil
if($_SERVER['HTTP_REFERER'] != 'http://localhost/_projet/dimensions/')
	header('Location: http://localhost/_projet/dimensions/');
else {
	$destinataire = 'tokalazy@gmail.com';

	if(empty($_POST['nom']) || empty($_POST['email']) || empty($_POST['objet']) || empty($_POST['message']))
		$alert = "Tous les champs doivent être renseignés";
	else {
		$nom = htmlentities($_POST['nom']);
		$expediteur = htmlentities($_POST['email']);
		$objet = htmlentities($_POST['objet']);
		$message = htmlentities($_POST['message']);

		if(get_magic_quotes_gpc()) {
			$nom = stripcslashes($nom);
			$expediteur = stripcslashes($expediteur);
			$objet = stripcslashes($objet);
			$message = stripcslashes($message);
		}

		// Expression régulière permettant de vérifier qu'aucun en-tête n'est inséré dans nos champs
		$regex_head = '/[\n\r]/';
		$regex_mail = '/^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$/i';

		// On vérifie qu'il n'y a aucun header dans les champs
		if(!preg_match($regex_mail, $expediteur))
			$alert = "L'adresse ".$expediteur." n'est pas valide";
		else if(preg_match($regex_head, $expediteur) || preg_match($regex_head, $nom) || preg_match($regex_head, $objet))
			$alert = 'En-têtes interdites dans les champs du formulaire';
		else if(!isset($_COOKIE['sent'])) {
			// En-têtes de l'e-mail
			//$headers = 'From: '.$nom.' <'.$expediteur.'>'."\r\n\r\n";
			$headers = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From: '.$objet.' <le mec>';
			//$headers .= 'From: '.$objet.' <'.$expediteur.'>';

			if(mail($destinataire,$objet,$message,$headers)) {
				$alert = "L'email à bien été envoyé.";

				// On créé un cookie de courte durée (ici 120 secondes) pour éviter de renvoyer un mail en rafraichissant la page
				setcookie("sent", "1", time() + 120);
			}
			else
				$alert = $headers." ".$expediteur."Une erreur c'est produite lors de l'envois de l'email.";
		}
	}

	unset($_POST);

	if(!empty($alert))
		echo $alert;
	else
		header('Location: http://localhost/_projet/dimensions/');
}

?>
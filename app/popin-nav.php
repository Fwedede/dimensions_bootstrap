<?php

try {
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e) {
	die('Erreur : '.$e->getMessage());
}

$i = 0;
$bdd->exec("SET CHARACTER SET utf8");
$req2 = $bdd->query("SELECT * FROM dimensions_carousel WHERE id_projet = ".intval($_POST['projet'])." ORDER BY id");

while($res2 = $req2->fetch()) {
	$active = '';

	if($i == 0)
		$active = 'active';
	require('../view/popin-nav.html');

	$i++;
}

?>
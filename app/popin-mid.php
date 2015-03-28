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
$req3 = $bdd->query("SELECT * FROM realisations WHERE id_projet = ".intval($_POST['projet'])." ORDER BY id");

while($res3 = $req3->fetch()) {
	$active = '';	

	if($i == 0)
		$active = 'active';		
		
	require('../view/popin-mid.html');

	$i++;
}

?>
<?php

try {
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e) {
	die('Erreur : '.$e->getMessage());
}

$bdd->exec("SET CHARACTER SET utf8");
$req = $bdd->query("SELECT * FROM dimensions_realisations WHERE id = '".intval($_POST['projet'])."'");

if($res = $req->fetch())
	require('../view/popin.html');

?>
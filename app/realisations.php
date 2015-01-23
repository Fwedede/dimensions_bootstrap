<?php

try{
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e)
	{die('Erreur : '.$e->getMessage());}

$bdd->exec("SET CHARACTER SET utf8");
$req = $bdd->query("SELECT * FROM dimensions_realisations ORDER BY id ASC");


require('view/realisations-top.html');

if($req->rowCount() > 0) {
	while($res = $req->fetch()) {
		require('view/realisations-mid.html');
	}
}

require('view/realisations-bot.html');

$req->closeCursor();

?>
-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Sam 04 Avril 2015 à 21:00
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `dimensions`
--

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

CREATE TABLE IF NOT EXISTS `realisations` (
  `id` int(8) NOT NULL,
  `img_package` varchar(256) COLLATE utf8_bin NOT NULL,
  `titre` varchar(256) COLLATE utf8_bin NOT NULL,
  `image` varchar(256) COLLATE utf8_bin NOT NULL,
  `infos` varchar(256) COLLATE utf8_bin NOT NULL,
  `description` varchar(256) COLLATE utf8_bin NOT NULL,
  `package` int(8) NOT NULL,
  `id_projet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `realisations`
--

INSERT INTO `realisations` (`id`, `img_package`, `titre`, `image`, `infos`, `description`, `package`, `id_projet`) VALUES
(1, 'img/Vignettes_pack0', 'Appart''Expo', 'pack2_appart-expo_01', 'Planche d''inspiration', 'C''est un projet de décoration sur le thème de l''appart''expo écolo', 0, 1),
(2, '', '', 'pack2_appart-expo_02', 'Planche d''ambiance', '', 0, 1),
(3, '', '', 'pack2_appart-expo_03', 'Visuel 3D de l''appartement', '', 0, 1),
(4, '', '', 'pack2_appart-expo_04', 'Visuel 3D de l''appartement - Chambre et bureau', '', 0, 1),
(5, '', '', 'pack2_appart-expo_05', 'Visuel 3D de l''appartement - Salon vu de la salle ', '', 0, 1),
(6, '', '', 'pack2_appart-expo_06', 'Visuel 3D de l''appartement - Salon vu de l''entr', '', 0, 1),
(7, '', '', 'pack2_appart-expo_07', 'Visuel 3D de l''appartement - Salle ', '', 0, 1),
(8, '', '', 'pack2_appart-expo_08', 'Perspective fait ', '', 0, 1),
(9, '', '', 'pack2_appart-expo_09', 'Plan avant travaux', '', 0, 1),
(10, '', '', 'pack2_appart-expo_10', 'Zoning', '', 0, 1),
(11, '', '', 'pack2_appart-expo_11', 'Plan d''agencement ', '', 0, 1),
(12, '', '', 'pack2_appart-expo_12', 'Plan d''', '', 0, 1),
(13, '', '', 'pack2_appart-expo_13', 'Elevation de la salle de bain', '', 0, 1),
(2, '', '', 'pack1_lainemoi_01', 'Logo du projet "Laine Moi"', '', 1, 2),
(1, 'img/Vignettes_pack1', 'Laine Moi', 'pack1_lainemoi_02', 'Kit print', '"Laine Moi" est sp', 1, 2),
(3, '', '', 'pack1_lainemoi_03', 'Wireframe du site internet', '', 1, 2),
(4, '', '', 'pack1_lainemoi_04', 'Maquette du site internet - Home', '', 1, 2),
(5, '', '', 'pack1_lainemoi_05', 'Maquette du site internet - Boutique', '', 1, 2),
(6, '', '', 'pack1_lainemoi_06', 'Maquette du site mobile - Home', '', 1, 2),
(7, '', '', 'pack1_lainemoi_07', 'Maquette du site mobile - Connexion', '', 1, 2),
(8, '', '', 'pack1_lainemoi_08', 'Maquette du site mobile - Profil', '', 1, 2),
(9, '', '', 'pack1_lainemoi_09', 'Maquette du site mobile - Param', '', 1, 2),
(10, '', '', 'pack1_lainemoi_10', 'Maquette du site mobile - Boutique', '', 1, 2),
(11, '', '', 'pack1_lainemoi_11', 'Maquette du site mobile - Ajout panier', '', 1, 2),
(12, '', '', 'pack1_lainemoi_12', 'Maquette du site mobile - Panier', '', 1, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

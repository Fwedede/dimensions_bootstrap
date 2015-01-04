-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 24 Septembre 2014 à 15:34
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.4.3

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
-- Structure de la table `dimensions_carousel`
--

CREATE TABLE IF NOT EXISTS `dimensions_carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_projet` int(11) NOT NULL,
  `image` varchar(32) COLLATE utf8_bin NOT NULL,
  `infos` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `image` (`image`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=8 ;

--
-- Contenu de la table `dimensions_carousel`
--

INSERT INTO `dimensions_carousel` (`id`, `id_projet`, `image`, `infos`) VALUES
(1, 1, 'pack2/appart-expo_01', 'Planche d''ambiance'),
(2, 1, 'pack2/appart-expo_02', 'Planche d''inspiration'),
(3, 1, 'pack2/appart-expo_03', 'Coupe'),
(4, 1, 'pack2/appart-expo_04', 'Vue Sketchup - Chambre'),
(5, 1, 'pack2/appart-expo_05', 'Vue Sketchup - Salon n°1'),
(6, 1, 'pack2/appart-expo_06', 'Vue Sketchup - Salon n°2'),
(7, 1, 'pack2/appart-expo_07', 'Vue Sketchup - Cuisine');

-- --------------------------------------------------------

--
-- Structure de la table `dimensions_realisations`
--

CREATE TABLE IF NOT EXISTS `dimensions_realisations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(64) NOT NULL,
  `image` varchar(64) NOT NULL,
  `description` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`,`description`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `dimensions_realisations`
--

INSERT INTO `dimensions_realisations` (`id`, `titre`, `image`, `description`) VALUES
(1, 'Projet Appart''Expo Ecolo', 'pack2/appart-expo', 'C''est un projet de décoration sur le thème de l''appart''expo écolo');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

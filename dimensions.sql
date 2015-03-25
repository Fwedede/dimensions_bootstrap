-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 25, 2015 at 06:48 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dimensions`
--

-- --------------------------------------------------------

--
-- Table structure for table `realisations`
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
-- Dumping data for table `realisations`
--

INSERT INTO `realisations` (`id`, `img_package`, `titre`, `image`, `infos`, `description`, `package`, `id_projet`) VALUES
(1, 'img/Vignettes_pack2', 'Appart''Expo', 'pack2_appart-expo_01', 'Planche d''ambiance', 'C''est un projet de décoration sur le thème de l''appart''expo écolo', 2, 1),
(1, 'img/Vignettes_pack1', '', '', '', '', 1, 2),
(3, 'img/Vignettes_pack2', 'Appart''Expo', 'pack2_appart-expo_02', 'Planche d''inspiration', '', 2, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

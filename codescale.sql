-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 05, 2014 at 08:47 PM
-- Server version: 5.5.40-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `codescale`
--
CREATE DATABASE IF NOT EXISTS `codescale` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `codescale`;

-- --------------------------------------------------------

--
-- Table structure for table `access_codes`
--

CREATE TABLE IF NOT EXISTS `access_codes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(12) NOT NULL,
  `used` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `access_codes`
--

INSERT INTO `access_codes` (`id`, `code`, `used`) VALUES
(1, 'abcd1234', 1),
(2, 'dcta1234', 0);

-- --------------------------------------------------------

--
-- Table structure for table `snippets`
--

CREATE TABLE IF NOT EXISTS `snippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `filename` varchar(45) NOT NULL,
  `output` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `snippets`
--

INSERT INTO `snippets` (`id`, `type`, `filename`, `output`) VALUES
(1, 'SWITCH_CASE', 'case_activity_1_7lines.txt', '10'),
(2, 'DO_WHILE', 'do_activity_1_8lines.txt', '10'),
(3, 'REFRESHER', 'do_refresher.txt', '10'),
(4, 'FOR_LOOP', 'for_activity_1_5lines.txt', '10'),
(5, 'REFRESHER', 'for_refresher.txt', '10'),
(6, 'IF_ELSE', 'if_activity_1_4lines.txt', '10'),
(7, 'REFRESHER', 'if_refresher.txt', '10'),
(8, 'RECURSION', 'recursion_activity_1_10lines.txt', '10'),
(9, 'REFRESHER', 'recursion_refresher.txt', '10'),
(10, 'SEQ_13', 'seq_activity_13lines.txt', '10'),
(11, 'REFRESHER', 'seq_refresher.txt', '10'),
(12, 'REFRESHER', 'switch_refresher.txt', '10'),
(13, 'WHILE_LOOP', 'while_activity_1_8lines.txt', '10'),
(14, 'REFRESHER', 'while_refresher.txt', '10');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE IF NOT EXISTS `survey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `proficiency` int(11) NOT NULL,
  `experience` varchar(10) NOT NULL,
  `education` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `code`, `proficiency`, `experience`, `education`) VALUES
(1, 'abcd1234', 3, '>4', 'PhD Student'),
(2, 'abcd1234', 3, '>4', 'PhD Student');

-- --------------------------------------------------------

--
-- Table structure for table `trials`
--

CREATE TABLE IF NOT EXISTS `trials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `access_code` varchar(12) NOT NULL,
  `snippet_id` int(11) NOT NULL,
  `time_elapsed` int(11) NOT NULL,
  `is_correct` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `snippet_id` (`snippet_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `trials`
--

INSERT INTO `trials` (`id`, `access_code`, `snippet_id`, `time_elapsed`, `is_correct`) VALUES
(1, 'abcd1234', 3, 23, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `trials`
--
ALTER TABLE `trials`
  ADD CONSTRAINT `trials_ibfk_2` FOREIGN KEY (`snippet_id`) REFERENCES `snippets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2014 at 10:40 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `access_codes`
--

INSERT INTO `access_codes` (`id`, `code`, `used`) VALUES
(1, 'abc123', 0),
(2, 'abd124', 0),
(3, 'abe125', 0),
(4, 'abf126', 0),
(5, 'abg127', 0),
(6, 'abh128', 0),
(7, 'abi129', 0),
(8, 'abj120', 0),
(9, 'abk132', 0),
(10, 'abl134', 0),
(11, 'abm135', 0),
(12, 'abn136', 0),
(13, 'abo137', 0),
(14, 'abp138', 0),
(15, 'abq139', 0),
(16, 'abr130', 0),
(17, 'abs142', 0),
(18, 'abt143', 0),
(19, 'abu145', 0),
(20, 'abv146', 0),
(21, 'abw147', 0),
(22, 'abx148', 0),
(23, 'aby149', 0),
(24, 'abz140', 0),
(25, 'acb152', 0),
(26, 'acd153', 0),
(27, 'ace154', 0),
(28, 'acf156', 0),
(29, 'acg157', 0),
(30, 'ach158', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `snippets`
--

INSERT INTO `snippets` (`id`, `type`, `filename`, `output`) VALUES
(1, 'SWITCH_CASE', 'case_activity_1_9lines.txt', '6'),
(2, 'DO_WHILE', 'do_activity_1_8lines.txt', '11'),
(3, 'REFRESHER', 'do_refresher.txt', '11'),
(4, 'FOR_LOOP', 'for_activity_1_5lines.txt', '20'),
(5, 'REFRESHER', 'for_refresher.txt', '6'),
(6, 'IF_ELSE', 'if_activity_1_9lines.txt', '6'),
(7, 'REFRESHER', 'if_refresher.txt', '58'),
(8, 'RECURSION', 'recursion_activity_1_9lines.txt', '2'),
(9, 'REFRESHER', 'recursion_refresher.txt', '6'),
(10, 'SEQ_9', 'seq_activity_9lines.txt', '16'),
(11, 'REFRESHER', 'seq_refresher.txt', '2'),
(12, 'REFRESHER', 'switch_refresher.txt', '5'),
(13, 'WHILE_LOOP', 'while_activity_1_8lines.txt', '4'),
(14, 'REFRESHER', 'while_refresher.txt', '6'),
(15, 'SWITCH_CASE', 'case_activity_2_9lines.txt', '5'),
(16, 'SWITCH_CASE', 'case_activity_3_9lines.txt', '11'),
(17, 'DO_WHILE', 'do_activity_2_8lines.txt', '-20'),
(18, 'DO_WHILE', 'do_activity_3_8lines.txt', '-8'),
(19, 'FOR_LOOP', 'for_activity_2_5lines.txt', '19'),
(20, 'FOR_LOOP', 'for_activity_3_5lines.txt', '-8'),
(21, 'IF_ELSE', 'if_activity_2_9lines.txt', '8'),
(22, 'IF_ELSE', 'if_activity_3_9lines.txt', '4'),
(23, 'RECURSION', 'recursion_activity_2_10lines.txt', '10'),
(24, 'RECURSION', 'recursion_activity_3_10lines.txt', '0'),
(25, 'WHILE_LOOP', 'while_activity_2_8lines.txt', '-9'),
(26, 'WHILE_LOOP', 'while_activity_3_8lines.txt', '-1'),
(27, 'SEQ_5', 'seq_activity_5lines.txt', '10'),
(28, 'SEQ_8', 'seq_activity_8lines.txt', '28'),
(29, 'SEQ_10', 'seq_activity_10lines.txt', '30');

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
  `interrupted` tinyint(4) NOT NULL,
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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

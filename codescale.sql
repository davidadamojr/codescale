-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 07, 2014 at 05:10 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

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
(2, 'dcta1234', 1);

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
  `interrupted` tinyint(4) NOT NULL,
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `code`, `proficiency`, `experience`, `education`, `interrupted`, `when`) VALUES
(1, 'abcd1234', 3, '>4', 'PhD Student', 0, '2014-12-07 09:03:18'),
(2, 'abcd1234', 3, '>4', 'PhD Student', 0, '2014-12-07 09:03:18'),
(3, 'dcta1234', 4, '<1', 'High School', 1, '2014-12-07 10:10:31');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=55 ;

--
-- Dumping data for table `trials`
--

INSERT INTO `trials` (`id`, `access_code`, `snippet_id`, `time_elapsed`, `is_correct`) VALUES
(2, 'abcd1234', 1, 28, 0),
(3, 'abcd1234', 1, 28, 1),
(4, 'abcd1234', 2, 28, 1),
(5, 'abcd1234', 4, 28, 1),
(6, 'abcd1234', 6, 28, 1),
(7, 'abcd1234', 8, 28, 1),
(8, 'abcd1234', 10, 28, 1),
(9, 'abcd1234', 1, 28, 1),
(10, 'abcd1234', 2, 28, 1),
(11, 'abcd1234', 4, 28, 1),
(12, 'abcd1234', 6, 28, 1),
(13, 'abcd1234', 8, 28, 1),
(14, 'abcd1234', 10, 28, 1),
(15, 'dcta1234', 1, 28, 1),
(16, 'dcta1234', 2, 28, 1),
(17, 'dcta1234', 4, 28, 1),
(18, 'dcta1234', 6, 28, 1),
(19, 'dcta1234', 8, 28, 1),
(20, 'dcta1234', 10, 28, 1),
(21, 'abcd1234', 1, 28, 1),
(22, 'abcd1234', 2, 28, 1),
(23, 'abcd1234', 4, 28, 1),
(24, 'abcd1234', 6, 28, 1),
(25, 'abcd1234', 8, 28, 1),
(26, 'abcd1234', 10, 28, 1),
(27, 'abcd1234', 1, 28, 1),
(28, 'abcd1234', 2, 28, 1),
(29, 'abcd1234', 4, 28, 1),
(30, 'abcd1234', 6, 28, 1),
(31, 'abcd1234', 8, 28, 1),
(32, 'abcd1234', 10, 28, 1),
(33, 'dcta1234', 1, 28, 1),
(34, 'dcta1234', 2, 28, 1),
(35, 'dcta1234', 4, 28, 1),
(36, 'dcta1234', 6, 28, 1),
(37, 'dcta1234', 8, 28, 1),
(38, 'dcta1234', 10, 28, 1),
(39, 'abcd1234', 1, 28, 1),
(40, 'abcd1234', 2, 28, 0),
(41, 'abcd1234', 2, 28, 0),
(42, 'abcd1234', 2, 28, 0),
(43, 'abcd1234', 2, 28, 0),
(44, 'abcd1234', 2, 28, 1),
(45, 'abcd1234', 4, 28, 1),
(46, 'abcd1234', 6, 28, 1),
(47, 'abcd1234', 8, 28, 1),
(48, 'abcd1234', 10, 28, 1),
(49, 'dcta1234', 1, 28, 1),
(50, 'dcta1234', 2, 28, 1),
(51, 'dcta1234', 4, 28, 1),
(52, 'dcta1234', 6, 28, 1),
(53, 'dcta1234', 8, 28, 1),
(54, 'dcta1234', 10, 28, 1);

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

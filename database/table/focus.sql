/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-13 11:10:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for focus
-- ----------------------------
DROP TABLE IF EXISTS `focus`;
CREATE TABLE `focus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `houseId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of focus
-- ----------------------------
INSERT INTO `focus` VALUES ('1', '1', '1');
INSERT INTO `focus` VALUES ('2', '2', '1');
INSERT INTO `focus` VALUES ('3', '2', '30');
INSERT INTO `focus` VALUES ('4', '2', '5');
INSERT INTO `focus` VALUES ('5', '3', '5');
INSERT INTO `focus` VALUES ('6', '6', '2');
SET FOREIGN_KEY_CHECKS=1;

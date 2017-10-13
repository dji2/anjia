/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-13 11:11:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for housetype
-- ----------------------------
DROP TABLE IF EXISTS `housetype`;
CREATE TABLE `housetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(11) DEFAULT NULL,
  `livingroom` int(11) DEFAULT NULL COMMENT '客厅',
  `bathroom` int(11) DEFAULT NULL COMMENT '洗手间',
  `kitchen` int(11) DEFAULT NULL COMMENT '厨房',
  `balcony` int(11) DEFAULT NULL COMMENT '阳台',
  `aspect` varchar(255) DEFAULT NULL COMMENT '房屋朝向',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of housetype
-- ----------------------------
INSERT INTO `housetype` VALUES ('1', '1', '1', '1', '1', '1', '朝南');
INSERT INTO `housetype` VALUES ('2', '2', '1', '1', '1', '1', '朝北');
INSERT INTO `housetype` VALUES ('3', '3', '1', '1', '1', '1', '北');
SET FOREIGN_KEY_CHECKS=1;

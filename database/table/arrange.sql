/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-13 11:10:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for arrange
-- ----------------------------
DROP TABLE IF EXISTS `arrange`;
CREATE TABLE `arrange` (
  `arrangeId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `houseId` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `adate` datetime DEFAULT NULL,
  `status` int(9) DEFAULT '0',
  `agreeNum` int(11) DEFAULT '0',
  `agreePerson` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`arrangeId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of arrange
-- ----------------------------
INSERT INTO `arrange` VALUES ('1', '3', '2', '这房子真好', '2017-10-04 15:19:56', '1', '0', null);
INSERT INTO `arrange` VALUES ('2', '30', '2', null, null, '0', '0', null);
INSERT INTO `arrange` VALUES ('3', '4', '2', null, null, '1', '0', null);
INSERT INTO `arrange` VALUES ('4', '5', '2', '房子超级漂亮，i like，租！', '2017-10-10 18:14:17', '2', '0', null);
INSERT INTO `arrange` VALUES ('5', '5', '3', '房屋漂亮大气，业主善良帅气，不愧是安家好房！！！', '2017-10-12 20:22:42', '2', '0', null);
INSERT INTO `arrange` VALUES ('6', '5', '9', null, null, '1', '0', null);
SET FOREIGN_KEY_CHECKS=1;

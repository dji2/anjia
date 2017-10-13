/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-13 11:11:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `personInfo` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', 'Desong', '18362202673', 'fcea920f7412b5da7be0cf42b8c93759', '764922900@qq.com', '这是个帅气的小伙');
INSERT INTO `user` VALUES ('3', '边大帅哥', '15503878257', 'e10adc3949ba59abbe56e057f20f883e', 'bianlong@qq.com', '真是个帅气的小伙');
INSERT INTO `user` VALUES ('4', 'keke', '13815133065', 'e10adc3949ba59abbe56e057f20f883e', null, '');
INSERT INTO `user` VALUES ('5', 'QCYun', '15150046829', 'e10adc3949ba59abbe56e057f20f883e', '1377706984@qq.com', '从此鹿晗是路人');
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE `user` (
`userId` int NOT NULL,
`userName` varchar NOT NULL,
`telephone` varchar NOT NULL,
`password` varchar NOT NULL,
`token` varchar NULL,
PRIMARY KEY (`userId`) 
);

CREATE TABLE `house` (
`houseId` int NOT NULL,
`houseName` varchar NOT NULL,
`housePrice` varchar NOT NULL,
`publishTime` date NULL COMMENT '房屋发布时间',
`houseAreasId` int NULL COMMENT '小区',
`houseFaci` varchar NULL COMMENT '房屋配置',
`houseTypeId` int NULL COMMENT '户型ID',
`ownerId` int NOT NULL,
`area` float NULL COMMENT '面积',
`houseStatus` int NULL COMMENT '房屋出租状态',
`startTime` date NULL COMMENT '房屋起始出租日期',
`endTime` date NULL COMMENT '房屋终止出租日期',
`housestatus` varchar NULL COMMENT '房屋状态（已出租/待出租）',
PRIMARY KEY (`houseId`) 
);

CREATE TABLE `houseAreas` (
`houseAreasId` int NOT NULL COMMENT '小区',
`introduce` varchar NULL COMMENT '小区介绍哦',
`traffic` varchar NULL COMMENT '交通状况',
`address` varchar NULL COMMENT '小区地址',
PRIMARY KEY (`houseAreasId`) 
);

CREATE TABLE `houseType` (
`houseTypeId` int NOT NULL,
`room` varchar NULL COMMENT '房间',
`livingroom` varchar NULL COMMENT '客厅',
`bathroom` varchar NULL COMMENT '洗手间',
`kitchen` varchar NULL COMMENT '厨房',
`balcony` varchar NULL COMMENT '阳台',
`aspect` varchar NULL COMMENT '房屋朝向',
PRIMARY KEY (`houseTypeId`) 
);

CREATE TABLE `owner` (
`ownerId` int NOT NULL,
`ownerName` varchar NULL,
`ownerTelephone` varchar NULL,
`ownerAddress` varchar NULL,
`ownerEmail` varchar NULL,
`token` varchar NULL,
PRIMARY KEY (`ownerId`) 
);

CREATE TABLE `arrangeInfo` (
`aid` int NOT NULL COMMENT '看房信息',
`userId` int NULL,
`houseId` int NULL,
`adate` date NULL COMMENT '看房日期',
`status` varchar NULL COMMENT '看房状态（用户请求、业主答应）',
PRIMARY KEY (`aid`) 
)
COMMENT='看房信息表\r\n';

CREATE TABLE `evaluate` (
`id` varchar NOT NULL COMMENT '评价表',
`houseId` int NULL,
`userId` int NULL,
`conten` varchar NULL COMMENT '评价内容',
PRIMARY KEY (`id`) 
);

CREATE TABLE `collect` (
`collectId` int NOT NULL COMMENT '收藏',
`houseId` int NULL,
`userId` int NULL
);

CREATE TABLE `agent` (
`id` int NOT NULL COMMENT '经纪人',
`agentName` varchar NULL,
`agentTelephone` varchar NULL,
`agentAddress` varchar NULL,
`agentEmail` varchar NULL,
`token` varchar NULL,
PRIMARY KEY (`id`) 
);

CREATE TABLE `icon` (
`id` int NOT NULL COMMENT '头像',
`personId` int  NULL,
`icon` varchar NULL,
`icon_date` datetime NULL,
PRIMARY KEY (`id`) 
);

CREATE TABLE `Table 1` (
);

CREATE TABLE `houseImg` (
`hImgId` int NOT NULL COMMENT '房源照片',
`houseId` int  NULL,
`img` varchar NULL,
`img_date` datetime NULL,
PRIMARY KEY (`hImgId`) 
);

CREATE TABLE `comment` (
`id` int NOT NULL COMMENT '评价',
`houseId` int NULL,
`userId` int NULL,
`content` varchar NULL COMMENT '评价内容'
);


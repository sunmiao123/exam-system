-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.20 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  8.2.0.4675
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 user-1701g1 的数据库结构
CREATE DATABASE IF NOT EXISTS `user-1701g1` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `user-1701g1`;


-- 导出  表 user-1701g1.api_authority 结构
CREATE TABLE IF NOT EXISTS `api_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `api_authority_id` char(50) NOT NULL COMMENT '接口ID',
  `api_authority_text` char(50) NOT NULL COMMENT '接口内容',
  `api_authority_url` char(50) NOT NULL COMMENT '接口路径',
  `api_authority_methods` char(50) NOT NULL COMMENT '请求方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.api_authority 的数据：~4 rows (大约)
DELETE FROM `api_authority`;
/*!40000 ALTER TABLE `api_authority` DISABLE KEYS */;
INSERT INTO `api_authority` (`id`, `api_authority_id`, `api_authority_text`, `api_authority_url`, `api_authority_methods`) VALUES
	(1, '1441366dc565a990efea927d69bf4be1', '用户登陆', '/user/login', 'POST'),
	(6, '3f93415892ffc4d2628d9eebe4d01cad', '查询学生列表数据', '/grade/getStudentList', 'GET'),
	(7, '68d3cfb37569f6de45db0b019c45b20a', '用户登陆', '/user/login', 'POST'),
	(8, 'b030cb28f64261e4155f0e53a7b0554a', '搜索学生', '/grade/searchStudent', 'POST');
/*!40000 ALTER TABLE `api_authority` ENABLE KEYS */;


-- 导出  表 user-1701g1.classroom 结构
CREATE TABLE IF NOT EXISTS `classroom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r_name` char(50) DEFAULT NULL COMMENT '教室号',
  `c_type` varchar(50) DEFAULT NULL COMMENT '课程类型',
  `class` varchar(50) DEFAULT NULL,
  `sdsds` char(50) DEFAULT NULL,
  `c_state` char(50) DEFAULT '未批',
  `Fraction` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='教室';

-- 正在导出表  user-1701g1.classroom 的数据：~12 rows (大约)
DELETE FROM `classroom`;
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
INSERT INTO `classroom` (`id`, `r_name`, `c_type`, `class`, `sdsds`, `c_state`, `Fraction`) VALUES
	(1, '1701A', '34311', 'JJJJJJ', 'Javascript上', '未批', 0),
	(2, '1701B', '34211', 'J1J1J1', 'Javascript下', '未批', 0),
	(3, '1701C', '34125', 'J1J1J1', '模块化开发', '未批', 0),
	(4, '1701D', '34315', 'MKMKMK', '移动端开发', '未批', 0),
	(5, '1701E', '34222', 'YDYDYD', 'node高级', '未批', 0),
	(6, '1702A', '34333', 'NONONO', '组件化开发(vue)', '未批', 0),
	(7, '1702B', '34444', 'ZJZJZZJ', '组件化开发(vue)', '未批', 0),
	(8, '1702C', '34555', 'JIJIJI', '移动端开发', '未批', 0),
	(9, '1702D', '34666', 'SZSZSZ', 'node高级', '未批', 0),
	(10, '1702E', '34777', 'GGGGG', '模块化开发', '未批', 0),
	(11, '1703A', '34888', 'NGNGNG', 'Javascript下', '未批', 0),
	(12, '1703B', '34999', 'JJJJJJ', 'JavaScript高级', '未批', 0);
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;


-- 导出  表 user-1701g1.exam 结构
CREATE TABLE IF NOT EXISTS `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exam_title` char(255) NOT NULL DEFAULT '0',
  `subject_id` int(11) NOT NULL,
  `examination_startTime` char(50) NOT NULL,
  `examination_endTime` char(50) NOT NULL,
  `user_name` char(50) NOT NULL,
  `exam_id` int(11) NOT NULL,
  `question_sum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.exam 的数据：~6 rows (大约)
DELETE FROM `exam`;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` (`id`, `exam_title`, `subject_id`, `examination_startTime`, `examination_endTime`, `user_name`, `exam_id`, `question_sum`) VALUES
	(17, '123213123123123123', 3, '1568361896000', '1568390399000', 'lzh', 3, 6),
	(18, 'dsad', 3, '1567513679000', '1569241683000', 'lzh', 4, 5),
	(19, 'javascript开发', 4, '1567514229000', '1569415030000', 'lzh', 2, 6),
	(20, 'dsad', 3, '1568205726000', '1569415328000', 'lzh', 3, 4),
	(21, 'dsadsa', 2, '1567568166000', '1568259347000', 'null', 3, 4),
	(22, 'dddddddd', 3, '1569555440000', '1569814641000', 'null', 2, 5);
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;


-- 导出  表 user-1701g1.exam_type 结构
CREATE TABLE IF NOT EXISTS `exam_type` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` char(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.exam_type 的数据：~4 rows (大约)
DELETE FROM `exam_type`;
/*!40000 ALTER TABLE `exam_type` DISABLE KEYS */;
INSERT INTO `exam_type` (`tid`, `type_name`) VALUES
	(1, '周考1'),
	(2, '周考2'),
	(3, '周考3'),
	(4, '月考');
/*!40000 ALTER TABLE `exam_type` ENABLE KEYS */;


-- 导出  表 user-1701g1.grade 结构
CREATE TABLE IF NOT EXISTS `grade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade_id` char(50) NOT NULL COMMENT '班级ID',
  `grade_name` char(50) NOT NULL COMMENT '班级名称',
  `room_id` char(50) NOT NULL COMMENT '教室号',
  `subject_id` int(11) NOT NULL COMMENT '课程名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='班级表';

-- 正在导出表  user-1701g1.grade 的数据：~3 rows (大约)
DELETE FROM `grade`;
/*!40000 ALTER TABLE `grade` DISABLE KEYS */;
INSERT INTO `grade` (`id`, `grade_id`, `grade_name`, `room_id`, `subject_id`) VALUES
	(18, '8fa3d7e2935e0c91f695e53ffc73da2f', '1701F', '2e33d6b8c44382f5e845114da39eaa8c', 4),
	(19, '479bc54598b4fc253f3257d3e0aeabba', '1701B', '4271ef1353a898a1c063d8c86b4b0495', 6),
	(20, 'eda706f0278f9db55fe9d72da804732d', '1701H', '2e33d6b8c44382f5e845114da39eaa8c', 3);
/*!40000 ALTER TABLE `grade` ENABLE KEYS */;


-- 导出  表 user-1701g1.questions 结构
CREATE TABLE IF NOT EXISTS `questions` (
  `title` char(50) DEFAULT NULL COMMENT '题目信息',
  `subject_text` char(50) DEFAULT NULL COMMENT '课程类型',
  `questions_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '题目id',
  `questions_type_text` char(50) DEFAULT NULL COMMENT '题目类型',
  `questions_answer` char(100) DEFAULT NULL COMMENT '答案信息',
  `questions_theme` char(100) DEFAULT NULL COMMENT '题目主题',
  `exam_type` char(50) NOT NULL COMMENT '考试类型',
  `user_id` char(50) DEFAULT NULL COMMENT '对应用户id',
  PRIMARY KEY (`questions_id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.questions 的数据：~25 rows (大约)
DELETE FROM `questions`;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`title`, `subject_text`, `questions_id`, `questions_type_text`, `questions_answer`, `questions_theme`, `exam_type`, `user_id`) VALUES
	('显示', '模块化开发', 1, '选择题', '<p>LPO</p>', '<p>主题</p>', '周考3', '8'),
	('机器人归位', 'javaScript下', 2, '简答题', 'computed 是计算属性', '<p>主题</p>', '周考2', '3'),
	('机器人归位', 'javaScript上', 3, '简答题', 'computed 是计算属性', '<p>主题</p>', '周考3', '2'),
	('js', '填空', 4, '选择题', '算法', '<p>主题</p>', '选择', '2'),
	('股份不放过', 'javaScript上', 5, '代码阅读题', '<p>爱爱啊</p>', '<p>主题</p>', '周考一', '4'),
	('显示', 'node高级', 6, '判断题', '<p><br></p>', '<p>主题</p>', '周考2', '2'),
	('股份不放过', '<p>aaa</p>', 7, '手写代码', '<p>aaa</p>', '<p>主题</p>', '周考2', '1'),
	('vue的生命周期', '项目实战', 8, '填空题', '<p>componentDiDMount……</p>', '<p>主题</p>', '周考2', '1'),
	('vue的生命周期', '项目实战', 9, '修改bug', '<p>componentDiDMount……</p>', '<p>主题</p>', '周考2', '2'),
	('洒洒水', 'node高级', 10, '选择题', '<p>洒洒水</p>', '<p>主题</p>', '周考2', '1'),
	('洒洒水', 'node高级', 11, '选择题', '<p>洒洒水</p>', '<p>主题</p>', '周考2', '3'),
	('网页基础课', 'javaScript上', 12, '修改bug', '<p>html css 基础</p>', '<p>主题</p>', '周考1', '2'),
	('显示', 'javaScript下', 13, '代码阅读题', '<p>地方</p>', '<p>主题</p>', '周考2', '2'),
	('双方都', 'javaScript上', 14, '判断题', '<p>s&nbsp;</p>', '<p>主题</p>', '周考2', '2'),
	('asdadadada', '移动端开发', 46, '填空题', '<p>asdadasd</p>', '<p>主题</p>', '周考2', '1'),
	('机器', 'javaScript上', 47, '选择题', '<p>方法</p>', '<p>主题</p>', '周考1', '1'),
	('qeqeqweqweqwe', 'javaScript下', 65, '选择题', '<p>王企鹅群翁群翁群翁按时大大大</p>', '戚薇戚薇戚薇群啊实打实大', '周考1', '1'),
	('爱仕达多撒多', 'javaScript上', 66, '判断题', '啊实打实大', '', '周考2', '1'),
	('啊实打实大', '组件化开发(vue)', 67, '选择题', '按时大大大', '啊实打实大', '周考1', '1'),
	('dsadad', 'javaScript下', 68, '填空题', 'dasd', 'dasdsad', '月考', '1'),
	('javascripthtm', 'javaScript上', 69, '选择题', '', 'JAVAS', '周考3', '1'),
	('javascripthtml123', 'javaScript下', 70, '选择题', '456789', '12312', '周考1', '1'),
	('aaaaaaaaaaaa', 'javaScript下', 71, '判断题', 'ddddddddddddddddd', 'dsddddd', '月考', '1'),
	('dsad', '模块化开发', 72, '选择题', 'ddddddd', 'dsaaaaaaaaaaa', '周考2', '1'),
	('dsad', 'javaScript下', 73, '判断题', 'dddd', 'ddddddddddddddd', '周考3', '1');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;


-- 导出  表 user-1701g1.questions_type 结构
CREATE TABLE IF NOT EXISTS `questions_type` (
  `questions_id` varchar(255) NOT NULL DEFAULT '',
  `questions_type_text` varchar(255) DEFAULT NULL,
  `json_path` varchar(255) DEFAULT NULL,
  `subject_text` varchar(255) DEFAULT NULL,
  `exam_type` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`questions_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.questions_type 的数据：32 rows
DELETE FROM `questions_type`;
/*!40000 ALTER TABLE `questions_type` DISABLE KEYS */;
INSERT INTO `questions_type` (`questions_id`, `questions_type_text`, `json_path`, `subject_text`, `exam_type`, `user_id`, `title`) VALUES
	('4t0rar-39c33-wq098t-phh5ht', '代码补全', '4t0rar-39c33-wq098t-phh5ht.json', 'javaScript上', '周考1', 'dingshaoshan', '机器人归位'),
	('4vu7t9-t9vv08-chvz3r-n8i3nq', '手写代码', '4vu7t9-t9vv08-chvz3r-n8i3nq.json', 'javaScript上', '周考1', 'dingshaoshan', '创建一副扑克牌'),
	('npcnawn-0apvx-qbofy-ms3t4p', '代码补全', 'npcnawn-0apvx-qbofy-ms3t4p.json', 'javaScript上', '周考1', 'dingshaoshan', '洗牌'),
	('izvfy-572mw-thxrmm-7aba5s', '代码阅读题', 'izvfy-572mw-thxrmm-7aba5s.json', 'node基础', '周考1', 'w916peach', '解构赋值和数组的map方法'),
	('bqq54a-jly2z9-m9fg7pj-oio193', '代码补全', 'bqq54a-jly2z9-m9fg7pj-oio193.json', 'node基础', '周考1', 'w916peach', 'async配合transition实现自定义动画'),
	('c7y73-e0nft-6rplem-daxvxe', '手写代码', 'c7y73-e0nft-6rplem-daxvxe.json', '组件化开发(vue)', '周考1', 'chenmanjie', '类的抽象'),
	('sue8v-wa50ws-jss7qm-592yt8', '代码补全', 'sue8v-wa50ws-jss7qm-592yt8.json', '组件化开发(vue)', '周考1', 'chenmanjie', '使用类实现任务调度'),
	('gt8z4u-ufd66j-najaef-y8ytir', '代码补全', 'gt8z4u-ufd66j-najaef-y8ytir.json', '渐进式开发(react)', '周考2', 'chenmanjie', '封装图片加载Promise'),
	('fl7dll-xh6eo-hpri8a-edulg', '代码补全', 'fl7dll-xh6eo-hpri8a-edulg.json', '组件化开发(vue)', '周考2', 'chenmanjie', '使用async函数实现多张图片的依次加载（第一张加载完之后才能加载第二张）'),
	('5oxqyl-8dnbaa-3dt3o9-qrecrk', '代码补全', '5oxqyl-8dnbaa-3dt3o9-qrecrk.json', '组件化开发(vue)', '周考2', 'chenmanjie', '使用async函数实现多张图片的依次加载（哪张加载完哪张添加到页面）'),
	('42cuvb-7216fb-zlkab2-wwns3d', '代码补全', '42cuvb-7216fb-zlkab2-wwns3d.json', '组件化开发(vue)', '月考', 'chenmanjie', 'Vue导航守卫做鉴权处理'),
	('uecyx-3qim4-rwk9o-v43sj8', '简答题', 'uecyx-3qim4-rwk9o-v43sj8.json', '组件化开发(vue)', '月考', 'chenmanjie', 'Vue基础知识'),
	('h7f6hq-cezl0g-fyu3o-6onwjf', '简答题', 'h7f6hq-cezl0g-fyu3o-6onwjf.json', 'node基础', '周考1', 'w916peach', 'let和var的区别'),
	('3zayso-dq7kt-86q4ye-9ydupa', '简答题', '3zayso-dq7kt-86q4ye-9ydupa.json', '组件化开发(vue)', '月考', 'chenmanjie', 'Vue基础知识'),
	('05snch-6eq8dn-szfd6q-t34nld', '简答题', '05snch-6eq8dn-szfd6q-t34nld.json', '组件化开发(vue)', '周考2', 'chenmanjie', 'Vue基础知识'),
	('ayf32j-5kv76-qvfqh-cigaoo', '简答题', 'ayf32j-5kv76-qvfqh-cigaoo.json', 'node基础', '周考1', 'w916peach', 'commonjs规范'),
	('00o5nwy-qw7jj-ko6qkb-4uwrhv', '简答题', '00o5nwy-qw7jj-ko6qkb-4uwrhv.json', '组件化开发(vue)', '周考2', 'chenmanjie', 'vue基础知识'),
	('6ivrh-g7kp8a-2gixkg-p117t', '代码阅读题', '6ivrh-g7kp8a-2gixkg-p117t.json', '组件化开发(vue)', '周考2', 'chenmanjie', 'vue自定义指令'),
	('zyocwi-drka9-kx8vv-blrmw9p', '手写代码', 'zyocwi-drka9-kx8vv-blrmw9p.json', 'node基础', '周考1', 'w916peach', '输入的reduce方法'),
	('9wck8-qt73nd-0v6s8-f6jyid', '代码阅读题', '9wck8-qt73nd-0v6s8-f6jyid.json', '组件化开发(vue)', '周考2', 'chenmanjie', 'vue自定义指令'),
	('d5osduj-krhc1-akr9l2-9tz2nz', '代码补全', 'd5osduj-krhc1-akr9l2-9tz2nz.json', 'javaScript下', '周考1', 'liuyu', '不借助临时变量，进行两个整数的交换'),
	('in5k9-nqedo7-cjpek-30cmi', '代码补全', 'in5k9-nqedo7-cjpek-30cmi.json', 'javaScript下', '周考1', 'liuyu', '进行两个整数的交换输入 a = 2, b = 4 输出 a = 4, b =2'),
	('40lhum-rtymrz-r8x2h-6c9od', '代码补全', '40lhum-rtymrz-r8x2h-6c9od.json', 'javaScript下', '周考1', 'liuyu', '微信分享后地址发生改变，根据地址获取get传递参数'),
	('xt05yo-prna5g-f7zqo-ltl5rh', '简答题', 'xt05yo-prna5g-f7zqo-ltl5rh.json', '渐进式开发(react)', '周考1', 'dingshaoshan', 'react生命周期'),
	('0r33sp-v8csso-y34tc3-ddsoj', '代码补全', '0r33sp-v8csso-y34tc3-ddsoj.json', 'javaScript下', '周考2', 'liuyu', '找出考试结果数组中排名前三的学生'),
	('joo9h2-q79phw-pskuido-ua4t7k', '简答题', 'joo9h2-q79phw-pskuido-ua4t7k.json', '组件化开发(vue)', '周考3', 'liuyu', 'computed 和 watch 区别'),
	('aihpv-1ru212-wun87-0hli3', '手写代码', 'aihpv-1ru212-wun87-0hli3.json', 'javaScript高级', '月考', 'w916peach', '实现发布订阅模式'),
	('ma0uj-yctlrp-xjf87d-p2xrg', '简答题', 'ma0uj-yctlrp-xjf87d-p2xrg.json', 'javaScript上', '周考1', 'dingshaoshan', '数据结构之对象'),
	('x0gf6-ogyaaf-t88yrd-mnhxlr', '代码补全', 'x0gf6-ogyaaf-t88yrd-mnhxlr.json', 'javaScript下', '周考3', 'dingshaoshan', '汉英翻译'),
	('y6cbma-9qjye-rdx5kw-oundyo', '手写代码', 'y6cbma-9qjye-rdx5kw-oundyo.json', 'javaScript下', '周考3', 'dingshaoshan', '实现单选切换'),
	('00a1t8-ezqkxg-xv9pkk-6hqfyb', '手写代码', '00a1t8-ezqkxg-xv9pkk-6hqfyb.json', '渐进式开发(react)', '周考2', 'chenmanjie', '性能优化'),
	('cbssqf-16avt7-qwk8k-ufilrc', '简答题', 'cbssqf-16avt7-qwk8k-ufilrc.json', '渐进式开发(react)', '周考2', 'chenmanjie', '多种组件创建方式及其区别？');
/*!40000 ALTER TABLE `questions_type` ENABLE KEYS */;


-- 导出  表 user-1701g1.questions_type_text 结构
CREATE TABLE IF NOT EXISTS `questions_type_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '题目类型id',
  `questions_type_id` char(50) NOT NULL DEFAULT '0',
  `questions_type_text` char(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.questions_type_text 的数据：~15 rows (大约)
DELETE FROM `questions_type_text`;
/*!40000 ALTER TABLE `questions_type_text` DISABLE KEYS */;
INSERT INTO `questions_type_text` (`id`, `questions_type_id`, `questions_type_text`) VALUES
	(1, 'hfeuif', '选择题'),
	(2, 'jeiidewf', '判断题'),
	(3, 'uer32', '填空题'),
	(4, 'efiwfw', '代码补全'),
	(5, 'sfiiwef', '修改bug'),
	(6, 'bzfz14', '手写代码'),
	(12, 'f4stvu', '哒哒哒'),
	(13, '41iefd', '加加加啊'),
	(14, 'i3yyp5', 'hahhaaa'),
	(15, '8h9wwo', 'sadad1'),
	(19, 'k7pvw2', 'wer'),
	(20, 'lbp4w2', 'wer'),
	(21, 'g7zosg', 'wer'),
	(22, 'c33sef', 'wer'),
	(23, 'dz8gvn', 'wer');
/*!40000 ALTER TABLE `questions_type_text` ENABLE KEYS */;


-- 导出  表 user-1701g1.room 结构
CREATE TABLE IF NOT EXISTS `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_id` char(50) NOT NULL COMMENT '教室ID',
  `room_name` char(50) NOT NULL COMMENT '教室名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='教室表';

-- 正在导出表  user-1701g1.room 的数据：~6 rows (大约)
DELETE FROM `room`;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` (`id`, `room_id`, `room_name`) VALUES
	(3, 'e937dbe68384c78863d588699c84b0af', '34306'),
	(4, '2e33d6b8c44382f5e845114da39eaa8c', '34301'),
	(5, '4271ef1353a898a1c063d8c86b4b0495', '34303'),
	(6, '80a3d7931feda529af49d10964824454', '34304'),
	(7, 'ae270f73dc1f16f4df716ad7f75f5592', '34305'),
	(8, 'ec062bf9f524f541590042d866750002', '34005');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;


-- 导出  表 user-1701g1.student 结构
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` char(50) NOT NULL COMMENT '学生学号',
  `student_name` char(50) NOT NULL COMMENT '姓名',
  `student_pwd` char(50) NOT NULL COMMENT '密码',
  `gander` int(11) NOT NULL DEFAULT '0' COMMENT '性别 （0男 1女）',
  `grade_id` char(50) NOT NULL COMMENT '班级号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='学生信息表';

-- 正在导出表  user-1701g1.student 的数据：~3 rows (大约)
DELETE FROM `student`;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `student_id`, `student_name`, `student_pwd`, `gander`, `grade_id`) VALUES
	(4, '183115206016', '张三', '666', 0, '2e33d6b8c44382f5e845114da39eaa8c'),
	(5, '183115206017', '李四', '666', 0, 'eda706f0278f9db55fe9d72da804732d'),
	(6, '183115206018', '小红', '666', 1, '2e33d6b8c44382f5e845114da39eaa8c');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;


-- 导出  表 user-1701g1.subject 结构
CREATE TABLE IF NOT EXISTS `subject` (
  `subject_id` int(11) NOT NULL AUTO_INCREMENT,
  `subject_text` char(50) NOT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.subject 的数据：~10 rows (大约)
DELETE FROM `subject`;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` (`subject_id`, `subject_text`) VALUES
	(1, 'javaScript上'),
	(2, 'javaScript下'),
	(3, '模块化开发'),
	(4, '移动端开发'),
	(5, 'node基础'),
	(6, '组件化开发(vue)'),
	(7, '渐进式开发(react)'),
	(8, '项目实战'),
	(9, 'javaScript高级'),
	(10, 'node高级');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;


-- 导出  表 user-1701g1.type 结构
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` char(50) NOT NULL COMMENT '身份ID',
  `type_text` char(50) NOT NULL COMMENT '身份名称（0 管理员 1出题者 2学生）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户身份权限';

-- 正在导出表  user-1701g1.type 的数据：~3 rows (大约)
DELETE FROM `type`;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`id`, `type_id`, `type_text`) VALUES
	(1, '0', '管理员'),
	(2, '1', '出题者'),
	(3, '2', '学生');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;


-- 导出  表 user-1701g1.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` char(50) NOT NULL COMMENT '用户姓名',
  `user_pwd` char(50) NOT NULL COMMENT '用户密码',
  `user_type` char(50) NOT NULL COMMENT '用户身份',
  `uid` char(50) NOT NULL COMMENT '跟登录的用户相对应',
  `token` char(50) NOT NULL COMMENT '用户token',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  user-1701g1.user 的数据：~3 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `user_name`, `user_pwd`, `user_type`, `uid`, `token`) VALUES
	(1, 'lisi', '666', '0', '1', 'd9c2281becb1054bba98838090f4789c'),
	(6, 'zhangsan', '666', '1', '4f355ea4de7cf629b54f31b00c3ab9ae', 'a8c4c8cf34d8881dff792f8568c5e8ab'),
	(7, 'wangwu', '666', '2', '58faab63f3fc2b45fc581d2da3a931b5', '1476122e153dd30ff011d168c83eae87');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- 导出  表 user-1701g1.view_authority 结构
CREATE TABLE IF NOT EXISTS `view_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` char(50) NOT NULL COMMENT '权限ID',
  `view_authority_text` char(250) NOT NULL COMMENT '权限视图',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 正在导出表  user-1701g1.view_authority 的数据：~3 rows (大约)
DELETE FROM `view_authority`;
/*!40000 ALTER TABLE `view_authority` DISABLE KEYS */;
INSERT INTO `view_authority` (`id`, `type_id`, `view_authority_text`) VALUES
	(1, '0', '试卷管理,用户管理,考试管理,班级管理,阅卷管理'),
	(2, '1', '考试管理,阅卷管理'),
	(3, '2', '班级管理');
/*!40000 ALTER TABLE `view_authority` ENABLE KEYS */;


-- 导出  表 user-1701g1.xs 结构
CREATE TABLE IF NOT EXISTS `xs` (
  `student_id` varchar(255) NOT NULL DEFAULT '',
  `student_name` varchar(255) DEFAULT NULL,
  `student_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `grade_id` varchar(255) DEFAULT NULL,
  `s_type` varchar(50) DEFAULT NULL,
  `s_state` varchar(50) DEFAULT '未批',
  `Fraction` int(100) DEFAULT '0',
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='学生';

-- 正在导出表  user-1701g1.xs 的数据：538 rows
DELETE FROM `xs`;
/*!40000 ALTER TABLE `xs` DISABLE KEYS */;
INSERT INTO `xs` (`student_id`, `student_name`, `student_pwd`, `grade_id`, `s_type`, `s_state`, `Fraction`) VALUES
	('19370100073', '郭永鹏', 'Pm626521@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701A', '已批', 88),
	('17382100369', '张婷', '8464Zt*', NULL, '1701A', '已批', 91),
	('162711000869', '张娜', 'Zn990703@', NULL, '1701A', '已批', 70),
	('151611000702', '高诗蕊', 'Gaoshir1028*', NULL, '1701A', '未批', 0),
	('163231000784', '田佳茹', 'W!tjr1', NULL, '1701A', '未批', 0),
	('17382100471', '司瑞雪', 'woaiZIJI2!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701A', '未批', 0),
	('17356100084', '王璐', 'Wangklpl2010@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701B', '已批', 92),
	('18382100119', '翟勋', '1609Azhaixun!', NULL, '1701B', '未批', 0),
	('163231000691', '牛慧涛', 'Nht0725!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701B', '未批', 0),
	('162711000970', '范丹丹', 'Fdd1006!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701B', '未批', 0),
	('163231000592', '郭敏敏', 'Gmm0620*', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701B', '未批', 0),
	('162711001044', '苏祥辉', 'Su150$', NULL, '1701B', '未批', 0),
	('163231000706', '袁世清', 'Ysq1997!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701B', '未批', 0),
	('163231000377', '崔静宏', 'CJH*zilan7', NULL, '1701B', '未批', 0),
	('162711000957', '吴洪洋', 'www*1999*WHY', NULL, '1701B', '未批', 0),
	('162711000940', '侯梦杰', '@Jane1128', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('18382100162', '马兰', '!Ml00162', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231000122', '罗夏扬', 'Lxy20@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('162711000141', '朱高锰', '888888****Zgm', NULL, '1701C', '未批', 0),
	('152031000541', '张诗', '1609Azs!', 'oery4-9h55c-76sdkj-fba5ag', '1701C', '未批', 0),
	('163231000791', '李映儒', 'Lyr1310070068!', NULL, '1701B', '未批', 0),
	('152221000137', '雷梦柯', 'baweiExam@163.com', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701C', '未批', 0),
	('162711000971', '刘焕杰', 'Liu.0606@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('162711000435', '韩英华', 'Hanyinghua123?', NULL, '1701C', '未批', 0),
	('163231000357', '李晓娜', 'LXna@99', NULL, '1701C', '未批', 0),
	('162711000731', '贾国振', '741/852*963.Asdfghjkl;\'', NULL, '1701C', '未批', 0),
	('162711000557', '周骥宇', 'Zhou123.@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701C', '未批', 0),
	('151591000413', '窦永铎', '@DYDlove19990520', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('18382100191', '张珈豪', 'Jiahe102038@', NULL, '1701D', '未批', 0),
	('18382100208', '郜英杰', 'Gyj863591815*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701D', '未批', 0),
	('151991000354', '郑伟浩', 'Zheng5831200*', NULL, '1701D', '未批', 0),
	('163231000281', '杨一帆', 'Yyf1998@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('18382100251', '雷佳', 'Lj521521@', NULL, '1701D', '未批', 0),
	('152121000450', '张搏康', 'Zbk580230@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701D', '未批', 0),
	('163231000741', '闫国程', '@1610Aygc', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('18382100241', '管悦', 'GyGx1006*', NULL, '1701D', '未批', 0),
	('18382100271', '赵倩', 'Zq@120319', NULL, '1701D', '未批', 0),
	('17382100322', '墨潘', '050888Mm@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701D', '未批', 0),
	('162711000465', '张金城', 'Zjc12300*', NULL, '1701D', '未批', 0),
	('162221000234', '董梦全', '@Dmq123', NULL, '1701D', '未批', 0),
	('162231000822', ' 梁俊成', '*Ljv1341670218', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('162711000468', '张金城', 'Zjc12300*', NULL, '1701D', '未批', 0),
	('17382100218', '樊艳蓉', 'Fyr*521', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('18382100085', '边晓雅', 'Bxy*0522', NULL, '1701D', '未批', 0),
	('163231001257', '杨梦伟', '@Ymw0324', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('18382100168', '杜孟芳', 'Dmf1993*', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701D', '未批', 0),
	('163231000105', '葛荷清', 'Ghq123@@', NULL, '1701D', '未批', 0),
	('18381100254', '张克', 'Zk1992/*-+', NULL, '1701E', '未批', 0),
	('18382100268', '张硕', '96144DNz1*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701E', '未批', 0),
	('163231001026', '张少泽', 'Zsz0312@', NULL, '1701E', '未批', 0),
	('1632310000208', '杨超男', 'Ycn#521', 'xoqxd-807vj9-z2r7k-2hcdo', '1701E', '未批', 0),
	('18378100160', '闫江涛', 'Ks19940210*', NULL, '1701E', '未批', 0),
	('18382100173', '盖学强', 'Gxq246368!', NULL, '1701E', '未批', 0),
	('18382100069', '姚震宇', 'Yao930425?', 'xoqxd-807vj9-z2r7k-2hcdo', '1701E', '未批', 0),
	('163231000432', '翟怡梦', 'Zym205650@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('17376100480', '郑豪', 'Ah@123', 'xoqxd-807vj9-z2r7k-2hcdo', '1701E', '未批', 0),
	('17382100202', '李志勇', '@1610Alzy', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('18382100057', '王坤', '@Wk521521', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('162711000732', '陈倩', '@Cq0506', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701E', '未批', 0),
	('17382100434', '谷会林', 'Gu123456789#', NULL, '1701E', '未批', 0),
	('162711000633', '赵文姣', 'Zwj914926*', NULL, '1701E', '未批', 0),
	('162711000729', '魏澳回', '@WEIaohui0726', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('17382100155', '马志强', '2135319WWa ', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701E', '未批', 0),
	('18382100186', '周杰', 'Zj123456!', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('163231000376', '杨仁兵', 'Yrb0321!', NULL, '1701E', '未批', 0),
	('162711001030', '张馨心', 'Zxx@1016304', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('17382100235', '祁云凯', '*Q1i0k8ai', NULL, '1701E', '未批', 0),
	('141381000791', '赵浩冬', '1008611Aa*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701E', '未批', 0),
	('18381100203', '高芳', 'Gfyyzs1378436$', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701E', '未批', 0),
	('151661000441', '丁宇', '@Dy12345', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701E', '未批', 0),
	('162711000777', '刘丽霞', 'Liu980519!', NULL, '1701E', '未批', 0),
	('152001000388', '卢毓儒', 'Bt9524@5', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701E', '未批', 0),
	('151661000756', '陈静', 'Chenjing123*', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701E', '未批', 0),
	('18382100053', '钱家豪', 'Xy1314!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702A', '未批', 0),
	('18382100212', '赵崎', 'ZQm759199521&', NULL, '1702A', '未批', 0),
	('18356100001', '孟佳琦', 'Mjq123*', 'xoqxd-807vj9-z2r7k-2hcdo', '1702A', '未批', 0),
	('17382100387', '徐园园', 'Xy6@66', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702A', '未批', 0),
	('163231000767', '焦娅柠', '@1610Ajyn', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('17382100423', '梁艳', 'Ly@54957628', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702A', '未批', 0),
	('17382100475', '孟旭盈', '@Mxy112698', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702A', '未批', 0),
	('162221000222', '张鑫祎', 'Zxy043015*', 'xoqxd-807vj9-z2r7k-2hcdo', '1702A', '未批', 0),
	('18382100130', '贺瀚彬', 'Bin119119#*', NULL, '1702A', '未批', 0),
	('18382100181', '王鑫磊', '@Wxl134120', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('163231000672', '马好好', 'Mh0129#.', NULL, '1702A', '未批', 0),
	('163231001206', '李喜慧', 'Li@0819', 'xoqxd-807vj9-z2r7k-2hcdo', '1702A', '未批', 0),
	('152121000134', '贾志腾', '@Jzt98', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702A', '未批', 0),
	('18382100105', '胡应', '@1610Ahy', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('18382100215', '陈可欣', 'Ckx1108@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('163231000334', '武媚', 'Wm1003*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702A', '未批', 0),
	('163231000678', '王晓园', 'Wbb97@0512', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('18382100062', '邢琴', 'YyAiMm931128@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702A', '未批', 0),
	('17382100420', '唐宇', 'Ty0844!', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('163231000413', '樊振', 'fZ0526!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702A', '未批', 0),
	('162711000941', '杭一达', 'Hang123..**', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('163231000925', '石瑶宇', 'Syy1611@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702A', '未批', 0),
	('162711000673', '吕师恩', 'L&&sn1', NULL, '1702A', '未批', 0),
	('18382100025', '侯瑞峰', 'HRFdashuaibi1@', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('163231001005', '楚凤沛', '@aaAA11', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702A', '未批', 0),
	('162711000943', '张健榜', 'Bang1228*', NULL, '1702B', '未批', 0),
	('18382100210', '郭小刚', '142580.@Gxg', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702B', '未批', 0),
	('17356100064', '李晓凯', 'Lxk*549426524', NULL, '1702B', '未批', 0),
	('18382100270', '靳苗', 'Jm983125071!', NULL, '1702B', '未批', 0),
	('162711020711', '张聪', 'Zc@123', NULL, '1702B', '未批', 0),
	('18382100127', '张紫薇', 'ZZWzzw123456!!', NULL, '1702B', '未批', 0),
	('18382100279', '冉苗苗', 'Rm1996*', NULL, '1702B', '未批', 0),
	('163231000175', '靳壮壮', '!Jzz131', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702B', '已批', 100),
	('18382100139', '张红红', '630120825@QQ.com', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702B', '未批', 0),
	('162711000921', '赵少康', '@1610Azsk', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1702B', '未批', 0),
	('163231001139', '闫敏', '9BYM*y', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702B', '未批', 0),
	('162221000050', '单春雨', 'WZ3428787fm&', NULL, '1702B', '未批', 0),
	('18378100161', '康杰', 'MuMusmile0925!', 'xoqxd-807vj9-z2r7k-2hcdo', '1702B', '未批', 0),
	('18382100118', '刘辰星', 'XIAObaitu0319**', NULL, '1702B', '未批', 0),
	('18382100294', '杜松光', '@Dsg521314', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702B', '未批', 0),
	('152121000564', '杨锋', 'Yf123*&', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702B', '未批', 0),
	('163231000203', '王子音', 'Wzy@123', NULL, '1702B', '未批', 0),
	('162711000622', '史纪萱', 'SJx1990429*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702B', '未批', 0),
	('163231000852', '闫慧芬', 'Yhf163231000852*', 'xoqxd-807vj9-z2r7k-2hcdo', '1702B', '未批', 0),
	('18382100287', '金鹰志', 'Jyz620512%', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702B', '未批', 0),
	('18382100073', '侯晓圆', 'Yy$13784388824', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701A', '未批', 0),
	('141361000845', '齐炳昌', 'QBCqbc123@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701A', '未批', 0),
	('163231001146', '孙璐', 'Sl1998@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701A', '未批', 0),
	('163231000117', '牛莉', 'Nl0521&&', NULL, '1701A', '已批', 96),
	('17382100372', '杨子源', '@YZYyzy123', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701A', '未批', 0),
	('18382100204', '张哲', 'Zz1609@', NULL, '1701A', '未批', 0),
	('17382100077', '李俊豪', 'Ljh123@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701A', '未批', 0),
	('18382100140', '焦江倩', 'JJQjjq316@', NULL, '1701A', '未批', 0),
	('162231001406', '李晓飞', '5120.LI?dui', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701A', '未批', 0),
	('152221000120', '马子涵', 'Mzh1998@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701A', '未批', 0),
	('151661000528', '蒋淑娟', 'Jsj@1997', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701A', '未批', 0),
	('18382100222', '安彩云', 'Ancaiyun950419*', NULL, '1701A', '未批', 0),
	('162711000550', '张玉英', 'Zyy@521', 'xoqxd-807vj9-z2r7k-2hcdo', '1701A', '未批', 0),
	('18382100048', '李国栋', 'Lgd@891879', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701B', '未批', 0),
	('163231000259', '曹欢', '19980213Ch**', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701B', '未批', 0),
	('162711000561', '尤锦涛', '*1611Atao', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701B', '未批', 0),
	('162711000892', '赵晓铮', 'Zxz666*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701B', '未批', 0),
	('162151000064', '王璐玮', 'Aa1234**', NULL, '1701B', '未批', 0),
	('163231000648', '梁元', 'Ly19991214..&', NULL, '1701B', '未批', 0),
	('163231000655', '李佳', 'liJia*760913', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701B', '未批', 0),
	('162711000431', '孟雅莉', 'mengyali124MYL@', NULL, '1701B', '未批', 0),
	('163231000939', '张冰倩', 'Zbq98076*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701B', '未批', 0),
	('163231001219', '温延会', '@0219Wyh', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701B', '未批', 0),
	('141391000615', '高伟轩', 'Gwx*5921', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701B', '未批', 0),
	('18382100095', '薛帅康', 'Nuo1999.@', NULL, '1701B', '未批', 0),
	('151661000696', '牟灿', '12150645Mc*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701B', '未批', 0),
	('18382100166', '郭青青', '@GUOqq7', NULL, '1701B', '未批', 0),
	('152221000136', '张嘉琪', 'Zjq03251781!', NULL, '1701B', '未批', 0),
	('162711000185', '樊军', 'FJ0774fj@', NULL, '1701B', '未批', 0),
	('152001000515', '郑强', '1500651289@QQ.com', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701B', '未批', 0),
	('163231000246', '布淑倩', 'Aa1*bushuqian', 'xoqxd-807vj9-z2r7k-2hcdo', '1701B', '未批', 0),
	('18382100137', '金旭', 'Jin@0529', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701B', '未批', 0),
	('163231000523', '冯小予', 'Fxyu*4', NULL, '1701B', '未批', 0),
	('18382100157', '李潘红', 'Lph8222!', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701B', '未批', 0),
	('163231000920', '王艳霞', 'Lxk595*', NULL, '1701C', '未批', 0),
	('163221000037', '康金坍', 'ScAuC1130@kkk', NULL, '1701C', '未批', 0),
	('1623231000767', '焦娅柠', '@1610Ajyn', NULL, '1701C', '未批', 0),
	('162711000281', '古泽腾', 'Tity21@qq.com', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231000918', '江琳琳', 'Jk*.1583510652', NULL, '1701C', '未批', 0),
	('163231000698', '尹耀旋', 'yyx1610A!', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701C', '未批', 0),
	('163231000374', '王玮瑶', 'Wwy0106*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('162711000099', '姚子烜', 'Yzx*123', NULL, '1701C', '未批', 0),
	('151521000391', '宋梦磊', 'S*l12345', NULL, '1701C', '未批', 0),
	('163231001212', '谭庆达', 'TQDtqd6*', NULL, '1701C', '未批', 0),
	('163231000427', '姬晓胜', '663866*Jxs', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('163231001207', '闫伟莲', 'Ywl0923@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('17376100586', '韩笑', 'Hx1611@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('18382100094', '要慧勤', 'Hui810*', NULL, '1701C', '未批', 0),
	('151661000708', '刘琪', 'llU.*9951', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('17382100241', '周永强', 'As711029*', NULL, '1701C', '未批', 0),
	('162711000747', '耿增', 'gengzeng1611A@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('163231000286', '牛军霞', 'Niujunxia321@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('163231000756', '胡新玉', '@Hxy163', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('17382100219', '赵越', '2289956458@Qq.com', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('163231000699', '聂鹏', 'NploveGmm99*', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('163301000899', '吴鹏鹏', 'wUPENGJUN521!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231000262', '苏旭', 'Su123*', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('18382100054', '张惠娟', 'ZHJzhj704@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('163231000098', '刘庆芸', 'Lqq@521', NULL, '1701C', '未批', 0),
	('163231000915', '郭铭瑛', 'Gmy199826@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('16321020614', '单寒', 'Sh19991006*', NULL, '1701C', '未批', 0),
	('17382100441', '王美悦', 'Wmy12*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('18382100091', '王雯茂', 'Wwm9213!', NULL, '1701C', '未批', 0),
	('163231001061', '程静', '@cJ19980821', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('18382100023', '张旭飞', 'Zxf@18335405041', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('162711000850', '种筱', 'Cx0709*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('163231001086', '郎玲玲', 'Ling217*', NULL, '1701C', '未批', 0),
	('18382100189', '李仁鹏', '@1610Alrp', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701C', '未批', 0),
	('17382100065', '张志祥', 'Zzx&&9824', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701C', '未批', 0),
	('162711000965', '王琴', 'Wq970223*', NULL, '1701C', '未批', 0),
	('163231000355', '王芳', 'Wf123*', NULL, '1701C', '未批', 0),
	('162711001040', '常津瑜', 'Zxy0221*', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('162711000630', '刘轲', 'LiuKe0327..*', NULL, '1701C', '未批', 0),
	('152121000418', '王琳', 'Wl123@123', NULL, '1701C', '未批', 0),
	('18382100243', '刘士军', 'Aa!11049356603', NULL, '1701C', '未批', 0),
	('18382100175', '李鑫秋', 'Lxq0401@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('17382100068', '孟莹', '?Ying8023.', 'ef5vzf-mk31ka-3ltqao-3ikaf7', '1701C', '未批', 0),
	('162711000252', '苗佳钰', 'KasuganoSora@1984148683.com', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701C', '未批', 0),
	('163231000125', '张鑫', 'z1225736X*m', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('162711000353', '王乐康', 'Wlk2417*', NULL, '1701C', '未批', 0),
	('162711000762', '崔鸥', 'Co*2372081698', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('162711000935', '石旭', 'Sx123*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('16323100025', '程志', 'Cz*8229', NULL, '1701C', '未批', 0),
	('17382100325', '杨立波', 'yANG0212@', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('17382100196', '宋嘉玮', 'Sjw0128*', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701C', '未批', 0),
	('162711000792', '杨婷婷', 'Yttt8*', NULL, '1701C', '未批', 0),
	('17382100341', '党会娟', 'Dang&3443', NULL, '1701C', '未批', 0),
	('163231000454', '张晴', 'Zq5792589!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231001204', '王冰', 'WangBing0615@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231000884', '赵鑫雨', 'Cjy0821*', 'bx4ac-o7304f-xl8k2r-7fco1d', '1701C', '未批', 0),
	('17382100443', '王泽健', 'Wz1@123456', 'r4ksz-uekje5-pu3b4-jqwzc9', '1701C', '未批', 0),
	('163231000603', '刘新雨', 'LXYlxy99!!', NULL, '1701C', '未批', 0),
	('163231000536', '李晓晨', 'Se0412*', NULL, '1701C', '未批', 0),
	('17382100244', '梁鹏飞', '@LPFlpf1', NULL, '1701C', '未批', 0),
	('163231001230', '孙慧', '101218@Sh', 'xoqxd-807vj9-z2r7k-2hcdo', '1701C', '未批', 0),
	('162711000827', '王少辉', 'wSH09173051$', NULL, '1701C', '未批', 0),
	('162711000629', '师风鑫', 'SHIFENGXIN981019!s', NULL, '1701C', '未批', 0),
	('162711000104', '黄富娇', 'Hfj205368*', NULL, '1701C', '未批', 0),
	('163231000495', '丁思羽', 'Sy*963.', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701C', '未批', 0),
	('163231000415', '李伟', '@LW0917041x', NULL, '1701C', '未批', 0),
	('152001000514', '景建海', 'JINGjian1314@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701C', '未批', 0),
	('17382100403', '王君恩', '@Wje1200', NULL, '1701C', '未批', 0),
	('1627111000792', '杨婷婷', 'Yttt8*', NULL, '1701C', '未批', 0),
	('151661000762', '王孟', 'Wm159910?', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('163231000677', '嗯呢', 'Zzm@976632', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701C', '未批', 0),
	('163231000789', '刘慧芳', 'Lhh016*', NULL, '1701C', '未批', 0),
	('163231001166', '郭怡凯', '223Guo*', NULL, '1701C', '未批', 0),
	('17382100329', '孙靓', 'Sl2002!', NULL, '1701C', '未批', 0),
	('18382100111', '秦柯', 'qXk@123520+', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701C', '未批', 0),
	('163231001173', '罗鹏莲', '@Pl1211', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('17382100396', '范国红', 'Fanguohong123!', 'mqz5t-dhqsqk-lz265l-qui8tb', '1701C', '未批', 0),
	('151591000414', '冀占豪', 'Jz0107@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701C', '未批', 0),
	('163231000863', '闫佩云', 'SHinglike486!', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701C', '未批', 0),
	('17382100344', '张凯丽', 'Zkl@19970816', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701C', '未批', 0),
	('18382100131', '倪克灿', 'NIke@0928', 'xoqxd-807vj9-z2r7k-2hcdo', '1702E', '未批', 0),
	('18382100327', '徐龙威', 'Xlw520*..', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701C', '未批', 0),
	('163301001796', '屈明汉', 'Qq!1654371764', NULL, '1701C', '未批', 0),
	('16521000042', '孙炳鑫', 'Tian1130!', NULL, '1701C', '未批', 0),
	('18382100326', '杨瑶瑶', 'Yy*123963', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701C', '未批', 0),
	('18382100195', '郑雷', 'Zl1995*', NULL, '1701D', '未批', 0),
	('17382100090', '苏玉叶', 'Zs811812!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('152221000268', '赵迪', 'Zd1000%', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701D', '未批', 0),
	('163301000944', '杨晋', 'Yj327!', NULL, '1701D', '未批', 0),
	('17382100258', '王伶娟', '@Wlj955', 'xoqxd-807vj9-z2r7k-2hcdo', '1701D', '未批', 0),
	('152221000361', '肖臣', '07133921Xy*', NULL, '1701D', '未批', 0),
	('18382100304', '荆涛', 'King2038692$', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100129', '陈天亮', 'JHwoaini131420#', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('163231000714', '张文龙', 'Zwl1218!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('17382100398', '刘祥祥', '@21Lxx', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701D', '未批', 0),
	('16521000044', '啊就', 'Rasd@1', NULL, '1701D', '未批', 0),
	('18382100106', '张敏', 'Zm@520ljx', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('17382100200', '侯发星', 'Hfx951024*', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100029', '候姣姣', 'Hjj58&', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701D', '未批', 0),
	('18382100112', '薛汾', 'Xue980311@', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100176', '张浩宇', 'Zhy130185@', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100012', '王书玲', 'Wmm20000129@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702E', '未批', 0),
	('16323100792', '李子璇', 'Lzx88@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('162711000632', '许瑞', 'XUrui123!', NULL, '1701D', '未批', 0),
	('17382100377', '魏薇', 'Ww17382100377@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('163221000025', '李越洋', 'Ly971130*', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701D', '未批', 0),
	('162711000710', '张贤', 'Zhangxian1012*', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702E', '未批', 0),
	('18382100316', '党立强', 'Dd1023$', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100249', '吉胜楠', 'Aa123?', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100040', '马艺婷', 'Myt@Wjq@520', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('18382100217', '郝凌凯', '@Hlk2189860', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100103', '靳攀', 'Jinpan1996@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('18382100167', '赵浩宇', 'Zhy061900@', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('162221000332', '康根', '@Kanggen1996', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('163231000848', '孙一昊', 'Sun123,@', NULL, '1701D', '未批', 0),
	('151521000326', '付亚飞', 'FUyafei!0123', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('163241000011', '段钟海', 'Dzh763784@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('162231002340', '马亚辰', 'Ycp12!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('163231000479', '赵莹杰', '@Zyj1026', NULL, '1701D', '未批', 0),
	('163231000389', '吕媛', 'lY965836@', NULL, '1701D', '未批', 0),
	('162231001389', '高迪迪', 'Zxdyr6423649*', 'xoqxd-807vj9-z2r7k-2hcdo', '1701D', '未批', 0),
	('18382100082', '周真真', '1999@Zz', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('17356100045', '孙小凝', 'As123@', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('18382100263', '杨昕宇', 'Yxy13280358073!!', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('18382100223', '吴光宇', 'Wgy.4284100$', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('163231000094', '王诗璇', 'WSXwsx123456@', NULL, '1701D', '未批', 0),
	('163231000159', '杨彩平', 'Ycp12!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('163231000819', '闻悦', 'Wenyue0813@', NULL, '1701D', '未批', 0),
	('18382100163', '韩晓爽', 'Hxs@1993', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1701D', '未批', 0),
	('18382100193', '邓涢桐', 'Dengyuntong123!', NULL, '1701D', '未批', 0),
	('152221000145', '王欣月 ', 'Ww2*Ww', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1701D', '未批', 0),
	('18382100141', '王红婷', 'AAAa1!', NULL, '1701D', '未批', 0),
	('163231000373', '张伟杰', 'Zwj0525@dyd', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1701D', '未批', 0),
	('162221000462', '陈沭江', '0218Csj@', NULL, '1702D', '未批', 0),
	('17382100469', '王用封', 'Wyf971124#', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702D', '未批', 0),
	('163231000908', '武辰淇', 'wcqWCQ111@', NULL, '1702D', '未批', 0),
	('18382100076', '景星萌', 'Jx1!123456789', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('163231000825', '郭骁锐', 'Gxr163231000825!', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('16323100443', '孙鹏辉', '@Sun1012', NULL, '1702D', '未批', 0),
	('152221000160', '高雪佳', 'GXJgxj123@', 'xoqxd-807vj9-z2r7k-2hcdo', '1702E', '未批', 0),
	('163231000887', '张翠丽', '57351EXO61zcl@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1702D', '未批', 0),
	('17382100384', '王诗雨', 'woxihuanniA0@', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702D', '未批', 0),
	('18382100108', '石龙', '@Sl176365633160.0', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('18382100284', '焦旭洋', 'Jiaoxuyang520@', NULL, '1702D', '未批', 0),
	('18382100324', '韩磊', '$Hl426534', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('17382100007', '刘亚斌', 'Liu@940416', NULL, '1702D', '未批', 0),
	('163231000822', '史士洁', '1336853296@QQ.com', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702D', '未批', 0),
	('163231000336', '曹柯熠', '@CaoYi68619', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702D', '未批', 0),
	('162221000431', '冯丹', 'AAaa11@@', NULL, '1702D', '未批', 0),
	('18382100260', '周凯', 'zhoukai@1611B', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('18382100283', '张颖', 'Zy11176625*', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1702D', '未批', 0),
	('163231000851', '张文秀', '@Zhang666', NULL, '1702E', '未批', 0),
	('163231000809', '王淑琴', 'Wsq1996@', NULL, '1702D', '未批', 0),
	('1663231000848', '孙一昊', 'Sun123!', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1702D', '未批', 0),
	('17382100457', '乔卿振冬', 'Qdd19950920$', NULL, '1702D', '未批', 0),
	('163231000562', '孙瑜锋', '@SunYuFeng0918', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702D', '未批', 0),
	('162711000547', '高彩鹏', 'Gaocaipeng521@', NULL, '1702D', '未批', 0),
	('162221000168', '马芸', 'My@970404', NULL, '1702D', '未批', 0),
	('162711000760', '孙佳', 'Sj199604@', NULL, '1702D', '未批', 0),
	('17382100501', '王保强', 'Wbq@0903', NULL, '1702D', '未批', 0),
	('17382100463', '梁博文', 'Lbweng159357*', NULL, '1702D', '未批', 0),
	('17382100130', '马帅帅', 'Mss521+.@', 'xoqxd-807vj9-z2r7k-2hcdo', '1702D', '未批', 0),
	('18382100349', '郑王飞', '482013Exo?', NULL, '1702D', '未批', 0),
	('163231000184', '韩原', 'HY917721810@.com', NULL, '1702D', '未批', 0),
	('18382100329', '兰佳硕', 'lanjiaSHUO@1997', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702D', '未批', 0),
	('163231000434', '张霞', '@Zx119111', NULL, '1702D', '未批', 0),
	('163231000631', '赵帅', 'ZSww1.*', NULL, '1702D', '未批', 0),
	('151591001740', '强曌', 'Qz521!', NULL, '1702D', '未批', 0),
	('163231100006', '王卿松 ', 'Wqs02182714@', NULL, '1702D', '未批', 0),
	('18382100064', '吕方胜', 'Lfs565261799!', NULL, '1702D', '未批', 0),
	('163231000525', '张嫚嫚', 'Zmm0107@', NULL, '1702D', '未批', 0),
	('18382100052', '戚赛', '@WOaiwojia521', NULL, '1702D', '未批', 0),
	('162711000966', '武家媛', 'WUwu55%%', NULL, '1702D', '未批', 0),
	('18382100198', '夏昌文', 'Xia1971501#', NULL, '1702D', '未批', 0),
	('163231001090', '田益莎', 'Tian1996*', NULL, '1702D', '未批', 0),
	('162711000828', '张尚攀', 'ZSp5*_', NULL, '1702D', '未批', 0),
	('163231000734', '张子瑞', 'ZZRqwe120@', NULL, '1702D', '未批', 0),
	('163231000371', '卫玮', 'WwSs0102*.', NULL, '1702E', '未批', 0),
	('163231000054', '程鑫', '@CX126x', NULL, '1702D', '未批', 0),
	('17382100406', '刘振宁', 'LLll11**', NULL, '1702D', '未批', 0),
	('17382100474', '周思丽', '@Zsl00', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702E', '未批', 0),
	('151991000858', '秦启贤', 'Qq980219!', NULL, '1702E', '未批', 0),
	('18382100252', '刘斌斌', 'Lbb0000#', NULL, '1702E', '未批', 0),
	('152121000306', '王高超', 'Ab1234@', NULL, '1702E', '未批', 0),
	('17382100425', '石鑫琪', 'SHIshixinqi1013%', NULL, '1702E', '未批', 0),
	('163231000296', '刘凯亮', 'Liu1998*', NULL, '1702E', '未批', 0),
	('163231000351', '陈婉莹', '1008Aa@', NULL, '1702E', '未批', 0),
	('162711000916', '高博仑', 'Gaobolun1904!', NULL, '1702E', '未批', 0),
	('163231000108', '马梦悦', 'Mm00&&', NULL, '1702E', '未批', 0),
	('18382100109', '刘敢', 'Lg0401^', NULL, '1702E', '未批', 0),
	('17382100385	', '万呵呵', 'Whh1126@', NULL, '1702E', '未批', 0),
	('18382100297', '王朝晖', 'Wzh1314521@', NULL, '1702E', '未批', 0),
	('18382100288', '赵晓怡', 'Zhao0410@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702E', '未批', 0),
	('162711000703', '乔惠', 'Qiaohui*0509', 'r4ksz-uekje5-pu3b4-jqwzc9', '1702E', '未批', 0),
	('163231001295', '李姿静', 'Lzj123@', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1702E', '未批', 0),
	('162711000186', '韩淑先', 'HSXhsx123!!!', NULL, '1702E', '未批', 0),
	('152121000028', '韩涛烽', 'Hh1@Hh1@', NULL, '1702E', '未批', 0),
	('18382100187', '钟元', 'Zhong1997$', NULL, '1702E', '未批', 0),
	('16334100023', '孙睿', 'SUNrui@1221', NULL, '1702E', '未批', 0),
	('18382100031', '宋英杰', '!Syj18595802007', NULL, '1702E', '未批', 0),
	('163231000461', '房磊', 'FANGlei21*', NULL, '1702E', '未批', 0),
	('18382100093', '王振', 'zhixiang123A*', NULL, '1702E', '未批', 0),
	('17382100327', '黄雪', 'Hx1018*', NULL, '1702E', '未批', 0),
	('163221000007', '何智博', 'HZBqq123!', NULL, '1702E', '未批', 0),
	('18382100201', '李飞飞', 'Lff111*', 'jtgxii-d2mc-5jcojq-px8uoa', '1702E', '未批', 0),
	('17382100479', '原超宁', 'Ycn179897834@', NULL, '1702E', '未批', 0),
	('151561000188', '刘爽', 'Ls123%&', NULL, '1702E', '未批', 0),
	('18382100203', '李宛卿', '@LWQlwq18382100203', NULL, '1702E', '未批', 0),
	('163301001171', '王鹏', 'Wp19970817@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702E', '未批', 0),
	('162221000111', '程建业', 'Cjy1997@', NULL, '1702E', '未批', 0),
	('141391001035', '胡瑞杰', 'Hu@150310', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1702E', '未批', 0),
	('18382100250', '何苗苗', 'Hm6@233', NULL, '1702E', '未批', 0),
	('151561000105', '邢增辉', 'HYKxzh1@', NULL, '1702E', '未批', 0),
	('163231000850', '崔莉莉', 'Jacksonyee980426@', 'tjdbk9-r8dbn8-4wsck-c7akdb', '1702E', '未批', 0),
	('18382100265', '韩若男', 'HANhan123@', NULL, '1702E', '未批', 0),
	('163231000913', '杨艳', 'Yy521@', NULL, '1702E', '未批', 0),
	('18382100405', '丁鹏飞', 'Dpf1230.@', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1702E', '未批', 0),
	('152121000629', '李鹏', 'Lp@123..', NULL, '1702E', '未批', 0),
	('18382100619', '孙豪浩', '1701A@shh', NULL, '1702E', '未批', 0),
	('16271100732', '陈倩', '@Cq0506', 'mqz5t-dhqsqk-lz265l-qui8tb', '1702E', '未批', 0),
	('18382100172', '程鹏', 'Qq*995809742', NULL, '1702E', '未批', 0),
	('18382100006', '马俊杰', 'Mjj18382100006@', NULL, '1702E', '未批', 0),
	('163231000195', '申培培', 'Spp0423&', NULL, '1702E', '未批', 0),
	('17382100459', '左怀攀', '701Az1@', NULL, '1702E', '未批', 0),
	('163231001088', '邢豆豆', 'SUNrui@1221', NULL, '1702E', '未批', 0),
	('18382100177', '高炎鑫', 'GAOgao123@', NULL, '1702E', '未批', 0),
	('151661000744', '杨珊', 'Ys000!', NULL, '1701E', '未批', 0),
	('162711000492', '乔富', 'QIAOFUqiaofu??1233', NULL, '1702E', '未批', 0),
	('162711000709', '乔亚茹', 'Qyr123&&', NULL, '1702E', '未批', 0),
	('17382100229', '高素芳', 'Gsf123&&', NULL, '1702E', '未批', 0),
	('162711000926', '杨丽娜', 'YLNyln123@', NULL, '1702E', '未批', 0),
	('18382100160', '赵子中', 'Zzz305379801@', NULL, '1702E', '未批', 0),
	('18378100053', '杨洋', 'YANG2*yang', NULL, '1702E', '未批', 0),
	('18382100185', '弓哲媛', '492078251Gzy@', NULL, '1702E', '未批', 0),
	('163231000428', '位贺', 'Wh@03291238', NULL, '1702E', '未批', 0),
	('163231000099', '周晨芳', 'Zcf41#', NULL, '1702E', '未批', 0),
	('163231000317', '王兆颖', 'WZY123wzy&', NULL, '1702E', '未批', 0),
	('152121000304', '孙磊', '@Sl19951016', NULL, '1702E', '未批', 0),
	('18382100171', '赵宇森', 'Zys?5@', NULL, '1702E', '未批', 0),
	('19370100023', '杜磊', 'Du960213@', NULL, '1702E', '未批', 0),
	('163231000541', '丁文豪', 'Ding607914@', NULL, '1702E', '未批', 0),
	('15201100005190717', '辛小龙', '@Xxl000', NULL, '1702E', '未批', 0),
	('18382100227', '王银虎', 'Wyh666666@', NULL, '1702E', '未批', 0),
	('18382100321', '王超', 'Qwe@003', NULL, '1702E', '未批', 0),
	('162711000405', '徐彪', 'Aa!19970326', NULL, '1702E', '未批', 0),
	('162221000093', '刘鲍', 'Liubao521@', NULL, '1702E', '未批', 0),
	('152031000058', '韩明阳', 'Hmy123@', NULL, '1702E', '未批', 0),
	('162711000755', '窦晓楠', 'Dxn@515', NULL, '1702E', '未批', 0),
	('18382100590', '余娟娟', 'Yu51921$', NULL, '1702E', '未批', 0),
	('18382100267', '刘录', '@Qwe123', NULL, '1702E', '未批', 0),
	('1702E', '郭家雨', 'Gjy991128@', NULL, '1702E', '未批', 0),
	('18389100320', '李晓同', '112566&Tong', NULL, '1702E', '未批', 0),
	('18382100622', '张鑫', 'zx241X*', NULL, '1702E', '未批', 0),
	('18382100602', '孔令芳', '@Klf19960606', NULL, '1702E', '未批', 0),
	('162711000865', '宋国兴', '@Songguoxing1', NULL, '1702E', '未批', 0),
	('162711000915', '付饶', 'l@F315', NULL, '1702E', '未批', 0),
	('163231000314', '林晓寅', 'Lxy16@', NULL, '1702E', '未批', 0),
	('151461000021', '韩岳江', 'Woaini1314!', NULL, '1703A', '未批', 0),
	('18382100296', '李梦雅', '864534107@qq.COM', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('151551000083', '李明慧', 'Li@1502A0103', NULL, '1703A', '未批', 0),
	('18382100571', '杜晋', 'Dj1701@', NULL, '1703A', '未批', 0),
	('163231000116', '张瑞雪', 'Qwe@003', NULL, '1703A', '未批', 0),
	('18382700183', '豆皑旗', 'Dou918@', NULL, '1703A', '未批', 0),
	('18382100375', '赵张宝', 'Zzb02122139!', 'jtgxii-d2mc-5jcojq-px8uoa', '1703A', '未批', 0),
	('18382100150', '刘垚文', '@Lliu1', NULL, '1703A', '未批', 0),
	('151661000774', '李源', '@Qq090504', NULL, '1703A', '未批', 0),
	('18382100360', '单彩风', '@Scf822710', 'jtgxii-d2mc-5jcojq-px8uoa', '1703A', '未批', 0),
	('18382100587', '韩娜', '09084123Hn@', NULL, '1703A', '未批', 0),
	('18382100246', '崔元泽', '271178790Aa$', NULL, '1703A', '未批', 0),
	('163231000272', '李保垒', 'Qwe@003', NULL, '1703A', '未批', 0),
	('162711000749', '卢凯', 'Lukai@123', NULL, '1703A', '未批', 0),
	('152121000597', '李享', 'Diannao512!', NULL, '1703A', '未批', 0),
	('163231000022', '赵浩男', 'Zhn@981228', NULL, '1703A', '未批', 0),
	('162711000885', '全李帆', 'Fanfan@981004', NULL, '1703A', '未批', 0),
	('163231001012', '柴若男', 'Crn0913?', NULL, '1703A', '未批', 0),
	('163231000133', '刘文改', '0525@Liu', NULL, '1703A', '未批', 0),
	('162711000963', '郭喜凤', 'GXFgxf1205@', NULL, '1703A', '未批', 0),
	('18382100038', '王红英', '1qaz!QAZ', NULL, '1703A', '未批', 0),
	('163231000038', '董竞泽', 'Dongjingze0325@', NULL, '1703A', '未批', 0),
	('162711000548', '任玥宁', 'Ryn199764!', NULL, '1703A', '未批', 0),
	('151531000142', '雷津钞', 'Zhf2427@Ljc..', NULL, '1703A', '未批', 0),
	('162711000962', '张雷', 'Zhanglei666!', NULL, '1703A', '未批', 0),
	('1627110000954', '徐赢', 'Aa1!15135476469', NULL, '1703A', '未批', 0),
	('163231000165', '郝金萍', 'Hjp980326?', NULL, '1703A', '未批', 0),
	('152121000300', '王庠', 'WX970111wx@', 'mqz5t-dhqsqk-lz265l-qui8tb', '1703A', '未批', 0),
	('151601000334', '何运正', 'Heyunzheng123@', NULL, '1703A', '未批', 0),
	('163231000149', '朱彦睿', 'Yr885640?', NULL, '1703A', '未批', 0),
	('163231000214', '张方云', 'Zjy324@', NULL, '1703A', '未批', 0),
	('163231000972', '高雅楠', '961112Gyn*', NULL, '1703A', '未批', 0),
	('162231001313', '刘中保', 'Lzb@123', NULL, '1703A', '未批', 0),
	('152121000311', '王胜旋', '123456Wsx!', NULL, '1703A', '未批', 0),
	('162221000142', '崔淑娴', 'Xiaoxian2?', NULL, '1703A', '未批', 0),
	('162711000376', '赵海江', 'Zhaohaijiang666!', NULL, '1703A', '未批', 0),
	('17382100456', '刘莹', 'Ly828@', NULL, '1703A', '未批', 0),
	('151591001273', '吴建', 'wu0805JIAN$', 'r4ksz-uekje5-pu3b4-jqwzc9', '1703A', '未批', 0),
	('18382100512', '郝赟赟', 'Hyy986265417@', 'jtgxii-d2mc-5jcojq-px8uoa', '1703A', '未批', 0),
	('18382100049', '王宏平', '971223Whp!', NULL, '1703A', '未批', 0),
	('18382100213', '原文宜', 'Ywy990713!', NULL, '1703A', '未批', 0),
	('163231000673', '胡雪阳', 'HXYhxy00@', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703A', '未批', 0),
	('17382100487', '樊国庆', 'Fz1004$', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703A', '未批', 0),
	('18382100307', '何进', 'HJin1121!', NULL, '1703A', '未批', 0),
	('18382100371', '叶文程', 'qQ1!486255', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	(' 18382100405', '丁鹏飞', 'Dpf1230.@', NULL, '1703A', '未批', 0),
	('17382100199', '陈家岐', 'Cjq914?', NULL, '1703A', '未批', 0),
	('18382100154', '王倩', '@Wq19930609', NULL, '1703A', '未批', 0),
	('162711001014', '沈丽丽', '$And12', NULL, '1703A', '未批', 0),
	('163231000136', '郭丽雯', 'Gl0528?', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703A', '未批', 0),
	('162711000671', '郭晟', 'Aming@0812', NULL, '1703A', '未批', 0),
	('1838210272', '薛艳玲', 'Xue7024?', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703A', '未批', 0),
	('18382100352', '唐小彬', 'Tb@0208', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100428', '王昱鑫', 'Wyx8714@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100300', '王博', 'Txh**963.', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100466', '李晓明', 'Xm07060627!', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100426', '曹品', 'Leslie&0912', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100120', '马进凯', '@Mjk1483362775', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703A', '未批', 0),
	('18382100234', '张家兴', 'Zjx659431@', NULL, '1703A', '未批', 0),
	('18382100381', '王贞尧', 'Wzy0202$', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100411', '陈永坤', 'Chyk131525&', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('163231000403', '刘梦杰', 'Lmj@0928', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('18382100415', '张婉莹', 'Zwy962503@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703A', '未批', 0),
	('163301002285', '肖沛林', 'Xpl10@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100439', '赵思荣', '2698926@Ly', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100471', '刘子盟', 'Ee527832@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('163231000021', '郭雅静', 'Gyj@123456', NULL, '1703B', '未批', 0),
	('163231100305', '张宝特', 'Te123456&', NULL, '1703B', '未批', 0),
	('163321001305', '张宝特', 'Te123456&', NULL, '1703B', '未批', 0),
	('17382100288', '李政帅', 'LZSlzs123@', NULL, '1703B', '未批', 0),
	('163231000600', '赵竹苗', 'Zzm00@', NULL, '1703B', '未批', 0),
	('18382100199', '张欢', '5561854qQ@', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703B', '未批', 0),
	('163231000487', '李新宇', '1612A@lxy', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703B', '未批', 0),
	('18382100933', '韩志刚', '1612A@hzg', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703B', '未批', 0),
	('163254000882', '孔令汝', '1612a@KLR', NULL, '1703B', '未批', 0),
	('17381100231', '李想', 'Lx3344?', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703B', '未批', 0),
	('18382100063', '杨晨', 'Yc1224@', 'we0eya-r2td2b-2h4yhg-ggxp1vf', '1703B', '未批', 0),
	('163231001062', '潘德平', 'Pd12345&', NULL, '1703B', '未批', 0),
	('152221000200', '王浩', 'Wanghao@520', 'xoqxd-807vj9-z2r7k-2hcdo', '1703B', '未批', 0),
	('18382100425', '张猛', 'Zh1@123', NULL, '1703B', '未批', 0),
	('163231000953', '董明宇', 'Dongmingyu123@', NULL, '1703B', '未批', 0),
	('163231000341', '方格士', 'Fgs&0319', NULL, '1703B', '未批', 0),
	('18382100225', '杨超', 'Yang2980680@', NULL, '1703B', '未批', 0),
	('152221000014', '刘伟杰', 'Ll1701??', NULL, '1703B', '未批', 0),
	('163231000375', '兰剑剑', 'Lj0321**', NULL, '1703B', '未批', 0),
	('18382100332', '张宇杰', '@1242380537qq.COM', NULL, '1703B', '未批', 0),
	('163231000026', '冯少坤', '@Asd1001010010', NULL, '1703B', '未批', 0),
	('18382100320', '李雪尧', '$aA8971178', NULL, '1703B', '未批', 0),
	('18382100420', '杨质瑞', '523293511@QQ.com', NULL, '1703B', '未批', 0),
	('163231000808', '张慧', 'Zhanghui423!', NULL, '1703B', '未批', 0),
	('163231000727', '冯琳娜', 'Alina1207&', NULL, '1703B', '未批', 0),
	('18382100156', '付琳琳', 'Qx950209@', NULL, '1703B', '未批', 0),
	('151661000691', '杨鹏程', 'ABCabc123$', NULL, '1703B', '未批', 0),
	('18382100142', '刘嘉鹏·', 'Ljp142@', NULL, '1703B', '未批', 0),
	('163231000027', '吴俊威', 'Ww!16323', NULL, '1703B', '未批', 0),
	('163231000014', '李宁', 'A@s12.21', NULL, '1703B', '未批', 0),
	('18382100527', '胡芮宾', 'Hu2401648065@', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('17382100413', '张磊', 'Zl1701b@', NULL, '1703B', '未批', 0),
	('162711000776', '马爱智', 'maZ521@', NULL, '1703B', '未批', 0),
	('18382100043', '田晓岚', 'Tx!123', NULL, '1703B', '未批', 0),
	('163231001305', '张宝特', 'Te123456?', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100435', '韩金洪', '1409274586@Qq', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('160231001230', '孙慧', 'Sh10121442@', 'xoqxd-807vj9-z2r7k-2hcdo', '1703B', '未批', 0),
	('162231000042', '王聪慧', 'Wang*176', NULL, '1703B', '未批', 0),
	('163231001321', '申丹丹', 'QQqq@2898604625', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100479', '李向阳', 'Njx11170?', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100389', '王霞', 'xiaG0101@', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18381100574', '邢长江', 'Xcj123!00', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('19370100039', '原育英', 'QQqq@936464896', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100258', '张永琦', 'Zyq12276519&', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100386', '赵立莹', 'Zhao0648@', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100331', '张鸿飞', 'Zhf270314!', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100335', '常铄', '$Chang123', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100950', '武津向', '!1Qq123456', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100255', '蔡丽明', 'Cai121&&', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100387', '桑荣荣', 'Srr990823...@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100490', '金容旭', 'Jrx720328@', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100525', '霍邓心', 'Aa@10133524', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100463', '秦瑶瑶', '@Qyy980514', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('18382100161', '张淼', 'ZM8281c&', NULL, '1703B', '未批', 0),
	('162601000144', '王子龙', 'Wang1997*', 'j4pro7-8fe63v-f7dhkk-uuj2or', '1703B', '未批', 0),
	('163231000123', '王启超', 'Ww1?1208', NULL, '1703B', '未批', 0),
	('16334100090', '董晨倩', 'Dcq123$', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0),
	('162711000838', '候雅坤', 'Hyk0818?', '', '1703B', '未批', 0),
	('163231000923', '张悦', 'Zy94264!', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('19370100016', '刘建建', 'Aa123.!', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100021', '曹宝', '@Caobao369369', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('16331100002', '邢恒瑞', 'Xinghengrui0@', 'jtgxii-d2mc-5jcojq-px8uoa', '1703B', '未批', 0),
	('18382100372', '徐国鑫', 'Xu@315895238', 'bx4ac-o7304f-xl8k2r-7fco1d', '1703B', '未批', 0);
/*!40000 ALTER TABLE `xs` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

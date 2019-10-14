'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  // const auth = middleware.oauth();

  // 登录
  router.post('/user/login', controller.user.user);

  // 获取页面视图权限
  router.post('/getViewAuthorys', controller.user.getViewAuthority);

  // 用户登陆
  // router.post('/user/login', controller.user.login);
  // 用户注册
  router.post('/user/registry', controller.user.registry);
  // 添加用户
  router.post('/user/addUser', controller.user.addUser);
  // 更新用户
  router.post('/user/updateUser', controller.user.updateUser);
  // 获取用户名
  router.get('/user/getUserInfo', controller.user.getUserInfo);
  // 获取用户权限类型列表
  router.get('/user/userType', controller.user.userType);
  // 获取用户数据
  router.get('/user/userList', controller.user.userList);
  // 上传头像
  router.post('/user/upload', controller.user.userUpdate);
  // 添加用户权限
  router.post('/user/addUserType', controller.user.addUserType);
  /** ******************* 用户管理 **************************/

  // 添加API接口权限
  router.post('/authority/add', controller.examination.AddAuthority);

  /** ******************* 试题管理 **************************/

  router.get('/exam_manage/exam_subject', controller.questions.examSubject); // 考试课程 (javascript上,javascript下)
  router.get('/exam_manage/exam_type', controller.questions.examType); // 考试类型 (周考1，周考2，……)
  router.get('/exam_manage/Topic_types', controller.questions.topicType); // 题目类型 (选择题，填空题)
  router.get('/exam_manage/add_questions/add', controller.questions.add); // 试题管理/添加试题

  // 试题管理——>试题分类
  router.get(
    '/exam_manage/exam_classification',
    controller.questions.topicType
  ); // 初始渲染试题分类
  router.post('/exam_manage/add_type', controller.questions.addType); // 试题分类里的添加类型

  // 试题管理——>查看试题
  router.get('/exam_manage/exam_watch', controller.questions.examWatch); // 查看试题 初始渲染
  router.post('/exam_manage/exam_watch/search', controller.questions.search); // 试题分类里的添加类型按条件搜索

  // 试题管理——>编辑提交
  router.post(
    '/exam_manage/exam_watch/editSubmission',
    controller.questions.submission
  ); // 编辑提交

  /** ******************* 考试管理 **************************/
  // 添加考试列表;
  router.post('/exam/addExam', controller.exam.addExam);
  // 获取试卷列表
  router.get('/exam/examList', controller.exam.getExamList);
  // 考试试题搜索
  router.post('/exam/search', controller.exam.examSearch);
  // 查询考试类型列表
  router.get('/exam/examTypeList', controller.exam.examTypeList);

  /** ******************* 班级管理 **************************/

  // 获取教室列表
  router.get('/grade/gradeList', controller.grade.getGradeList);
  // 获取课程列表
  router.get('/grade/getSubjectList', controller.grade.getSubjectList);
  // 获取班级数据
  router.get('/grade/roomList', controller.grade.roomList);
  // 添加教室
  router.post('/grade/addGrade', controller.grade.addGrade);
  // 添加班级
  router.post('/grade/addRoom', controller.grade.addRoom);
  // 添加课程
  router.post('/grade/addSubject', controller.grade.addSubject);
  // 修改教室数据
  router.post('/grade/updateGrade', controller.grade.updateGrade);
  // 删除教室数据
  router.get('/grade/removeGrade', controller.grade.removeGrade);
  // 删除学生数据
  router.get('/grade/removeStudent', controller.grade.removeStudent);
  // 删除班级
  router.get('/grade/removeRoom', controller.grade.removeRoom);
  // 查询学生列表数据
  router.get('/grade/getStudentList', controller.grade.getStudentList);
  // 添加学生
  router.post('/grade/addStudent', controller.grade.addStudent);
  // 搜索学生
  router.post('/grade/searchStudent', controller.grade.searchStudent);

  /** ******************* 批卷管理 **************************/
  // 批卷
  router.get('/testquestions/Marking', controller.usermanagement.Marking);
  // 筛选
  router.post('/testquestions/getClass', controller.usermanagement.getClass);
  // 获取批卷试题
  router.post(
    '/testquestions/getquestions',
    controller.usermanagement.getquestions
  );
  // 改分数
  router.post(
    '/testquestions/Fractions',
    controller.usermanagement.Fractions
  );
};

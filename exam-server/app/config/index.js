'use strict';

const md5 = require('md5');

// 密码加密
module.exports.encryptPassword = function(pwd) {
  const password = JSON.stringify({
    iss: 'wzgc',
    pwd,
  });
  return md5(password);
};

// token加密
exports.createToken = uid => {
  const token = JSON.stringify({
    iss: 'wzgc',
    tim: +new Date(),
    uid,
  });
  return md5(token);
};

module.exports.createQuestionsID = function() {
  const QuestionsID = JSON.stringify({
    iss: 'bwwz',
    tim: new Date().getTime(),
    uid: Math.floor(Math.random() * 100),
  });
  return md5(QuestionsID);
};

module.exports.createUserID = function() {
  const QuestionsID = JSON.stringify({
    iss: 'bwwz',
    tim: new Date().getTime(),
    uid: Math.floor(Math.random() * 100),
  });
  return md5(QuestionsID);
};

// 添加路由白名单
module.exports.RouterWhiteList = [
  '/login',
  '/mian',
  '/main/exam/addQuestions',
  '/main/exam/questionsType',
  '/main/exam/watchQuestions',
  '/main/user/addUser',
  '/main/user/showUser',
  '/main/questions/addExam',
  '/main/questions/list',
  '/main/class/grade',
  '/main/class/room',
  '/main/class/student',
  '/main/await/classlist',
  '/home',
  '/',
];

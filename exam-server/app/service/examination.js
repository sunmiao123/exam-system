'use strict';

const Service = require('egg').Service;
const { createToken } = require('../config');

class ExaminationService extends Service {
  async index() {
    const $sql = 'select * from Examination';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  // 获取考试类型数据
  async getExamTypeList() {
    const result = await this.app.mysql.select('exam_type');
    return result;
  }
  // 获取试题信息列表
  async getQuestions() {
    const result = await this.app.mysql.select('questions_type');
    return result;
  }

  // 搜索数据库
  async searchQuestions(examType, questionType) {
    console.log(examType, questionType);
    const result = await this.app.mysql.select('questions_type', {
      where: {
        questions_type_text: questionType,
        exam_type: examType,
      },
    });
    return result;
  }

  // 添加API接口权限
  async AddAuthority(AuthorityType) {
    const uid = createToken();
    const {
      api_authority_text,
      api_authority_url,
      api_authority_methods,
    } = AuthorityType;

    const result = await this.app.mysql.insert('api_authority', {
      api_authority_id: uid,
      api_authority_text,
      api_authority_url,
      api_authority_methods,
    });
    return result;
  }
}

module.exports = ExaminationService;

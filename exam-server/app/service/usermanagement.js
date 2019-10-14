'use strict';
const Service = require('egg').Service;

class UserManagementService extends Service {
  // 批卷
  async Marking() {
    const results = await this.app.mysql.select('classroom');
    return results;
  }

  // 筛选
  async getClass(classname) {
    const $sql = `select * from xs where s_type="${classname}"`;
    const results = await this.app.mysql.query($sql);
    return results;
  }

  async getquestions(s_type) {
    const $sql = `
    select  sdsds,title,questions_type_text,questions_answer from classroom,questions
    where classroom.r_name='${s_type}' 
   and  classroom.sdsds=questions.subject_text
   `;
    const results = await this.app.mysql.query($sql);
    return results;
  }

  // 改分数
  async Fractions(student_name, Fraction) {
    const $sql = ` UPDATE xs SET  Fraction='${Fraction}' WHERE student_name='${student_name}' `;
    const results = await this.app.mysql.query($sql);
    return results;
  }

  async setstate(student_name) {
    const $sql = ` UPDATE xs SET  s_state='已批' WHERE student_name='${student_name}' `;
    const results = await this.app.mysql.query($sql);
    return results;
  }
}

module.exports = UserManagementService;

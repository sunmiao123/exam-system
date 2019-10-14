'use strict';

const Service = require('egg').Service;

class ExamService extends Service {
  // 查询考试类型列表
  async examTypeList() {
    const $sql = 'select * from exam_type';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加考试
  async addExam(params) {
    const {
      exam_title,
      subject_id,
      exam_id,
      examination_startTime,
      examination_endTime,
      user_name,
      question_sum,
    } = params;
    console.log(
      exam_title,
      subject_id,
      exam_id,
      examination_startTime,
      examination_endTime,
      user_name,
      question_sum
    );
    const $sql = `insert into exam (exam_title,subject_id,exam_id,examination_startTime,examination_endTime, user_name, question_sum) values ("${exam_title}","${subject_id}","${exam_id}","${examination_startTime}","${examination_endTime}","${user_name}","${question_sum}")`;
    const result = this.app.mysql.query($sql);
    return result;
  }

  // 获取考试类型列表
  async getExamList() {
    const $sql =
			'select exam.id,exam_title,exam_type.type_name,subject_text,examination_startTime,examination_endTime,user_name,question_sum from exam,exam_type,subject where exam.subject_id = subject.subject_id and exam.exam_id = exam_type.tid';
    const result = this.app.mysql.query($sql);
    return result;
  }
  // 搜索考试
  async searchExam(exam_value, course_value) {
    console.log(exam_value, course_value);
    const $sql = `select * from exam where subject_id="${course_value}" and exam_id="${exam_value}"`;
    const result = this.app.mysql.query($sql);
    return result;
  }
}

module.exports = ExamService;

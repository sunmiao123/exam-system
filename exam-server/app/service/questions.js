'use strict';
const { Service } = require('egg');

class QuestionsService extends Service {
  // 添加试题分类
  async subjectFn() {
    const $sql = 'select * from subject';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async examTypeFn() {
    const $sql = 'select * from exam_type';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async topicTypeFn() {
    const $sql = 'select * from questions_type_text';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  // 添加试题
  // 添加试题
  async addFn({
    title,
    subject_text,
    questions_type_text,
    questions_answer,
    exam_type,
    user_id,
    questions_theme,
  }) {
    const $sql =
			'insert into questions (title,subject_text,questions_type_text,questions_answer,exam_type,user_id,questions_theme) values (?,?,?,?,?,?,?)';
    const result = await this.app.mysql.query($sql, [
      title,
      subject_text,
      questions_type_text,
      questions_answer,
      exam_type,
      user_id,
      questions_theme,
    ]);
    return result;
  }
  // 添加类型
  async addTypeFn(questions_type_id, questions_type_text) {
    const $sql =
			'insert into questions_type_text (questions_type_id,questions_type_text) values(?,?)';
    const result = await this.app.mysql.query($sql, [
      questions_type_id,
      questions_type_text,
    ]);
    return result;
  }

  // 查看试题
  async examWatchFn() {
    const $sql = 'select * from questions';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 搜索
  async searchFn(subject_text, exam_type, questions_type_text) {
    if (
      subject_text === '' &&
			exam_type === '' &&
			questions_type_text === ''
    ) {
      const $msq = 'select * from  questions';
      const result = await this.app.mysql.query($msq);
      return result;
    }
    const $sql =
			'select * from questions where subject_text like ? and exam_type like ? and questions_type_text like ? ';
    const result = await this.app.mysql.query($sql, [
      subject_text,
      exam_type,
      questions_type_text,
    ]);
    return result;
  }
  async submissionFn(
    questions_answer,
    title,
    exam_type,
    subject_text,
    questions_type_text,
    questions_id
  ) {
    const $sql =
			'update questions SET questions_answer=?,title=?,exam_type=?,subject_text=?,questions_type_text=? where questions_id=' +
			questions_id;
    const result = await this.app.mysql.query($sql, [
      questions_answer,
      title,
      exam_type,
      subject_text,
      questions_type_text,
    ]);
    return result;
  }
}

module.exports = QuestionsService;

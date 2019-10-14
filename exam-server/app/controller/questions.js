'use strict';
const { Controller } = require('egg');

class QuestionsController extends Controller {
  // 考试课程
  async examSubject() {
    const { ctx } = this;
    const result = await ctx.service.questions.subjectFn();
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 考试类型 (周考1，周考2，……)
  async examType() {
    const { ctx } = this;
    const result = await ctx.service.questions.examTypeFn();
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 题目类型 (选择题，填空题)
  async topicType() {
    const { ctx } = this;
    const result = await ctx.service.questions.topicTypeFn();
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 添加试题
  async add() {
    const { ctx } = this;
    const result = await ctx.service.questions.addFn({
      ...ctx.request.query,
    });
    ctx.body = {
      code: 1,
    };
  }

  // 添加类型
  async addType() {
    const { ctx } = this;
    const { questions_type_id, questions_type_text } = ctx.request.body;
    const result = await ctx.service.questions.addTypeFn(
      questions_type_id,
      questions_type_text
    );
    ctx.body = {
      code: 1,
    };
  }

  // 查看试题
  async examWatch() {
    const { ctx } = this;
    const result = await ctx.service.questions.examWatchFn();
    // console.log(result)
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 查看试题 搜索
  async search() {
    const { ctx } = this;
    // lesson: 'node基础', exam: '周考2', question: '填空题'

    //   { subject_text: 'javaScript上',
    // exam_type: '周考2',
    // questions_type_text: '判断题' }
    const {
      subject_text,
      exam_type,
      questions_type_text,
    } = ctx.request.body;
    const result = await ctx.service.questions.searchFn(
      subject_text,
      exam_type,
      questions_type_text
    );
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 编辑提交
  async submission() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const {
      questions_answer,
      title,
      exam_type,
      subject_text,
      questions_type_text,
      questions_id,
    } = ctx.request.body;
    console.log(
      questions_answer,
      title,
      exam_type,
      subject_text,
      questions_type_text,
      questions_id
    );
    const result = await ctx.service.questions.submissionFn(
      questions_answer,
      title,
      exam_type,
      subject_text,
      questions_type_text,
      questions_id
    );
    ctx.body = {
      code: 1,
    };
  }
}

module.exports = QuestionsController;

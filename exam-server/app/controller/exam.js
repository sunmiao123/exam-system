'use strict';

const Controller = require('egg').Controller;

class ExaminationController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: 'success',
    };
  }

  async examTypeList() {
    const { ctx } = this;
    const result = await ctx.service.exam.examTypeList();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }
  // 获取考试类型数据
  async getExamTypeList() {
    const { ctx } = this;
    const result = await ctx.service.examination.getExamTypeList();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 获取试题列表数据
  async getQuestions() {
    const { ctx } = this;
    const result = await ctx.service.examination.getQuestions();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  async searchQuestions() {
    const { ctx } = this;
    const { exam_type, questions_type } = ctx.request.body;
    const result = await ctx.service.examination.searchQuestions(
      exam_type,
      questions_type
    );
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '为搜索到内容',
      };
    }
  }

  async addExam() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await this.service.exam.addExam(params);
    if (result.protocol41) {
      ctx.body = {
        code: 200,
        msg: '添加考试列表成功',
      };
      return;
    }
    ctx.body = {
      code: 0,
      msg: '添加失败',
    };
  }

  async getExamList() {
    const { ctx } = this;
    const result = await ctx.service.exam.getExamList();
    if (result.length) {
      ctx.body = {
        code: 200,
        result,
      };
      return;
    }

    ctx.body = {
      code: 0,
      msg: '获取考试列表失败',
    };
  }

  async examSearch() {
    const { ctx } = this;
    const { exam_value, course_value } = ctx.request.body;
    const result = await ctx.service.exam.searchExam(
      exam_value,
      course_value
    );
    if (result.length) {
      ctx.body = {
        code: 200,
        result,
      };
      return;
    }
    ctx.body = {
      code: 0,
      msg: '没有此条数据',
    };
  }
}

module.exports = ExaminationController;

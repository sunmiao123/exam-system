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
  // 搜索试题
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
  // 添加API接口权限
  async AddAuthority() {
    const { ctx } = this;
    const AuthorityType = ctx.request.body;
    const result = await ctx.service.examination.AddAuthority(
      AuthorityType
    );
    if (result) {
      ctx.body = {
        code: 1,
        msg: '添加成功',
      };
    }
  }
}

module.exports = ExaminationController;

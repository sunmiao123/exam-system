'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 批卷

  async Marking() {
    const { ctx } = this;
    const calss = await ctx.service.usermanagement.Marking();
    ctx.body = {
      code: 1,
      data: calss.map((item, index) => {
        return { ...item, key: index };
      }),
    };
  }
  // 筛选
  async getClass() {
    const { ctx } = this;
    const { classname } = ctx.request.body;
    const calss = await ctx.service.usermanagement.getClass(classname);

    ctx.body = {
      code: 1,
      data: calss,
    };
  }

  // 获取考试试题
  async getquestions() {
    const { ctx } = this;
    const { s_type } = ctx.request.body;
    const calss = await ctx.service.usermanagement.getquestions(s_type);
    console.log(calss);

    ctx.body = {
      code: 1,
      data: calss,
    };
  }

  // 改分数
  async Fractions() {
    const { ctx } = this;
    const { student_name, Fraction } = ctx.request.body;
    const calss = await ctx.service.usermanagement.Fractions(
      student_name,
      Fraction
    );
    const calss1 = await ctx.service.usermanagement.setstate(student_name);
    if (calss.affectedRows && calss1.affectedRows) {
      ctx.body = {
        code: 1,
        massage: '更改成功',
      };
    } else {
      ctx.body = {
        code: 0,
        massage: '更改失败',
      };
    }
  }
}

module.exports = HomeController;

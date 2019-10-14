'use strict';

const Controller = require('egg').Controller;

class GradeController extends Controller {
  // 获取班级列表
  async getGradeList() {
    const { ctx } = this;
    const result = await ctx.service.grade.getGradeList();
    if (result.length) {
      ctx.body = {
        code: 1,
        msg: '获取成功',
        result,
      };
    }else{
      ctx.body = {
        code: 0,
        msg: '无数据  请添加'
      };
    }
  }

  // 获取课程列表
  async getSubjectList() {
    const { ctx } = this;
    const result = await ctx.service.grade.getSubjectList();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 获取教室列表
  async roomList() {
    const { ctx } = this;
    const result = await ctx.service.grade.getroomList();
    if (result) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 获取学生列表数据
  async getStudentList() {
    const { ctx } = this;
    const result = await ctx.service.grade.getStudentList();
    if (result) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }
  // 添加学生列表数据
  async addStudent() {
    const { ctx } = this;
    const { uid, username, password, gander, gradeID } = ctx.request.body;
    const result = await ctx.service.grade.addStudent(
      uid,
      username,
      password,
      gander,
      gradeID
    );
    if (result) {
      ctx.body = {
        code: 1,
        msg: '添加成功',
      };
    }
  }

  // 搜索学生信息
  async searchStudent() {
    const { ctx } = this;
    const studentInfo = ctx.request.body;
    const result = await ctx.service.grade.searchStudent(studentInfo);
    if (result.length) {
      ctx.body = {
        code: 1,
        msg: '查询成功',
        result,
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '未查询到数据',
      };
    }
  }

  // 添加班级
  async addGrade() {
    const { grade_name, room_id, subject_id } = this.ctx.request.body;
    const result = this.ctx.service.grade.addGrade(
      grade_name,
      room_id,
      subject_id
    );
    if (result) {
      this.ctx.body = {
        code: 1,
        msg: '添加教室成功',
      };
    } else {
      this.ctx.body = {
        code: 1,
        msg: '添加教室失败',
      };
    }
  }

  // 添加教室
  async addRoom() {
    const { ctx } = this;
    const { classID } = ctx.request.body;
    const result = await ctx.service.grade.addRoom(classID);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '班级添加成功',
      };
    }
  }

  // 添加课程
  async addSubject() {
    const { ctx } = this;
    const { subject_text } = ctx.request.body;
    const result = await ctx.service.grade.addSubject(subject_text);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '课程添加成功',
      };
    }
  }

  // 修改班级数据
  async updateGrade() {
    const { ctx } = this;
    const GradeInfo = ctx.request.body;
    const result = await ctx.service.grade.updateGrade(GradeInfo);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '修改教室成功',
      };
    }
  }

  // 删除教室
  async removeGrade() {
    const { ctx } = this;
    const { uid } = ctx.request.query;
    const result = await ctx.service.grade.removeGrade(uid);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '删除教室成功',
      };
    }
  }

  // 删除学生
  async removeStudent() {
    const { ctx } = this;
    const { uid } = ctx.request.query;
    const result = await ctx.service.grade.removeStudent(uid);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '删除学生成功',
      };
    }
  }

  // 删除班级
  async removeRoom() {
    const { ctx } = this;
    const { room_id } = ctx.query;
    const result = await ctx.service.grade.removeRoom(room_id);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '班级删除成功',
      };
    }
  }
}

module.exports = GradeController;

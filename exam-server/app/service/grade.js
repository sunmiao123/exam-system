'use strict';

const Service = require('egg').Service;
const { createToken } = require('../config');

class GradeService extends Service {
  // 多表查询
  // select grade_id,grade_name,room_name,subject_text from grade,room,subject where grade.grade_name = '1701G' and grade.room_id=room.room_id and grade.subject_id = subject.subject_id

  // 查询班级列表
  async getGradeList() {
    const $sql =
			'select grade.grade_id,grade.grade_name,room.room_name,subject.subject_text from grade,room,subject where grade.room_id=room.room_id and grade.subject_id = subject.subject_id';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加学生列表
  async searchStudent(studentInfo) {
    const { grade_id, room_id, student_name } = studentInfo;
    const $sql = `select student.id,student.student_id,student.student_name,student.student_pwd,grade.grade_name,student.gander,room.room_name from student,grade,room where student.grade_id = grade.grade_id and student.student_name = '${student_name}' and student.grade_id = '${grade_id}' and grade.room_id = '${room_id}' and grade.room_id = room.room_id`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加学生
  async addStudent(uid, username, password, gander, gradeID) {
    const $sql = `insert into student (student_id,student_name,student_pwd,gander,grade_id) values ('${uid}','${username}','${password}',${gander},'${gradeID}')`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 查询学生列表
  async getStudentList() {
    const $sql =
			'select student.id,student.student_id,student.student_name,student.student_pwd,grade.grade_name,student.gander,room.room_name,subject.subject_text from student,grade,room,subject where student.grade_id = grade.grade_id and grade.room_id=room.room_id and grade.subject_id=subject.subject_id';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 查询课程列表
  async getSubjectList() {
    const $sql = 'select * from subject';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 查询班级列表数据
  async getroomList() {
    const $sql = 'select * from room';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加班级
  async addGrade(gradeName, roomID, subjectID) {
    const gradeId = createToken(gradeName);
    const $sql = `insert into grade (grade_id,grade_name,room_id,subject_id) values ('${gradeId}','${gradeName}','${roomID}','${subjectID}')`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加教室
  async addRoom(classID) {
    const roomId = createToken(classID);
    const $sql = `insert into room (room_id,room_name) values ('${roomId}','${classID}')`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加课程接口
  async addSubject(name) {
    const subjectID = createToken(name);
    const $sql = `insert into subject (subject_id,subject_text) values ('${subjectID}','${name}')`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 修改教室列表
  async updateGrade(GradeInfo) {
    const { grade_id, room_id, subject_id } = GradeInfo;
    const $sql = `update grade set room_id='${room_id}',subject_id='${subject_id}'  where grade_id = '${grade_id}'`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 删除班级
  async removeGrade(gradeID) {
    const $sql = `delete from grade where grade_id ='${gradeID}'`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 删除学生
  async removeStudent(studentID) {
    const $sql = `delete from student where student_id ='${studentID}'`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 删除教室
  async removeRoom(classID) {
    const $sql = `delete from room where room_id = '${classID}'`;
    const result = await this.app.mysql.query($sql);
    return result;
  }
}

module.exports = GradeService;

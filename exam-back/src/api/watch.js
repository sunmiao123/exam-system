/*
 * @Author: sunmiao
 * @Date: 2019-09-09 20:52:51
 * @Last Modified by: sunmiao
 * @Last Modified time: 2019-09-09 21:04:28
 */

/**
 * 查看试题页面以及详情页面接口
 */

import axios from "axios";

/**
 * 课程类型 js上
 */
export function examSubject() {
  let url = "/exam_manage/exam_subject";
  return axios.get(url);
}

/***
 * 考试类型
 */
export function examType() {
  let url = "/exam_manage/exam_type";
  return axios.get(url);
}

/***
 * 题目类型
 */
export function TopicTypes() {
  let url = "/exam_manage/Topic_types";
  return axios.get(url);
}

/***
 * 初始页面渲染
 */
export function examWatch() {
  let url = "/exam_manage/exam_watch";
  return axios.get(url);
}

/***
 * 点击查询接口
 */
export function search({
  subject_text: lesson,
  exam_type: exam,
  questions_type_text: question
}) {
  let url = "/exam_manage/exam_watch/search";
  return axios.post(url, {
    subject_text: lesson,
    exam_type: exam,
    questions_type_text: question
  });
}

/***
 * 编辑提交接口
 */
export function editSubmission({
  questions_answer,
  title,
  exam_type,
  subject_text: course_type,
  questions_type_text: topic_type,
  questions_id: id
}) {
  let url = "/exam_manage/exam_watch/editSubmission";
  return axios.post(url, {
    questions_answer,
    title,
    exam_type,
    subject_text: course_type,
    questions_type_text: topic_type,
    questions_id: id
  });
}

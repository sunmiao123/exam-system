/*
 * @Author: sunmiao
 * @Date: 2019-09-09 09:52:49
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-10 11:28:01
 */

import axios from 'axios';
import { message } from 'antd';

/**
 * 
 * @param {添加试题} param0 
 * {
	* title 题目信息
	* subject_text 课程类型
	* topic_type 题目类型
	* exam_type 考试类型
	* editorContent 答案信息
	* user_id 用户id
	}
 */
export function add_Questions({
	questions_theme,
	title, //题目信息
	exam_type,
	questions_answer, //答案信息
	topic_type,
	subject_text,
	user_id
}) {
	return axios
		.get('/exam_manage/add_questions/add', {
			params: {
				title,
				user_id,
				questions_theme,
				questions_type_text: topic_type,
				questions_answer: questions_answer,
				exam_type: exam_type,
				subject_text: subject_text
			}
		})
		.then(res => {
			if (res.data.code === 1) {
				message.success('添加成功');
			}
		});
}

export function subject() {
	return axios.get('/exam_manage/exam_subject');
}

export function examType() {
	return axios.get('/exam_manage/exam_type');
}

export function topicType() {
	return axios.get('/exam_manage/Topic_types');
}

/**
 *获取试题类型
 */
export function getQuestionType() {
	let url = '/exam_manage/exam_classification';
	return axios.get(url);
}
/**
 * 添加试题类型
 * @param {试题类型名称} value
 */
export function AddQuestionType(value) {
	let random = Math.random()
		.toString(36)
		.substr(2, 6);
	let url = '/exam_manage/add_type';

	if (value !== '') {
		return axios.post(url, {
			questions_type_text: value,
			questions_type_id: random
		});
	} else {
		let url = '/exam_manage/exam_classification';
		return axios.get(url);
	}
}

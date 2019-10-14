/*
 * @Author: sunmiao
 * @Date: 2019-09-06 15:00:10
 * @Last Modified by: sunmiao

 */

import React, { Component } from 'react';
import '@/assets/css/watchQuestions.css';
import { Select, Button } from 'antd';
import axios from 'axios';
import QuestionList from '@/components/Watchquestion/index';
import {
	examSubject,
	examType,
	TopicTypes,
	examWatch,
	search
} from '@/api/watch';

const { Option } = Select;

class watchQuestions extends Component {
	state = {
		lesson: '',
		exam: '',
		question: '',
		dataList: '', //初始页面渲染
		subjectData: '', //课程类型
		examType: '', // 考试类型
		TopicTypes: '', //题目类型
		all: '',
		flag: false
	};
	componentDidMount() {
		//课程类型 js上
		examSubject().then(res => {
			this.setState({
				subjectData: res.data.result
			});
		});

		//初始页面渲染
		examWatch().then(res => {
			this.setState({
				dataList: res.data.result
			});
		});

		// 考试类型
		examType().then(res => {
			this.setState({
				examType: res.data.result
			});
		});

		//题目类型
		TopicTypes().then(res => {
			this.setState({
				TopicTypes: res.data.result
			});
		});

		//初始页面渲染
		axios.get('/exam_manage/exam_watch').then(res => {
			this.setState({
				dataList: res.data.result
			});
		});
	}

	//点击all所有的课程
	allLessonTypeFn() {
		let subject_text = this.state.subjectData.map((item, index) => {
			return item.subject_text;
		});
		this.setState({
			lesson: subject_text,
			flag: true
		});
	}

	//课程类型
	lessonTypeFn(item) {
		this.setState({
			lesson: item,
			flag: false
		});
	}
	//考试类型
	handleChangeExam(value) {
		this.setState({
			exam: value
		});
	}
	//问题类型
	handleChangeQuestion(value) {
		this.setState({
			question: value
		});
	}

	//点击查询
	searchFn() {
		let { lesson, exam, question, flag } = this.state;
		if (flag) {
			examWatch().then(res => {
				this.setState({
					dataList: res.data.result
				});
			});
		} else {
			search({
				subject_text: lesson,
				exam_type: exam,
				questions_type_text: question
			}).then(res => {
				this.setState({
					dataList: res.data.result
				});
			});
		}
	}

	render() {
		let { dataList, subjectData, examType, TopicTypes } = this.state;
		return (
			<div className='watch'>
				<div
					className='top'
					style={{
						padding: 24,
						background: '#fff',
						minHeight: 180,
						borderRadius: '10px'
					}}>
					<ul>
						<li>
							课程类型 ：
							<Button onClick={this.allLessonTypeFn.bind(this)}>
								all
							</Button>
							{subjectData &&
								subjectData.map((item, index) => {
									return (
										<Button
											key={index}
											onClick={this.lessonTypeFn.bind(
												this,
												item.subject_text
											)}>
											{item.subject_text}
										</Button>
									);
								})}
						</li>
						<li className='li-two'>
							<div className='exam-type'>
								<span>考试类型:</span>
								<Select
									defaultValue='全部'
									style={{ width: 200 }}
									onChange={this.handleChangeExam.bind(this)}>
									{examType &&
										examType.map(item => {
											return (
												<Option
													value={item.type_name}
													key={item.tid}>
													{item.type_name}
												</Option>
											);
										})}
								</Select>
							</div>

							<div className='subject-type'>
								<span>题目类型:</span>
								<Select
									defaultValue='全部'
									style={{ width: 200 }}
									onChange={this.handleChangeQuestion.bind(
										this
									)}>
									{TopicTypes &&
										TopicTypes.map((item, index) => {
											return (
												<Option
													value={
														item.questions_type_text
													}
													key={index}>
													{item.questions_type_text}
												</Option>
											);
										})}
								</Select>
							</div>
							<div className='searchBut'>
								<Button
									type='primary'
									icon='search'
									onClick={this.searchFn.bind(this)}>
									查询
								</Button>
							</div>
						</li>
					</ul>
				</div>

				<div
					style={{
						padding: 24,
						background: '#fff',
						minHeight: 360,
						marginTop: '20px',
						borderRadius: '10px'
					}}>
					{dataList &&
						dataList.map((item, index) => {
							return (
								<QuestionList
									key={index}
									item={item}
									props={this.props}></QuestionList>
							);
						})}
				</div>
			</div>
		);
	}
	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}
}

export default watchQuestions;

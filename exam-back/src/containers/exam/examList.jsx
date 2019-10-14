import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Select } from 'antd';
import { getSubjectList } from '@/api/grade';
import { getExamTypeList } from '@/api/exam';

import dateFormat from '@/utils/time';
import '@/assets/css/exam.css';
const { Column } = Table;
const { Option } = Select;
const ButtonGroup = Button.Group;
class ExamList extends Component {
	state = {
		examList: [],
		course_type: [],
		exam_type: [],
		course_value: null,
		exam_value: null
	};

	render() {
		let { examList, course_type, exam_type } = this.state;
		return (
			<div className='exam-container'>
				<div className='exam-title'>
					<h2>试卷列表</h2>
				</div>
				<div
					className='exam-search'
					style={{
						height: '110px',
						background: '#fff'
					}}>
					<div>
						<span>选择考试类型：</span>
						<Select
							style={{ minWidth: 300, height: 35 }}
							onChange={this.handleChange}>
							{exam_type.length &&
								exam_type.map(item => (
									<Option key={item.tid} value={item.tid}>
										{item.type_name}
									</Option>
								))}
						</Select>
					</div>

					<div>
						<span>选择课程：</span>
						<Select
							style={{ minWidth: 300, height: 35 }}
							onChange={this.handleSubject}>
							{course_type.length &&
								course_type.map((item, index) => (
									<Option key={index} value={item.id}>
										{item.subject_text}
									</Option>
								))}
						</Select>
					</div>
					<div>
						<Button
							type='primary'
							icon='search'
							onClick={this.submitSearch}>
							搜索
						</Button>
					</div>
				</div>
				<div
					className='exam-main'
					style={{
						background: '#fff',
						borderRadius: '7px',
						paddingTop: '15px'
					}}>
					<div className='exam-main-header'>
						<h4>试卷列表</h4>
						<span></span>
						<div>
							<ButtonGroup>
								<Button>全部</Button>
								<Button>进行中</Button>
								<Button>已完成</Button>
							</ButtonGroup>
						</div>
					</div>
					<div className='exam-content'>
						<Table dataSource={examList} rowKey={row => row.id}>
							<Column
								title='试卷信息'
								key='exam_title'
								render={(text, record, a, b, c) => {
									return (
										<div>
											<div>{text.exam_title}</div>
											<div className='exam-main-span'>
												<span className='exam-time'>
													考试时间:1:30
												</span>
												<span className='exam-sum'>
													{text.question_sum}
													道题作弊0分
												</span>
											</div>
										</div>
									);
								}}
							/>
							<Column
								title='创建人'
								dataIndex='user_name'
								key='user_name'
							/>
							<Column
								title='开始时间'
								key='examination_startTime'
								render={text => (
									<span>
										{dateFormat(text.examination_startTime)}
									</span>
								)}
							/>
							<Column
								title='结束时间'
								render={text => (
									<span>
										{dateFormat(text.examination_endTime)}
									</span>
								)}
								key='examination_endTime'
							/>
							<Column
								title='操作'
								render={() => {
									return <span>详情</span>;
								}}
								key='id'
							/>
						</Table>
					</div>
				</div>
			</div>
		);
	}

	submitSearch = value => {
		const { course_value, exam_value } = this.state;
		axios
			.post('/exam/search', {
				course_value,
				exam_value
			})
			.then(res => {
				this.setState({
					examList: res.data.result
				});
			});
	};

	handleChange = value => {
		this.setState({
			exam_value: value
		});
	};

	handleSubject = value => {
		this.setState({
			course_value: value
		});
	};
	componentWillMount() {
		axios.get('/exam/examList').then(res => {
			this.setState({
				examList: res.data.result
			});
		});
		getExamTypeList().then(res => {
			this.setState({
				exam_type: res.data.result
			});
		});

		getSubjectList().then(res => {
			this.setState({
				course_type: res.data.result
			});
		});
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}
}
// exam_title: "123"
// examination_endTime: "1568806615000"
// examination_startTime: "1568806613000"
// id: 64
// question_sum: 3
// subject_text: "javaScript上"
// type_name: "周考1"
// user_name: "lisi"

export default ExamList;

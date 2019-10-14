/*
 * @Author: 王银虎
 * @Date: 2019-09-06 20:17:10
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-11 14:43:13
 */

import React, { Component } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import '@/assets/css/classmate.css';

class inex extends Component {
	state = {
		text: null,
		data: [],
		columns: [
			{
				title: '班级',
				dataIndex: 's_type',
				key: '0',
				render: text => <span>{text}</span>
			},
			{
				title: '姓名',
				dataIndex: 'student_name',
				key: '1'
			},
			{
				title: '阅卷状态',
				dataIndex: 's_state',
				key: '2'
			},

			{
				title: '开始时间',
				dataIndex: 'student_id',
				key: '3'
			},
			{
				title: '结束时间',
				dataIndex: 'student_id',
				key: '4'
			},
			{
				title: '分数',
				dataIndex: 'Fraction',
				key: '5'
			},
			{
				title: '操作',

				render: (text, record) => (
					<span>
						<span
							style={{ color: 'blue' }}
							onClick={() => {
								this.props.history.push({
									pathname: '/main/studentDetsils',
									query: text
								});
							}}>
							批卷
						</span>
					</span>
				)
			}
		]
	};
	render() {
		return (
			<div className='classmate'>
				<div className='classmate-header'>
					<ul>
						<li>
							状态：
							<select>
								<option>暂无状态</option>
							</select>
						</li>
						<li>
							班级：
							<select
								onChange={e => {
									this.setState({
										text: e.target.value
									});
								}}>
								<option>选择班级</option>
								<option>1701A</option>
								<option>1701B</option>
								<option>1701C</option>
								<option>1701D</option>
								<option>1701E</option>
								<option>1702A</option>
								<option>1702B</option>
								<option>1702C</option>
								<option>1702D</option>
								<option>1702E</option>
								<option>1703A</option>
								<option>1703B</option>
							</select>
						</li>
						<li>
							<Button
								onClick={() => {
									if (this.state.text !== '') {
										this.getClass(this.state.text);
									} else {
										alert('亲选择班级或状态');
									}
								}}>
								提交
							</Button>
						</li>
					</ul>
				</div>

				<Table
					className='classmate-content'
					columns={this.state.columns}
					dataSource={this.state.data}
				/>
			</div>
		);
	}
	componentDidMount() {
		if (this.props.location.query.r_name !== '') {
			this.setState({
				r_name: this.props.location.query.r_name,
				sdsds: this.props.location.query.sdsds
			});
			this.getClass(this.props.location.query.r_name);
		}
	}

	getClass(Class) {
		axios
			.post('/testquestions/getClass', {
				classname: Class
			})
			.then(({ data }) => {
				this.setState({
					data: data.data
				});
			});
	}
}

export default inex;

/*
 * @Author: changjinyu
 * @Date: 2019-09-03 20:08:11
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-10 20:53:24
 */

import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import '@/assets/css/PendingApp.css';
class ClassList extends Component {
	state = {
		data: [],
		columns: [
			{
				title: '班级',
				dataIndex: 'r_name',
				key: '0'
				// render: text => <a>{text}</a>
			},
			{
				title: '课程名称',
				dataIndex: 'sdsds',
				key: '1'
			},
			{
				title: '阅卷状态',
				dataIndex: 'c_state',
				key: '2'
			},

			{
				title: '课程名称',
				dataIndex: 'sdsds',
				key: '3'
			},
			{
				title: '成材率',
				dataIndex: 'Fraction',
				key: '4'
			},
			{
				title: '操作',
				render: (text, record) => (
					<span>
						<span
							style={{ color: 'blue' }}
							onClick={() => {
								this.props.history.push({
									pathname: '/main/classlistDetsils',
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
			<Table
				columns={this.state.columns}
				dataSource={this.state.data}
				className='PendingApproval'
			/>
		);
	}
	componentDidMount() {
		let _this = this;
		axios.get('/testquestions/Marking').then(res => {
			_this.setState({
				data: res.data.data
			});
		});
	}
}

export default ClassList;

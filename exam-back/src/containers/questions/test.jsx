/*
 * @Author: sunmiao
 * @Date: 2019-09-03 15:07:14
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-10 11:26:11
 */
import React, { Component } from 'react';
import '@/assets/css/watchdetail.css';
import { Tag } from 'antd';

export default class watchdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}
	render() {
		let { item } = this.props.location.query;

		return (
			<div className='watchdetail'>
				<div className='left'>
					<ul>
						<li>
							出题人：<span>{item.user_id}</span>
						</li>
						<h3>题目信息</h3>
						<li>
							<Tag color='blue'>{item.questions_type_text}</Tag>
							<Tag color='geekblue'>{item.subject_text}</Tag>
							<Tag color='orange'>{item.exam_type}</Tag>
						</li>
						<li>
							<div
								dangerouslySetInnerHTML={{
									__html: item.questions_theme
								}}
							/>
						</li>
					</ul>
				</div>
				<div className='right'>
					<ul>
						<div
							dangerouslySetInnerHTML={{
								__html: item.questions_answer
							}}
						/>
					</ul>
				</div>
			</div>
		);
	}
}

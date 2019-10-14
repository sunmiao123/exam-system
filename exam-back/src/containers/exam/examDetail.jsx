import React, { Component } from 'react';
import dateFormat from '@/utils/time';
import { Button, Row, Col } from 'antd';
class ExamDetail extends Component {
	render() {
		const values = JSON.parse(this.props.match.params.values);
		const username = sessionStorage.getItem('username');
		return (
			<div
				className='exam-detail-container'
				style={{ width: '100%', height: '100%' }}>
				<Row>
					<Col span={12} offset={6}>
						<div
							style={{
								marginTop: '70px',
								width: '750px',
								height: '170px',
								background: '#fff',
								boxSizing: 'border-box',
								padding: '30px',
								borderRadius: '12px',
								display: 'flex',
								justifyContent: 'center'
							}}>
							<div
								style={{
									width: '550px'
								}}>
								<h4 style={{ textAlign: 'center' }}>
									{values.exam_title}
								</h4>
								<p style={{ textAlign: 'center' }}>
									考试时间：1小时30分钟 监考人:{username}{' '}
									开始考试时间:
									{dateFormat(values.examination_startTime)}
									阅卷人:
									{username}
								</p>
								<div style={{ textAlign: 'center' }}>
									<Button
										type='primary'
										onClick={this.submitExam}>
										创建试卷
									</Button>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}

	submitExam = () => {
		this.props.history.push('/main/questions/list');
	};
}

export default ExamDetail;

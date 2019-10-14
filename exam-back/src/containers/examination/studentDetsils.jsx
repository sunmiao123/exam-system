import React, { Component } from 'react';
import '@/assets/css/studentDetsils.css';
import axios from 'axios';
import { Progress, Slider, InputNumber, Row, Col, Button } from 'antd';
class StudentDetsils extends Component {
	state = {
		inputValue: 1,
		percent1: 0,
		data: []
	};

	onChange(value) {
		this.setState({
			inputValue: value,
			percent1: value
		});
	}

	render() {
		let { percent1, inputValue, data } = this.state;
		console.log(data);

		return (
			<div className='StudentDetsils'>
				<div className='StudentDetsils-Header'>
					<h3>阅卷</h3>
					<div children='Progress'>
						<div className='Progress-text'>成材率</div>
						<Progress type='circle' percent={percent1} />
					</div>
				</div>
				<div className='StudentDetsils-Main'>
					<div className='Main-LeftContnet'>
						<ul>
							{this.state.data.map((time, index) => {
								return (
									<li key={index}>
										<h3>
											题目：{time.questions_type_text}
										</h3>
										<p> 问题:{time.title}</p>
										<p> 回答：{time.questions_answer}</p>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='Main-RightContnet'>
						<Row>
							<Col span={12}>
								<Slider
									className='Slider'
									min={1}
									max={100}
									onChange={this.onChange.bind(this)}
									value={
										typeof inputValue === 'number'
											? inputValue
											: 0
									}
								/>
							</Col>
							<Col span={4}>
								<InputNumber
									className='InputNumber'
									min={1}
									max={100}
									style={{ marginLeft: 16 }}
									value={inputValue}
									onChange={this.onChange.bind(this)}
								/>
							</Col>
						</Row>
						<Button
							style={{ width: 100 }}
							onClick={this.Submission.bind(this)}>
							{' '}
							提交
						</Button>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		axios
			.post('/testquestions/getquestions', {
				s_type: this.props.location.query.s_type
			})
			.then(({ data }) => {
				if (data.code === 1) {
					this.setState({
						data: data.data
					});
				}
			});
	}

	Submission() {
		let a = this.props.location.query.student_name;
		let b = this.state.inputValue;
		if (a && b) {
			axios
				.post('/testquestions/Fractions', {
					student_name: a,
					Fraction: b
				})
				.then(res => {
					if (res.data.code) {
						alert('完成批卷');
						this.props.history.push('/main/classlist');
					}
				});
		} else {
			alert('请打分');
		}
	}
}

export default StudentDetsils;

import React, { Component } from 'react';
import { Form, Input, Button, Icon, Row, Col, message } from 'antd';
import PropTypes from 'prop-types';
import '@/assets/css/login.css';
import { login } from '@/api/login';
import { setSession } from '@/utils';
export class Index extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let { user_name, user_pwd } = values;
				let { history } = this.props;
				login(user_name, user_pwd).then(res => {
					console.log(res.data.data);
					if (res.data.code === 1) {
						let userInfo = {
							user_name: res.data.data[0].user_name,
							user_type: res.data.data[0].type_text
						};
						setSession('token', res.data.token);
						setSession('uid', res.data.data[0].user_id);
						//存储用户信息
						setSession('user', JSON.stringify(userInfo));
						message.success('登录成功', 1);
						history.push({ pathname: '/main/addQuestions' });
					} else {
						message.error('登录失败，请重新校验用户名和密码', 1.5);
					}
				});
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className='Login'>
				<Row
					style={{ height: '100%' }}
					type='flex'
					align='middle'
					justify='center'>
					<Col
						xs={{ span: 20, offset: 2 }}
						sm={{ span: 14, offset: 5 }}
						md={{ span: 8, offset: 8 }}>
						<Form
							onSubmit={this.handleSubmit}
							className='login-form'>
							<Form.Item className='from-user'>
								{getFieldDecorator('user_name', {
									initialValue: 'lisi',
									rules: [
										{
											required: true,
											message: '请输入用户名!'
										}
									]
								})(
									<Input
										style={{ maxWidth: 500 }}
										prefix={
											<Icon
												type='user'
												style={{
													color: 'rgba(0,0,0,.25)'
												}}
											/>
										}
										placeholder='用户名'
									/>
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('user_pwd', {
									initialValue: '666',
									rules: [
										{
											required: true,
											message: '请输入密码!'
										}
									]
								})(
									<Input
										style={{ maxWidth: 500 }}
										prefix={
											<Icon
												type='lock'
												style={{
													color: 'rgba(0,0,0,.25)'
												}}
											/>
										}
										type='password'
										placeholder='密码'
									/>
								)}
							</Form.Item>
							<Form.Item>
								<Button
									type='primary'
									style={{
										minWidth: 150,
										textAlign: 'center'
									}}
									htmlType='submit'
									className='login-form-button'>
									登录
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

const ForgotPassword = Form.create({})(Index);
Index.propTypes = {
	form: PropTypes.object.isRequired
};

export default ForgotPassword;

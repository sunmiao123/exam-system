import React, { Component } from 'react';
import Layouts from '@/components/layout';
import { Layout, Menu, Icon, message, Upload, Row, Col } from 'antd';
import { NavLink } from 'dva/router';
import tabBarList from '@/config/tableBar';
import 'antd/dist/antd.css';
import { getSession } from '@/utils';
import { getViewAuthority } from '@/api';
import DropdownAvaus from '@/components/user/dropdown';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
}

class Main extends Component {
	state = {
		username: '',
		imageUrl: '',
		routerList: [],
		classList: []
	};

	handleChange = info => {
		const data = info.file.response;
		if (info.file.status === 'uploading') {
			return;
		}
		if (data) {
			if (data.code === 200) {
				message.success(data.msg);
				this.setState({
					imageUrl: data.url
				});
			}
		} else {
			message.error('上传失败');
		}
	};

	componentDidMount() {
		let user = JSON.parse(getSession('user'));
		getViewAuthority(user.user_type).then(res => {
			let data = res.data.result.view_authority_text;
			let dataView = String(data).split(',');
			this.setState({
				classList: dataView
			});
		});
		this.setState({
			username: user.user_name,
			userType: user.user_type,
			routerList: tabBarList
		});
	}

	render() {
		let {
			username,
			userType,
			imageUrl,
			classList,
			routerList
		} = this.state;
		let viewList = classList.map(item => {
			return routerList.find(ite => ite.name === item);
		});

		return (
			<Layouts>
				<Layout>
					<Header
						className='header'
						style={{
							background: '#fff',
							borderBottom: '0.5px solid #ccc'
						}}>
						<Row style={{ height: '100%' }}>
							<Col span={4} style={{ height: '100%' }}>
								<div className='header-logo'>
									<img src='/public/timg.jpg' alt='logo' />
								</div>
							</Col>
							<Col span={15}></Col>
							<Col span={1}>
								<Upload
									listType='picture-card'
									className='avatar-uploader'
									showUploadList={false}
									action='/user/upload'
									beforeUpload={beforeUpload}
									onChange={this.handleChange}
									data={{
										user_name: localStorage.getItem('user')
									}}>
									{imageUrl ? (
										<div className='avatar-uploader'>
											<img
												src={imageUrl}
												className='avatar-img'
												alt='avatar'
											/>
										</div>
									) : (
										<div className='avatar-uploader'></div>
									)}
								</Upload>
							</Col>
							<Col span={3}>
								<DropdownAvaus
									{...this.props}
									username={username}
									userType={userType}
								/>
							</Col>
						</Row>
					</Header>
					<Content>
						<Layout>
							<Sider
								width={200}
								theme='dark'
								style={{
									height: '100%'
								}}>
								<Menu
									theme='dark'
									mode='inline'
									defaultSelectedKeys={['/main']}
									style={{
										height: '100%',

										color: '#fff'
									}}>
									{viewList &&
										viewList.map(item => {
											return (
												<SubMenu
													key={item.id}
													title={
														<span>
															<Icon
																type={item.icon}
															/>
															{item.name}
														</span>
													}>
													{item.children &&
														item.children.map(
															ite => {
																return (
																	<Menu.Item
																		key={
																			item.path
																		}>
																		<NavLink
																			to={
																				ite.path
																			}>
																			{
																				ite.name
																			}
																		</NavLink>
																	</Menu.Item>
																);
															}
														)}
												</SubMenu>
											);
										})}
								</Menu>
							</Sider>
							<Content
								style={{ padding: '0 24px', minHeight: 280 }}>
								{this.props.children}
							</Content>
						</Layout>
					</Content>
				</Layout>
			</Layouts>
		);
	}
}

export default Main;

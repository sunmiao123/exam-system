import React, { Component } from 'react';
import '@/assets/css/showUser.css';
import { Table } from 'antd';
import { showUser_header_config } from '@/config/showUser_config';
import { userList, userType } from '@/api/user';

class ShowUser extends Component {
	state = {
		header_config: showUser_header_config,
		header_default: '用户数据',
		columns: showUser_header_config[0].config,
		userList: [],
		userTypeList: [],
		conunt: 0
	};

	componentDidMount() {
		userList().then(res => {
			this.setState({
				userList: res.data.result
			});
		});

		userType().then(res => {
			this.setState({
				userTypeList: res.data.result
			});
		});
	}

	hanleClickTitle(item, index) {
		this.setState({
			header_default: item.title,
			columns: item.config,
			conunt: index
		});
	}

	render() {
		let {
			columns,
			header_config,
			header_default,
			userList,
			userTypeList,
			conunt
		} = this.state;
		const data = [userList, userTypeList];
		return (
			<div className='showUser'>
				<h1>用户展示</h1>
				<div className='showUser_main'>
					<div className='showUser_header'>
						{header_config.map((item, index) => {
							return (
								<span
									onClick={this.hanleClickTitle.bind(
										this,
										item,
										index
									)}
									className={
										item.title === header_default
											? 'show_btn active'
											: 'show_btn'
									}
									key={index}>
									{item.title}
								</span>
							);
						})}
					</div>
					<div className='showUser_title'>{header_default}</div>
					<div className='showUser_table'>
						<Table
							columns={columns}
							dataSource={data[conunt]}
							rowKey={row => row.user_id}
							size='middle'
						/>
					</div>
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

export default ShowUser;

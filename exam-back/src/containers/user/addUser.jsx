import React, { Component } from 'react';
import '@/assets/css/addUser.css';
import { getUserInfo, userType } from '@/api/user';
import UserInfo from '@/components/addUser/userInfo';
import AddUserType from '@/components/addUser/addUserType';
import AddApiType from '@/components/addUser/addApiType';
import AddView from '@/components/addUser/addView';
import SetApiType from '@/components/addUser/setApiType';
import SetUserView from '@/components/addUser/setUserView';

class AddUser extends Component {
	state = {
		hidden: true,
		userInfoList: [],
		userTypeList: []
	};
	componentDidMount() {
		getUserInfo().then(res => {
			this.setState({
				userInfoList: res.data.result
			});
		});

		userType().then(res => {
			this.setState({
				userTypeList: res.data.result
			});
		});
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}

	render() {
		const { userInfoList, userTypeList } = this.state;
		return (
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<h2 style={{ padding: '10px 0px', marginTop: '10px' }}>
					添加用户
				</h2>
				<div className='addUesr_box'>
					<div className='addUesr_item'>
						<UserInfo
							userInfoList={userInfoList}
							userTypeList={userTypeList}
						/>
					</div>
					<div className='addUesr_item'>
						<AddUserType />
					</div>
					<div className='addUesr_item'>
						<AddApiType />
					</div>
					<div className='addUesr_item addUesr_bottom'>
						<AddView />
					</div>
					<div className='addUesr_item addUesr_bottom'>
						<SetApiType userTypeList={userTypeList} />
					</div>
					<div className='addUesr_item addUesr_bottom'>
						<SetUserView userTypeList={userTypeList} />
					</div>
				</div>
			</div>
		);
	}
}

export default AddUser;

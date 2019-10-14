// showUser_header
const showUser_header_config = [
	{
		title: '用户数据',
		config: [
			{
				title: '用户名',
				dataIndex: 'user_name'
			},
			{
				title: '密码',
				dataIndex: 'user_pwd'
			},
			{
				title: '身份',
				dataIndex: 'type_text'
			}
		]
	},
	{
		title: '身份数据',
		config: [
			{
				title: '身份ID',
				dataIndex: 'id'
			},
			{
				title: '身份名称',
				dataIndex: 'type_text'
			}
		]
	},
	{
		title: 'api接口权限',
		config: [
			{
				title: 'api接口名称',
				dataIndex: 'name'
			},
			{
				title: 'api权限url',
				dataIndex: 'age'
			},
			{
				title: 'api权限方式',
				dataIndex: 'address'
			}
		]
	},
	{
		title: '身份和api接口的关系',
		config: [
			{
				title: '身份名称',
				dataIndex: 'name1'
			},
			{
				title: 'api接口名称',
				dataIndex: 'name'
			},
			{
				title: 'api权限url',
				dataIndex: 'age'
			},
			{
				title: 'api权限方式',
				dataIndex: 'address'
			}
		]
	},
	{
		title: '视图接口权限',
		config: [
			{
				title: '视图接口名称',
				dataIndex: 'name'
			},
			{
				title: '视图id',
				dataIndex: 'age'
			}
		]
	},
	{
		title: '身份和视图权限关系',
		config: [
			{
				title: '身份',
				dataIndex: 'name1'
			},
			{
				title: '视图名称',
				dataIndex: 'name'
			},
			{
				title: '视图id',
				dataIndex: 'age'
			}
		]
	}
];

export { showUser_header_config };

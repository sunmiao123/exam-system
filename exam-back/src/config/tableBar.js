const tabBarList = [
	{
		name: '试卷管理',
		icon: 'snippets',
		id: 0,
		children: [
			{
				path: '/main/exam/addQuestions',
				name: '添加试题'
			},
			{
				path: '/main/exam/questionsType',
				name: '试题分类'
			},
			{
				path: '/main/exam/watchQuestions',
				name: '查看试题'
			}
		]
	},
	{
		name: '用户管理',
		id: 1,
		icon: 'user',
		children: [
			{
				path: '/main/user/addUser',
				name: '添加用户'
			},
			{
				path: '/main/user/showUser',
				name: '用户展示'
			}
		]
	},
	{
		name: '考试管理',
		id: 2,
		icon: 'laptop',
		children: [
			{
				path: '/main/questions/addExam',
				name: '添加考试'
			},
			{
				path: '/main/questions/list',
				name: '试卷列表'
			}
		]
	},
	{
		name: '班级管理',
		id: 3,
		icon: 'contacts',
		children: [
			{
				path: '/main/class/grade',
				name: '班级管理'
			},
			{
				path: '/main/class/room',
				name: '教室管理'
			},
			{
				path: '/main/class/student',
				name: '学生管理'
			}
		]
	},
	{
		name: '阅卷管理',
		id: 4,
		icon: 'edit',
		children: [
			{
				path: '/main/await/classlist',
				name: '待批班级'
			}
		]
	}
];

export default tabBarList;

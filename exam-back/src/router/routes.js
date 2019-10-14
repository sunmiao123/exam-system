import dynamic from 'dva/dynamic';

export default [
	{
		path: '/login',
		name: '用户登录',
		component: dynamic({
			component: () => import('@/containers/login')
		})
	},
	{
		path: '/main/editDeltai/:id',
		name: 'editDeltai',
		component: dynamic({
			component: () => import('@/containers/questions/editDeltai')
		})
	},
	{
		path: '/main/test/:id',
		name: 'test',
		component: dynamic({
			component: () => import('@/containers/questions/test')
		})
	},
	{
		path: '/main/classlistDetsils',
		name: 'ClasslistDetsils',
		component: dynamic({
			component: () => import('@/containers/examination/classlistDetsils')
		})
	},
	{
		path: '/main/studentDetsils',
		name: 'studentDetsils',
		component: dynamic({
			component: () => import('@/containers/examination/studentDetsils')
		})
	},
	{
		path: '/main/examDetail/:values',
		name: 'examDetail',
		component: dynamic({
			component: () => import('@/containers/exam/examDetail')
		})
	},
	{
		path: '/main',
		name: '主页',
		component: dynamic({
			component: () => import('@/containers/main')
		}),
		children: [
			{
				path: '/main/exam/addQuestions',
				name: '添加试题',
				component: dynamic({
					component: () =>
						import('@/containers/questions/addQuestions')
				})
			},
			{
				path: '/main/exam/questionsType',
				name: '试题分类',
				component: dynamic({
					component: () =>
						import('@/containers/questions/questionsType')
				})
			},
			{
				path: '/main/exam/watchQuestions',
				name: '查看试题',
				component: dynamic({
					component: () =>
						import('@/containers/questions/watchQuestions')
				})
			},
			{
				path: '/main/user/addUser',
				name: '添加用户',
				component: dynamic({
					component: () => import('@/containers/user/addUser')
				})
			},
			{
				path: '/main/user/showUser',
				name: '用户展示',
				component: dynamic({
					component: () => import('@/containers/user/showUser')
				})
			},
			{
				path: '/main/questions/addExam',
				name: '添加考试',
				component: dynamic({
					component: () => import('@/containers/exam/addExam')
				})
			},
			{
				path: '/main/questions/list',
				name: '试卷列表',
				component: dynamic({
					component: () => import('@/containers/exam/examList')
				})
			},
			{
				path: '/main/class/grade',
				name: '班级管理',
				component: dynamic({
					component: () => import('@/containers/grade/grade')
				})
			},
			{
				path: '/main/class/room',
				name: '教室管理',
				component: dynamic({
					component: () => import('@/containers/grade/room')
				})
			},
			{
				path: '/main/class/student',
				name: '学生管理',
				component: dynamic({
					component: () => import('@/containers/grade/student')
				})
			},
			{
				path: '/main/await/classlist',
				name: '待批班级',
				component: dynamic({
					component: () =>
						import('@/containers/examination/classlist')
				})
			},
			{
				path: '/main/home',
				name: 'HomePage',
				component: dynamic({
					component: () => import('@/containers/home')
				})
			},
			{
				from: '/main',
				to: '/main/home'
			}
		]
	},
	{
		from: '/',
		to: '/login'
	}
];

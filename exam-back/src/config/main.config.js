export default [
  {
    title: "试题管理",
    icon: "sliders",
    children: [
      {
        path: "/home/addQuestions",
        name: "添加试题"
      },
      {
        path: "/home/questionsType",
        name: "试题分类"
      },
      {
        path: "/home/watchQuestions",
        name: "查看试题"
      }
    ]
  },
  {
    title: "用户管理",
    icon: "user",
    children: [
      {
        path: "/home/addUser",
        name: "添加用户"
      },
      {
        path: "/home/showUser",
        name: "用户展示"
      }
    ]
  },
  {
    title: "考试管理",
    icon: "contacts",
    children: [
      {
        path: "/home/addExam",
        name: "添加考试"
      },
      {
        path: "/home/exam/list ",
        name: "试卷列表"
      }
    ]
  },
  {
    title: "班级管理",
    icon: "bar-chart",
    children: [
      {
        path: "/home/grade",
        name: "班级管理"
      },
      {
        path: "/home/room ",
        name: "教室管理"
      },
      {
        path: "/home/student ",
        name: "学生管理"
      }
    ]
  },
  {
    title: "阅卷管理",
    icon: "bar-chart",
    children: [
      {
        path: "/home/paper/classlist",
        name: "待批班级"
      }
    ]
  }
];

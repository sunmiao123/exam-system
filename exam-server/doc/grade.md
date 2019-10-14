# 接口文档

语雀地址 : https://www.yuque.com/taiyang-rhwe9/wdlgfg/tuttev


<a name="CuZJc"></a>
#### 获取班级列表
- 请求地址 ：/grade/getGradeList
- 请求方式 ： GET
- 参数 ： 无
- 返回数据
```json
//成功
{
	code:1,
  result :[
  	{
      grade_id, //班级ID
      grade_name, //班级名称
      room_name, //教室名称
      subject_text //课程名称
  	},
    ....
  ]
}
```
<a name="RnnZ0"></a>
#### 
<a name="vdD1d"></a>
#### 获取教室列表

- 请求地址 ：/grade/roomList
- 请求方式 ： GET
- 参数 ： 无
- 返回数据
```json
//成功
{
	code:1,
  result :[
  	{
      room_id,//教室ID
      room_name, //教室名称
  	},
    ....
  ]
}
```

<a name="a3yjN"></a>
#### 获取课程列表

- 请求地址 ：/grade/getSubjectList
- 请求方式 ： GET
- 参数 ： 无
- 返回数据
```json
//成功
{
	code:1,
  result :[
  	{
      subject_id,//课程ID
      subject_text, //课程内容
  	},
    ....
  ]
}
```
<a name="lUofz"></a>
#### 搜索学生信息

- 请求地址 ：/grade/searchStudent
- 请求方式 ： POST
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| grade_id | grade_id | string | 是 | 班级ID | 无 |
| room_id | room_id | string | 是 | 教室ID | 无 |
| student_id | student_id | string | 是 | 课程ID | 无 |

- 返回数据

```json
//成功
{
	code:1,
  msg: '查询成功',
  result:[
  	{
      grade_id,//班级ID
      room_id,//教室ID
      student_name,//学生姓名
    },
    ....
  ]
}
//失败
{
  	code: 0,
    msg: '未查询到数据',
}      
```

<a name="kcmhp"></a>
#### 添加学生信息

- 请求地址 ：/grade/addStudent
- 请求方式 ： POST
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| student_id | uid | string | 是 | 学生学号 | 无 |
| student_name | username | string | 是 | 学生姓名 | 无 |
| student_pwd | password | string | 是 | 学生密码 | 无 |
| gander | gander | number  | 否 | 性别· 0 男 1 女 | 0 |
| grade_id | gradeID | string | 是 | 班级ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'添加成功',
}
//失败
{
	code:0,
  msg:'添加失败'
}
```

<a name="oJXKE"></a>
#### 添加班级

- 请求地址 ：/grade/addGrade
- 请求方式 ： POST
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| grade_name | grade_name | string | 是 | 班级名称 | 无 |
| room_id | room_id | string | 是 | 教室ID | 无 |
| subject_id | subject_id | string | 是 | 课程ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'添加班级成功',
}
//失败
{
	code:0,
  msg:'添加班级失败'
}
```
<a name="Bh6Hh"></a>
#### 添加教室

- 请求地址 ：/grade/addRoom
- 请求方式 ： POST
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| room_name | classID | string | 是 | 教室名称 | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'添加教室成功',
}
//失败
{
	code:0,
  msg:'添加教室失败'
}
```

<a name="ZZqbq"></a>
#### _修改教室数据_

- 请求地址 ：/grade/updateGrade
- 请求方式 ： POST
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| grade_id | grade_id | string | 是 | 班级ID | 无 |
| room_id | room_id | string | 是 | 教室ID | 无 |
| subject_id | subject_id | string | 是 | 课程ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'修改教室成功',
}
```
<a name="d6WeZ"></a>
#### 删除教室

- 请求地址 ：/grade/removeGrade
- 请求方式 ：get
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| grade_id | uid | string | 是 | 班级ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'删除教室成功',
}
```
<a name="BD4wD"></a>
#### 删除学生数据

- 请求地址 ：/grade/removeStudent
- 请求方式 ：get
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| student_id | uid | string | 是 | 学生ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'删除学生成功',
}
```
<a name="u1zSY"></a>
#### 删除教室

- 请求地址 ：/grade/removeRoom
- 请求方式 ：get
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| room_id | uid | string | 是 | 教室ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'删除教室成功',
}
```
<a name="MFP6F"></a>
#### 删除班级

- 请求地址 ：/grade/removeGrade
- 请求方式 ：get
- 参数  
| 字段名 | 参数名 | 参数类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| grade_id | gradeID | string | 是 | 班级ID | 无 |

- 返回数据

```javascript
//成功
{
	code:1,
  msg:'删除班级成功',
}
```


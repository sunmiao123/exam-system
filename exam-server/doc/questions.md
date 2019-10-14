# 考试系统接口文档

语雀地址：https://www.yuque.com/sunmiao/nhqgmx/munaeo

<a name="0fLZj"></a>
### 试卷管理
<a name="LcnBv"></a>
#### 添加试题
接口简介：考试课程 (javascript上,javascript下)<br />请求地址：/exam_manage/exam_subject<br />请求方式：get<br />请求参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| subject_id | string | 是 | 考试课程id | 无 |
| subject_text | string | 是 | 考试课程名称 | 无 |

返回数据：
```javascript
 ctx.body = {
      code: 1,
      result //所有的考试课程
    };
```


接口简介：考试类型 (周考1，周考2，……)<br />请求地址：/exam_manage/exam_type<br />请求方式：get<br />请求参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| tid | string | 是 | 考试类型id | 无 |
| type_name | string | 是 | 考试类型名称 | 无 |

返回数据：
```javascript
ctx.body = {
      code: 1,
      result//所有考试类型
    };
```


接口简介：题目类型 (选择题，填空题)<br />请求地址：/exam_manage/Topic_types<br />请求方式：get<br />请求参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| questions_type_id | string | 是 | 题目类型id | 无 |
| questions_type_text | string | 是 | 题目类型名称 | 无 |

返回数据：
```javascript
ctx.body = {
      code: 1,
      result//所有题目类型
    };
```

<br />
<br />接口简介：添加接口<br />请求地址：/exam_manage/add_questions/add<br />请求方式：get<br />添加参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| title | string | 是 | 题目信息 | 无 |
| subject_text | string | 是 | 考试课程 | 无 |
| questions_type_text | string | 是 | 题目类型 | 无 |
| questions_answer | string | 是 | 主题内容 | 无 |
| exam_type | string | 是 | 考试类型 | 无 |

返回参数：
```javascript
ctx.body = {
      code: 1
    };
```


<a name="gsjQL"></a>
#### 试题分类
接口简介：页面初始渲染试题分类列表<br />请求地址：/exam_manage/exam_classification<br />请求方式：get<br />请求参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| questions_type_id | string | 是 | 题目类型id | 无 |
| questions_type_text | string | 是 | 题目类型名称 | 无 |



```javascript
ctx.body = {
      code: 1,
      result //所有的试题名称
    };
```


接口简介：添加试题分类<br />请求地址：/exam_manage/add_type<br />请求方式：post<br />添加参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| questions_type_id | string | 是 | 题目类型id | 无 |
| questions_type_text | string | 是 | 题目类型名称 | 无 |

返回参数：
```javascript
ctx.body = {
      code: 1
    };
```


<a name="Alsi3"></a>
#### 查看试题
接口简介：查看试题页面初始渲染<br />请求地址：/exam_manage/exam_watch<br />请求方式：get<br />请求参数：

列表参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| title | string | 是 | 题目信息 | 无 |
| subject_text | string | 是 | 考试课程 | 无 |
| questions_type_text | string | 是 | 题目类型 | 无 |
| exam_type | string | 是 | 考试类型 | 无 |
| user_id | string | 是 | xx发布 | 无 |


```javascript
 ctx.body = {
      code: 1,
      result//所有的试题列表
    };
```

<br />
<br />接口简介：试题分类里的添加类型按条件搜索<br />请求地址：/exam_manage/exam_watch/search<br />请求方式：post<br />请求参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| subject_text | string | 是 | 考试课程 | 无 |
| questions_type_text | string | 是 | 题目类型 | 无 |
| exam_type | string | 是 | 考试类型 | 无 |

返回参数：

```javascript
ctx.body = {
      code: 1,
      result//搜索到的内容
    };
```

<br />
<br />接口简介：编辑提交<br />请求地址：/exam_manage/exam_watch/editSubmission<br />请求方式：post<br />编辑参数：

| 参数名 | 类型 | 必填 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| title | string | 是 | 题目信息 | 无 |
| subject_text | string | 是 | 考试课程 | 无 |
| questions_type_text | string | 是 | 题目类型 | 无 |
| exam_type | string | 是 | 考试类型 | 无 |
| questions_answer | string | 是 | 主题内容 | 无 |
| questions_id | string | 是 | id | 无 |

返回参数
```javascript
ctx.body = {
      code: 1
   };
```


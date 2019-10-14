/*
 * @Author: 王银虎 
 * @Date: 2019-09-07 11:44:26 
 * @Last Modified by: sunmiao
 * @Last Modified time: 2019-09-26 21:21:42
 */
import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import E from 'wangeditor';
import "@/assets/css/addQuestions.css";
import {add_Questions,subject,examType,topicType} from "@/api/questions.js";

const { Option } = Select;

class addQuestions extends Component {
   constructor(props) {
      super(props);
      this.state = {
         Answers:"",//答案
         examTypeData:"",//考试类型 (周考1，周考2，……)
         topicTypeData:'',//题目类型)(选择题,填空题,...)
         subject:"",//考试课程 (javascript上,javascript下)
         user_id:sessionStorage.uid,
         theme:"" ,
      };
      
   }
   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
           add_Questions({questions_answer:this.state.Answers,...values,user_id:this.state.user_id,questions_theme:this.state.theme})
         }
      });
   };
   render() {
      const { getFieldDecorator } = this.props.form;
      const {subject,examTypeData,topicTypeData} = this.state
      return (
         <div className="addQuestions">
            <div style={{ overflow: "auto" }}>
               <Form onSubmit={this.handleSubmit} className="login-form" style={{ margin: "30px" }}>
                  <Form.Item>
                     <div className="information">
                        <h3>题目信息</h3>
                        <p>题干</p>
                        {getFieldDecorator('title', {
                           rules: [{ required: true, message: 'Please input your title!' }],
                        })(
                           <Input placeholder="请输入题目标题，不超过20个字" style={{ width: "490px", height: "40px" }}/>,
                        )}
                     </div>
                  </Form.Item>
                  <Form.Item>
                     <div className="shop">
                        <h4>题目主题</h4>
                        <div className="text-area" >
                           <div ref="editorElemMenu"
                              style={{ backgroundColor: '#f1f1f1', border: "1px solid #ccc" }}
                              className="editorElem-menu">

                           </div>
                           <div
                              style={{
                                 padding: "0 10px",
                                 overflowY: "scroll",
                                 height: 300,
                                 border: "1px solid #ccc",
                                 borderTop: "none"
                              }}
                              ref="editorElemBody" className="editorElem-body">

                           </div>
                        </div>
                     </div>
                  </Form.Item>
                  <Form.Item>
                     <div className="examination">
                        <p>请选择考试类型:</p>
                        {getFieldDecorator('exam_type', {
                           rules: [{ required: true, message: 'Please input your exam_type!' }],
                        })(
                           <Select
                              placeholder="请选择考试类型:"
                              style={{ width: '32%' }}>
                           {examTypeData&& examTypeData.map((item,index)=>{
                              return <Option key={index} value={item.type_name}>{item.type_name}</Option>
                           })}
                           </Select>
                        )}
                     </div>
                     <div className="curriculum">
                        <p>请选择课程类型:</p>
                        {getFieldDecorator('subject_text', {
                           rules: [{ required: true, message: 'Please input your course_type!' }],
                        })(
                           <Select
                              placeholder="请选择课程类型:"
                              style={{ width: '32%' }}
                           >
                           {subject && subject.map((item,index)=>{
                              return  <Option key={index} value={item.subject_text}>{item.subject_text}</Option>
                           })}
                           </Select>
                        )}
                     </div>
                     <div className="topic">
                        <p>请选择题目类型:</p>
                        {getFieldDecorator('topic_type', {
                           rules: [{ required: true, message: 'Please input your topic_type!' }],
                        })(
                           <Select
                              placeholder="请选择题目类型:"
                              style={{ width: '32%' }}
                           >
                           {topicTypeData&& topicTypeData.map((item,index)=>{
                              return <Option key={index} value={item.questions_type_text}>{item.questions_type_text}</Option>
                           })}
                           </Select>
                        )}
                     </div>
                  </Form.Item>
                  <Form.Item>
                        <h3>答案信息</h3>
                        <div className="shop">
                        <div className="text-area" >
                           <div ref="editorElemAnswer"
                              style={{ backgroundColor: '#f1f1f1', border: "1px solid #ccc" }}
                              className="editorElem-menu">

                           </div>
                           <div
                              style={{
                                 padding: "0 10px",
                                 overflowY: "scroll",
                                 height: 300,
                                 border: "1px solid #ccc",
                                 borderTop: "none"
                              }}
                              ref="editorElemAnswerBody" className="editorElem-body">

                           </div>
                        </div>
                     </div>
                  </Form.Item>
                  <Form.Item>
                     <Button type="primary" htmlType="submit" className="login-form-button">
                        提交
                     </Button>
                  </Form.Item>
               </Form>

            </div>
         </div>
      );
   }

   componentDidMount() {
      const elemMenu = this.refs.editorElemMenu;
      const elemBody = this.refs.editorElemBody;
      const elemMenu2 = this.refs.editorElemAnswer;
      const elemAnswerBody = this.refs.editorElemAnswerBody;

      const editor = new E(elemMenu, elemBody)
      const Answer = new E(elemMenu2, elemAnswerBody)
      // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
      editor.customConfig.onchange = html => {
         //主题
         this.setState({
            theme: editor.txt.text()
         })
      }
      Answer.customConfig.onchange = html => {
         //答案
         this.setState({
            Answers:  Answer.txt.text()
         })
      }
      Answer.customConfig.menus = [
         'head',  // 标题
         'bold',  // 粗体
         'fontSize',  // 字号
         'fontName',  // 字体
         'italic',  // 斜体
         'underline',  // 下划线
         'strikeThrough',  // 删除线
         'foreColor',  // 文字颜色
         'backColor',  // 背景颜色
         'link',  // 插入链接
         'list',  // 列表
         'justify',  // 对齐方式
         'quote',  // 引用
         'emoticon',  // 表情
         'image',  // 插入图片
         'table',  // 表格
         'video',  // 插入视频
         'code',  // 插入代码
         'undo',  // 撤销
         'redo'  // 重复
      ]
      Answer.customConfig.uploadImgShowBase64 = true
      Answer.create()
      Answer.customConfig.uploadImgServer = 'https://gtacms.gtarcade.com/backend/Answer/index?action=uploadimage';  // 上传图片到服务器
      // 3M
      Answer.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
      // 限制一次最多上传 5 张图片
      Answer.customConfig.uploadImgMaxLength = 1;
      // 自定义文件名
      Answer.customConfig.uploadFileName = 'Answer_img';
      // 将 timeout 时间改为 3s
      Answer.customConfig.uploadImgTimeout = 5000;
      Answer.customConfig.uploadImgHooks = {
        //  before: function (xhr, editor, files) {
          
        //  },
        //  success: function (xhr, editor, result) {
           
        //  },
        //  fail: function (xhr, editor, result) {
           
        //  },
        //  error: function (xhr, editor) {

        //  },
         customInsert: function (insertImg, result, editor) {
            var url = result.data[0];
            insertImg(url);
         }
      }

      editor.customConfig.menus = [
         'head',  // 标题
         'bold',  // 粗体
         'fontSize',  // 字号
         'fontName',  // 字体
         'italic',  // 斜体
         'underline',  // 下划线
         'strikeThrough',  // 删除线
         'foreColor',  // 文字颜色
         'backColor',  // 背景颜色
         'link',  // 插入链接
         'list',  // 列表
         'justify',  // 对齐方式
         'quote',  // 引用
         'emoticon',  // 表情
         'image',  // 插入图片
         'table',  // 表格
         'video',  // 插入视频
         'code',  // 插入代码
         'undo',  // 撤销
         'redo'  // 重复
      ]
      editor.customConfig.uploadImgShowBase64 = true
      editor.create()
      editor.customConfig.uploadImgServer = 'https://gtacms.gtarcade.com/backend/editor/index?action=uploadimage';  // 上传图片到服务器
      // 3M
      editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
      // 限制一次最多上传 5 张图片
      editor.customConfig.uploadImgMaxLength = 1;
      // 自定义文件名
      editor.customConfig.uploadFileName = 'editor_img';
      // 将 timeout 时间改为 3s
      editor.customConfig.uploadImgTimeout = 5000;

      
      subject().then((res)=>{
         this.setState({
            subject : res.data.result
         })
      })
      examType().then((res)=>{
         this.setState({
            examTypeData : res.data.result
         })
      })
      topicType().then((res)=>{
         this.setState({
            topicTypeData : res.data.result
         })
      })
   };
   componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}
}

export default Form.create({ name: "normal_login" })(addQuestions);

import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import E from "wangeditor";
import { editSubmission, examSubject, examType, TopicTypes } from "@/api/watch";
// import "@/assets/css/addQuestions.css";

const { Option } = Select;

class delate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: "",
      Answer: "",
      data: "",
      subjectData: "",
      examType: "",
      TopicTypes: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { id } = this.props.match.params;
        let questions_answer = this.state.editorContent;
        let { title, exam_type, course_type, topic_type } = values;
        //提交
        editSubmission({
          questions_answer,
          title,
          exam_type,
          subject_text: course_type,
          questions_type_text: topic_type,
          questions_id: id
        }).then(res => {
          console.log(res);
        });
      }
    });
  };
  render() {
    const { subjectData, examType, TopicTypes } = this.state;
    const {
      title,
      questions_answer,
      questions_theme
    } = this.props.location.item;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="addQuestions">
        <div style={{ overflow: "auto" }}>
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            style={{ margin: "30px" }}
          >
            <Form.Item>
              <div className="information">
                <h3>题目信息</h3>
                <p>题干</p>
                {getFieldDecorator("title", {
                  rules: [
                    { required: true, message: "Please input your title!" }
                  ]
                })(
                  <Input
                    placeholder={title}
                    style={{ width: "490px", height: "40px" }}
                  />
                )}
              </div>
            </Form.Item>
            <Form.Item>
              <div className="shop">
                <h4>题目主题</h4>
                <div className="text-area">
                  <div
                    ref="editorElemMenu"
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #ccc"
                    }}
                    className="editorElem-menu"
                  ></div>
                  <div
                    style={{
                      padding: "0 10px",
                      overflowY: "scroll",
                      height: 300,
                      border: "1px solid #ccc",
                      borderTop: "none"
                    }}
                    ref="editorElemBody"
                    className="editorElem-body"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: questions_theme }}
                    />
                  </div>
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="examination">
                <p>请选择考试类型:</p>
                {getFieldDecorator("exam_type", {
                  rules: [
                    { required: true, message: "Please input your exam_type!" }
                  ]
                })(
                  <Select
                    placeholder="请选择考试类型:"
                    style={{ width: "32%", height: "50" }}
                  >
                    {examType &&
                      examType.map((item, index) => {
                        return (
                          <Option key={item.tid} value={item.type_name}>
                            {item.type_name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </div>
              <div className="curriculum">
                <p>请选择课程类型:</p>
                {getFieldDecorator("course_type", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your course_type!"
                    }
                  ]
                })(
                  <Select
                    placeholder="请选择课程类型:"
                    style={{ width: "32%", height: "50" }}
                  >
                    {subjectData &&
                      subjectData.map((item, index) => {
                        return (
                          <Option
                            key={item.subject_id}
                            value={item.subject_text}
                          >
                            {item.subject_text}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </div>
              <div className="topic">
                <p>请选择题目类型:</p>
                {getFieldDecorator("topic_type", {
                  rules: [
                    { required: true, message: "Please input your topic_type!" }
                  ]
                })(
                  <Select
                    placeholder="请选择题目类型:"
                    style={{ width: "32%", height: "50" }}
                  >
                    {TopicTypes &&
                      TopicTypes.map((item, index) => {
                        return (
                          <Option
                            key={item.id}
                            value={item.questions_type_text}
                          >
                            {item.questions_type_text}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </div>
            </Form.Item>
            <Form.Item>
              <h3>答案信息</h3>
              <div className="shop">
                <div className="text-area">
                  <div
                    ref="editorElemAnswer"
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #ccc"
                    }}
                    className="editorElem-menu"
                  ></div>
                  <div
                    style={{
                      padding: "0 10px",
                      overflowY: "scroll",
                      height: 300,
                      border: "1px solid #ccc",
                      borderTop: "none"
                    }}
                    ref="editorElemAnswerBody"
                    className="editorElem-body"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: questions_answer }}
                    />
                  </div>
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
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
    const editor = new E(elemMenu, elemBody);
    const Answer = new E(elemMenu2, elemAnswerBody);

    //课程类型 (javascript上...)
    examSubject().then(res => {
      this.setState({
        subjectData: res.data.result
      });
    });

    //考试类型
    examType().then(res => {
      this.setState({
        examType: res.data.result
      });
    });
    //题目类型
    TopicTypes().then(res => {
      this.setState({
        TopicTypes: res.data.result
      });
    });

    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: editor.txt.html()
      });
    };
    Answer.customConfig.onchange = html => {
      this.setState({
        Answer: editor.txt.html()
      });
    };
    Answer.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "video", // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    Answer.customConfig.uploadImgShowBase64 = true;
    Answer.create();
    Answer.customConfig.uploadImgServer =
      "https://gtacms.gtarcade.com/backend/Answer/index?action=uploadimage"; // 上传图片到服务器
    // 3M
    Answer.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    // 限制一次最多上传 5 张图片
    Answer.customConfig.uploadImgMaxLength = 1;
    // 自定义文件名
    Answer.customConfig.uploadFileName = "Answer_img";
    // 将 timeout 时间改为 3s
    Answer.customConfig.uploadImgTimeout = 5000;
    Answer.customConfig.uploadImgHooks = {
      before: function(xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
        // alert("前奏");
      },
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        // var url = result.data.url;
        // alert(JSON.stringify(url));
        // editor.txt.append(url);
        // alert("成功");
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        alert("失败");
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        // alert("错误");
      },
      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function(insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.data[0];
        insertImg(url);
        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    };

    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "video", // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    editor.customConfig.uploadImgShowBase64 = true;
    editor.create();
    editor.customConfig.uploadImgServer =
      "https://gtacms.gtarcade.com/backend/editor/index?action=uploadimage"; // 上传图片到服务器
    // 3M
    editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    // 限制一次最多上传 5 张图片
    editor.customConfig.uploadImgMaxLength = 1;
    // 自定义文件名
    editor.customConfig.uploadFileName = "editor_img";
    // 将 timeout 时间改为 3s
    editor.customConfig.uploadImgTimeout = 5000;

    editor.customConfig.uploadImgHooks = {
      before: function(xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
        // alert("前奏");
      },
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        // var url = result.data.url;
        // alert(JSON.stringify(url));
        // editor.txt.append(url);
        // alert("成功");
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        alert("失败");
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        // alert("错误");
      },
      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function(insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.data[0];
        insertImg(url);
        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    };
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
}

export default Form.create({ name: "normal_login" })(delate);

import React, { Component } from "react";
import { Table, Modal, Button } from "antd";
import "@/assets/css/questionsType.css";
import { getQuestionType, AddQuestionType } from "@/api/questions";

const columns = [
  {
    title: "类型ID",
    dataIndex: "questions_type_id"
  },
  {
    title: "类型名称",
    dataIndex: "questions_type_text"
  },
  {
    title: "操作",
    dataIndex: "fn"
  }
];

class addQuestions extends Component {
  state = {
    visible: false,
    inp: "",
    data: []
  };
  componentDidMount() {
    this.getQuestionTypeData();
  }
  // 获取所有试题类型
  getQuestionTypeData() {
    getQuestionType().then(res => {
      let data = res.data.result;
      data.forEach((item, index) => {
        item = item.key = index;
      });
      this.setState({
        data
      });
    });
  }
  // 点击按钮
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  // 点击确认
  handleOk = () => {
    let { inp } = this.state;
    AddQuestionType(inp).then(res => {
      if (res.data.code * 1 === 1) {
        this.getQuestionTypeData();
        this.setState({
          visible: false
        });
      }
    });
  };
  // 点击取消
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  // 点叉关闭
  onCancel = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    let { data } = this.state;
    return (
      <div className="sjfl">
        <div style={{ marginBottom: "30px" }}>
          <Button type="primary" onClick={this.showModal}>
            + 添加类型
          </Button>
          <Modal
            title="创建新类型"
            visible={this.state.visible}
            onCancel={this.onCancel}
            footer={[
              <Button key="back" type="primary" onClick={this.handleOk}>
                确认
              </Button>,
              <Button key="submit" onClick={this.handleCancel}>
                取消
              </Button>
            ]}
          >
            <input
              type="text"
              placeholder="请输入试卷的类型"
              className="lxinput"
              onChange={e => {
                this.setState({
                  inp: e.target.value
                });
              }}
            />
          </Modal>
        </div>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
    );
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
}

export default addQuestions;

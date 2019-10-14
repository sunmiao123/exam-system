/*
 * @Author: sunmiao
 * @Date: 2019-09-03 10:52:30
 * @Last Modified by: sunmiao
 * @Last Modified time: 2019-09-09 10:04:13
 */
import React, { Component } from "react";
import { Tag } from "antd";

export default class index extends Component {
  //查看试题
  watchExamFn(questions_id, props, item) {
    props.history.push({
      "pathname":"/main/test/"+questions_id,
      query:{item}
    })
  }
  // 编辑试题
  editFn(questions_id, props, item) {
    props.history.push({
      "pathname":"/main/editDeltai/"+questions_id,
      item
    })
  }
  render() {
    let { item, props } = this.props;
    return (
      <div className="list">
        <ul
          className="list-left"
          onClick={this.watchExamFn.bind(this, item.questions_id, props, item)}
        >
          <li>{item.title}</li>
          <li>
            <Tag color="blue">{item.questions_type_text}</Tag>
            <Tag color="geekblue">{item.subject_text}</Tag>
            <Tag color="orange">{item.exam_type}</Tag>
          </li>
          <li>{item.user_id}发布</li>
        </ul>
        <ul className="list-right">
          <span
            onClick={this.editFn.bind(this, item.questions_id, props, item)}
          >
            编辑
          </span>
        </ul>
      </div>
    );
  }
}

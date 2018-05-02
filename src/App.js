import React, { Component } from "react";

import { Button, message } from "antd";
import "./App.css";
import PrintModal from "./PrintModal";
const testOptions = [
  {
    name: "选项13434343",
    value: "option1"
  },
  {
    name: "选项2",
    value: "option2"
  },
  {
    name: "选项3",
    value: "option3"
  }
];
const testObj = {
  src:
    "https://qr.api.cli.im/qr?data=www.baidu.com&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=f33aa9d4852b6c3e3439d4e50f311c26"
};
const testData = [];
for (let i = 0; i < 27; i++) {
  testData.push(testObj);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 模态窗显示隐藏
      visible: true,
      // 纸张大小
      pageSize: "A4",
      // 页边距
      pageMarginTop: 1.27,
      pageMarginBottom: 1.27,
      pageMarginLeft: 1.27,
      pageMarginRight: 1.27,
      // 排版样式
      composingStyle: "1X1",
      // 显示名称
      nameValues: [""]
    };
  }
  selectNameValue(index, nameValue) {
    let { nameValues } = this.state;
    nameValues[index] = nameValue;
    this.setState({
      nameValues
    });
  }
  addNameValue() {
    let { nameValues } = this.state;
    if (nameValues.length === 3) {
      message.error("显示名称最多支持三个字段选择");
    } else {
      this.setState({
        nameValues: [...nameValues, ""]
      });
    }
  }
  removeNameValue(index) {
    let { nameValues } = this.state;
    nameValues = nameValues.filter((nameValue, nameValueIndex) => {
      return nameValueIndex !== index;
    });
    this.setState({
      nameValues
    });
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  changePageSize(newSize) {
    this.setState({
      pageSize: newSize
    });
  }
  changeComposingStyle(newStyle) {
    this.setState({
      composingStyle: newStyle
    });
  }
  changePageMargin(type, nextValue) {
    switch (type) {
      case "top":
        this.setState({
          pageMarginTop: nextValue
        });
        break;
      case "bottom":
        this.setState({
          pageMarginBottom: nextValue
        });
        break;
      case "left":
        this.setState({
          pageMarginLeft: nextValue
        });
        break;
      default:
        this.setState({
          pageMarginRight: nextValue
        });
        break;
    }
  }
  render() {
    let me = this;
    const printModalProps = {
      ...this.state,
      changePageMargin: this.changePageMargin.bind(this),
      changePageSize: this.changePageSize.bind(this),
      changeComposingStyle: this.changeComposingStyle.bind(this),
      addNameValue: this.addNameValue.bind(this),
      removeNameValue: this.removeNameValue.bind(this),
      selectNameValue: this.selectNameValue.bind(this),
      options: testOptions,
      allData:testData,
      onCancel() {
        me.setState({
          visible: false
        });
      },
      onOk() {
        window.print()
        me.setState({
          visible: false
        });
      }
    };
    return (
      <div className="App">
        <Button type="primary" onClick={this.showModal.bind(this)}>
          打印预览
        </Button>
        {this.state.visible ? <PrintModal {...printModalProps} /> : null}
      </div>
    );
  }
}

export default App;

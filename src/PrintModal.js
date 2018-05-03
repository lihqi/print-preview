import React, { Component } from "react";
import { Modal } from "antd";
import PrintSet from "./PrintSet";
import PrintPreview from "./PrintPreview";
class PrintModal extends Component {
  render() {
    return (
      <Modal
        title="打印设置"
        visible={this.props.visible}
        onOk={this.props.onOk}
        onCancel={this.props.onCancel}
        okText="确定"
        width="230mm"
        style={{ top: 20 }}
      >
        <div className="print-query-code-modal clearfix">
          <PrintSet {...this.props} />
          <div className="print-preview-container">
            <PrintPreview {...this.props} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default PrintModal;

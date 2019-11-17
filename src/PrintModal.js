import React, { Component } from "react";
import PrintSet from "./PrintSet";
import PrintPreview from "./PrintPreview";
import ReactToPrint from "react-to-print";
import { Button } from "antd";
class PrintModal extends Component {
  render() {
    return (
      <div className="print-query-code-modal clearfix">
        <PrintSet {...this.props} />
        <ReactToPrint
          trigger={() => (
            <div className="print-btn">
              <Button>打印</Button>
            </div>
          )}
          content={() => {
            return this.componentRef;
          }}
          bodyClass="print-query-code-iframe"
        />
        <div className="print-preview-container">
          <div ref={el => (this.componentRef = el)}>
            <PrintPreview {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrintModal;

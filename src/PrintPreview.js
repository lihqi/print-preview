import React, { Component } from "react";
import PageSizeContainer from "./PageSizeContainer";
const QRCodeContainerMap = {
  "1X1": 1,
  "1X2": 2,
  "2X3": 6,
  "3X4": 12
};
class PrintPreview extends Component {
  render() {
    const { composingStyle, allData } = this.props;
    let result = [];
    // 切割allData 每个数组data的个数
    const itemLength = QRCodeContainerMap[composingStyle];
    for (let i = 0, len = allData.length; i < len; i += itemLength) {
      result.push(allData.slice(i, i + itemLength));
    }
    return result.map((resultItem, index) => {
      return (
        <div className={`QR-code-container p${composingStyle}`} key={index}>
          <PageSizeContainer
            {...this.props}
            oneItem={resultItem}
            itemLength={itemLength}
          />
        </div>
      );
    });
  }
}

export default PrintPreview;

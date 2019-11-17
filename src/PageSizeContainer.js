import React, { Component } from "react";

class PageSizeContainer extends Component {
  render() {
    const {
      pageMarginBottom,
      pageMarginLeft,
      pageMarginRight,
      pageMarginTop,
      pageSize,
      oneItem,
      itemLength
    } = this.props;
    const emptyList = [];
    return (
      <div className={`${pageSize}-page-size`}>
        <div
          className={`${pageSize}-page-content`}
          style={{
            paddingBottom: pageMarginBottom / 2 + "cm",
            paddingTop: pageMarginTop / 2 + "cm",
            paddingLeft: pageMarginLeft / 2 + "cm",
            paddingRight: pageMarginRight / 2 + "cm"
          }}
        >
          {oneItem.map((oneData, oneDataIndex) => {
            return (
              <div className="QR-code-container" key={oneDataIndex}>
                <img src={oneData.src} alt={oneDataIndex} />
                <p>数据标题数据...</p>
              </div>
            );
          })}
          {(() => {
            if (itemLength > oneItem.length) {
              for (let i = 0; i < itemLength - oneItem.length; i++) {
                emptyList.push(
                  <div className="QR-code-container empty-container" key={i}>
                    <div className="empty-content" />
                    <p>数据标题</p>
                  </div>
                );
              }
            }
          })()}
          {emptyList.length ? emptyList : null}
        </div>
      </div>
    );
  }
}

export default PageSizeContainer;

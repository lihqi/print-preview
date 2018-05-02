import React, { Component } from "react";
import { Select, InputNumber, Icon } from "antd";
const Option = Select.Option;

const pageSizes = ["A4", "A3", "B5", "A5"];
const composingStyles = ["1X1", "1X2", "2X3", "3X4"];
const numbersMap = {
  "0": "一",
  "1": "二",
  "2": "三"
};
let throttle = function(fn, delay) {
  let timer = null;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
};
class PrintSet extends Component {
  render() {
    const {
      changePageMargin,
      changePageSize,
      pageMarginBottom,
      pageMarginLeft,
      pageMarginRight,
      pageMarginTop,
      pageSize,
      composingStyle,
      changeComposingStyle,
      nameValues,
      addNameValue,
      removeNameValue,
      selectNameValue,
      options
    } = this.props;
    return (
      <div className="print-set">
        <fieldset>
          <legend>纸张大小</legend>
          {/* <Select
            value={pageSize}
            style={{ width: "100%" }}
            size="small"
            onChange={changePageSize}
          >
            {pageSizes.map((pageSize, index) => {
              return (
                <Option value={pageSize} key={index}>
                  {pageSize}
                </Option>
              );
            })}
          </Select> */}
          <p className="tmp-A4">A4</p>
        </fieldset>
        <fieldset>
          <legend>页边距</legend>
          <div>
            上:{" "}
            <InputNumber
              size="small"
              precision={2}
              step={0.01}
              value={pageMarginTop}
              onChange={val => {
                changePageMargin("top", val);
              }}
            />
            厘米
          </div>
          <div>
            下:{" "}
            <InputNumber
              size="small"
              precision={2}
              step={0.01}
              value={pageMarginBottom}
              onChange={val => {
                changePageMargin("bottom", val);
              }}
            />
            厘米
          </div>
          <div>
            左:{" "}
            <InputNumber
              size="small"
              precision={2}
              step={0.01}
              value={pageMarginLeft}
              onChange={val => {
                changePageMargin("left", val);
              }}
            />
            厘米
          </div>
          <div>
            右:{" "}
            <InputNumber
              size="small"
              precision={2}
              step={0.01}
              value={pageMarginRight}
              onChange={val => {
                changePageMargin("right", val);
              }}
            />
            厘米
          </div>
        </fieldset>
        <fieldset>
          <legend>排版样式</legend>
          <Select
            value={composingStyle}
            style={{ width: "100%" }}
            size="small"
            onChange={changeComposingStyle}
          >
            {composingStyles.map((composingStyle, index) => {
              return (
                <Option value={composingStyle} key={index}>
                  {composingStyle}
                </Option>
              );
            })}
          </Select>
        </fieldset>
        <fieldset>
          <legend>显示名称</legend>
          <div>
            <p className="name-value-text">
              {nameValues.map((nameValue, index) => {
                let showValue;
                if (nameValue) {
                  showValue = nameValue;
                } else {
                  let indexStr = "" + index;
                  showValue = `字段${numbersMap[indexStr]}`;
                }
                return `[${showValue}]`;
              })}
            </p>
          </div>
          <div>
            {nameValues.map((nameValue, index) => {
              let icon=null;
              // if (index < 1) {
              //   icon = (
              //     <Icon
              //       type="plus-circle-o"
              //       onClick={throttle(addNameValue, 300)}
              //     />
              //   );
              // } else {
              //   icon = (
              //     <Icon
              //       type="minus-circle-o"
              //       onClick={() => {
              //         removeNameValue(index);
              //       }}
              //     />
              //   );
              // }
              let showValue = nameValue ? nameValue : "请选择字段";
              return (
                <div key={index}>
                  <Select
                    key={index}
                    value={showValue}
                    style={{ width: "100%" }}
                    size="small"
                    onChange={value => {
                      selectNameValue(index, value);
                    }}
                  >
                    {options.map((option, optionIndex) => {
                      return (
                        <Option value={option.value} key={optionIndex}>
                          {option.name}
                        </Option>
                      );
                    })}
                  </Select>
                  <div className="icon-container">{icon}</div>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default PrintSet;

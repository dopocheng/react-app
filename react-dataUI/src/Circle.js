import React from 'react';

class Circle extends React.Component {
  render() {
    // 定义一个圆形
    var circleStyle = {
      padding: 10,
      margin: 20,
      dosplay: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height:  100
    };
    return (
      <div style={circleStyle}></div>
    );
  }
}

export default Circle;

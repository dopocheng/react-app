import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card">
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    );
  }
}

class Square extends Component {
  render() {
    // square css样式
    var squareStyle = {
      height: 150,
      // 动态添加颜色
      backgroundColor: this.props.color
    }

    return(
      <div style={squareStyle}></div>
    );
  }
}

class Label extends Component {
  render() {
    // label css样式
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return(
      <div style={labelStyle}>  
        <p>{this.props.color}</p>
      </div>
    );
  }
}

export default Card;

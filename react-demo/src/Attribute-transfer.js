import React from 'react';

// 组件的属性传递
//子组件
class Display extends React.Component {
    render() {
        return (
            <div>
                {/* 属性扩展操作符color={this.props.color}
                                num={this.props.num}        ==>> {...this.props}
                                size={this.props.size} */}
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}
// Display 的父组件
class Label extends React.Component {
    render() {
        return(
            <Display {...this.props}
            />
        )
    }
}
//Label 的父组件
class Shirt extends React.Component {
    render() {
        return(
            <Label {...this.props}
            />
        );
    }
}

export default Shirt;
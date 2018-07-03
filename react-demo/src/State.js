import React from 'react';

class  LightningCounter extends React.Component {
    constructor(props){
        super(props);
        //初始化
        this.state={ strikers: 0 };
        this.timerTick = this.timerTick.bind(this);
   }

    // 执行的函数
    timerTick() {
        console.log("timerTick")
        //写法不更新页组件
        // this.setState={
        //     strikers: this.state.strikers + 100
        // }
        this.setState({
            strikers: this.state.strikers + 100
        })
    }
    // 每秒调用
   componentDidMount (){ 
       console.log("232323")
       setInterval(this.timerTick, 1000);
   }

    render() {
        var counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        }
        var count = this.state.strikers.toLocaleString()
;        return(
            <h1 style={counterStyle}>{count}</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        var commonStyle = {
            margin: 0,
            padding: 0
        }
        var divStyle ={
            width: 250,
            textAlign:"center",
            backgroundColor:"black",
            padding: 40,
            color: "#999",
            fontFamily: "sans-serif",
            borderRadius: 10
        };
        var textStyle = {
            emphasis: {
                fontSize: 38,
                ...commonStyle
            },
            smallEmpasis: {
                ...commonStyle
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        }
        return (
            <div style={divStyle}>
                <LightningCounter />
                <h2 style={textStyle.smallEmpasis}>雷霆打击</h2>
                <h2 style={textStyle.emphasis}>我们的地球</h2>
                <p style={textStyle.small}>(自从你加载这个组件之后)</p>
            </div>
        );
    }
}

export default LightningCounterDisplay;
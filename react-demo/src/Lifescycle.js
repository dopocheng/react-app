import React from 'react';
import ReactDOM from 'react-dom';
// import CircularJSON from 'circular-json';


/**
 * React、组件的生命周期
 * pitcher
 * @class Lifecycle
 * @extends {React.Component}
 */

class Counter extends React.Component {
    /**************************************组件被更改之后也会触发相应的生命周期***********************************/
    // 当组件被更改后会调用此函数；属性更改 display={this.state.count}
    componentWillReceiveProps(newProos) {
        console.log("componentWillReceiveProps: Counter receive new pros");
        return;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: should Counter update");
        return true;
    }
    //调用 render 函数渲染页面
    componentWillUpdate() {
        console.log("componentWillUpdate: Counter will update");
        return;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate: Counter did update");
        return;
    }
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        }
        return(
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}


//父组件
class Lifecycle extends React.Component {
    constructor(props){
        super(props);
        this.state=(
            console.log("getInitialState: set default state object"),
            // console.info(this.props),
            {count:0}
        )
        this.increase = this.increase.bind(this);
        //只能这样定义变量？
        this.container = document.getElementById('container');
        // console.info(this.container)
    }
    
    //1.默认的 props 构造 this.props 对象
    static defaultProps = (console.log("getDefaultProps: receive props from outsize"));
    //默认的 props(es6写法参上)
    // getDefaultProps() {
    //     console.log("getDefaultProps: receive props from outsize");
    //     return {};
    // }

     //2.是设置组件mount以后的初始 创建组件原生的状态对象（es6写法变化放到 constructor）
    //  getInitialState() {
    //     console.log("getInitialState: set default state object");
    //     return {}; 
    // }
    //3.组件加载到页面或挂载到 dom 节点之前调用
    componentWillMount() {
        console.log("componentWillMount: component will about to mount");
    }
    //4.render 函数渲染页面之后调用 componentDidMount 组件成功加载到页面里
    componentDidMount() {
        console.log("componentDidMount: component is just mount");
        return;
    }

    // 增加加计数函数
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    /******************************************更新组件调用的生命周期函数**********************/
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: should component update?");
        if(newState.count < 5) {
            console.log("Component should update");
            // 若是 true 则调用 render 函数
            return true;
        } else {
            console.log(this.container+"&&&&&&&Component should not update");
            ReactDOM.unmountComponentAtNode(this.container);
            return false;
        }
    }
    //此函数会调用 render 函数去更新组件在界面上的显示内容
    componentWillUpdate() {
        console.log("componentWillUpdate: component is about update");
        return;
    }
    //render 调用完后还要在调用
    componentDidUpdate() {
        console.log("componentDidUpdate: component is just update");
        return;
    }
    /**********************************生命周期结束************************************ */
    componentWillUnmount() {
        console.log("componentWillUnmount: component is removed from dom");
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        }
        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <button onClick={this.increase}>+</button>
            </div> 
        );
    }

}

export default Lifecycle;
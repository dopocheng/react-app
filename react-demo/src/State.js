import React from 'react';

class  LightningCounter extends React.Component {
    render() {
        return(
            <h1>你好</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        var divStyle ={
            width: 250,
            textAlign:"center",
            backgroundColor:"black",
            padding: 40,
            fontFamily: "sans-serif",
            borderRadius: 10
        };
        return (
            <div style={divStyle}>
                <LightningCounter />
            </div>
        );
    }
}

export default LightningCounterDisplay;
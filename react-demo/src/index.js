import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import Shirt from './Attribute-transfer';
// import LightningCounterDisplay from './State';
import Lifecycle from './Lifescycle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        {/* <Card color={"red"}/> */}
        {/* <Shirt color="deepbule" num="3.14" size="medium"/>*/}     
        {/* <LightningCounterDisplay /> */}
        <Lifecycle dom="container"/>
    </div>  
    , document.getElementById('container')
);
registerServiceWorker();
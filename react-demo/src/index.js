import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Shirt from './Attribute-transfer';
import LightningCounterDisplay from './State'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        {/* <Card color={"red"}/> */}
        {/* <Shirt color="deepbule" num="3.14" size="medium"/>*/}
        <div>
            <LightningCounterDisplay />

        </div>
    </div>  
    , document.getElementById('container')
);
registerServiceWorker();
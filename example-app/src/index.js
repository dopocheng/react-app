import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        {/* 处理路由的逻辑,如果访问的是根目录就显示component指的组件 */}
        <Route path="/" component={App} /> 
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

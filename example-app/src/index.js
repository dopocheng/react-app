import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,} from 'react-router-dom'; 
import './index.css';
import App from './App';
import Todolist from './Todolist'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
       <App/>    
       {/* <Todolist/>     */}
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

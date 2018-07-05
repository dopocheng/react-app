import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Circle  bgColor="red"/>, document.getElementById('root'));
registerServiceWorker();

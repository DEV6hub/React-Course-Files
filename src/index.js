import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShirtShop from './App';
import Demos from './Demos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demos />, document.getElementById('root'));
registerServiceWorker();

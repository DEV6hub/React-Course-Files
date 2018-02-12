import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Demos from './Demos/Demos';
ReactDOM.render(<Demos />, document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ShirtShop from './ShirtShopApp/App';
import Demos from './Demos/Demos';

import registerServiceWorker from './registerServiceWorker';

//render one or the other
// ReactDOM.render(<ShirtShop />, document.getElementById('root'));
ReactDOM.render(<Demos />, document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//render one or the other

// import ShirtShop from './ShirtShopApp/App';
// ReactDOM.render(<ShirtShop />, document.getElementById('root'));

import Demos from './Demos/Demos';
ReactDOM.render(<Demos />, document.getElementById('root'));

registerServiceWorker();

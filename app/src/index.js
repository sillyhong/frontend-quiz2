import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import RouterMap from './router/routerMap'
import registerServiceWorker from './registerServiceWorker';

import './static/css/index.css'

ReactDOM.render(
    <RouterMap history={hashHistory}></RouterMap>,
    document.getElementById('root'));

registerServiceWorker();

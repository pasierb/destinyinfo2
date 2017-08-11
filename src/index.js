import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'foundation-sites/dist/css/foundation-float.css';
import './style.scss';

const rootElement = document.getElementById('body');
const data = JSON.parse(rootElement.getAttribute('data'));

rootElement.setAttribute('data', '');

ReactDOM.render(<App {...data} />, rootElement);

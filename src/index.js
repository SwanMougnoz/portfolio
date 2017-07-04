import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

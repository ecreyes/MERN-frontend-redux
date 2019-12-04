import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

import {getArticulosAction} from './actions/articulo';
store.dispatch(getArticulosAction("REQUEST_ARTICULOS"));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

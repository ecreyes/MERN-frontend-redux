import React from 'react';
import ReactDOM from 'react-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//redux
import { Provider } from 'react-redux';
import store from './store';

//componente principal
import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from './components/App';
import { MuiThemeProvider } from 'material-ui/styles';
import {Store} from "./store/index";

import './index.css';

ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

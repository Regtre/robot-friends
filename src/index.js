import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { store } from './containers/store'
import './styles/index.css';
import 'tachyons';
import App from "./containers/App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
);


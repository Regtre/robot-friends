import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'tachyons';
import App from "./containers/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);


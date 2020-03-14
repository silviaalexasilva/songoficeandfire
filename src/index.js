import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from 'react-dom';



const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>, rootElement);
} else {
    render(   
    <BrowserRouter>
        <App />
    </BrowserRouter>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
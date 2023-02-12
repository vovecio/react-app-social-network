import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import navbar from "./constants/navbar";
import store from "./redux/info";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (info) => {
    root.render(
        <React.StrictMode>
            <App info={info} navbar={navbar} store={store}/>
        </React.StrictMode>
    );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

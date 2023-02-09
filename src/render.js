import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessageText, updateNewPostText} from "./redux/info";
import navbar from "./constants/navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let  rerenderEntireTree = (info) => {
    root.render(
        <React.StrictMode>
            <App info={info} navbar={navbar} addPost={addPost} updatePostText={updateNewPostText} addMessage={addMessage} updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
};
import {rerenderEntireTree} from "./render";
import reportWebVitals from "./reportWebVitals";
import info from "./redux/info";


rerenderEntireTree(info);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

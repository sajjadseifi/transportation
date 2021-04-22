import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//styles
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/scss/bootstrap.scss';
//application 
import App from "./container/App";
//router app 
import { Router } from "react-router-dom";
//redux store
import Store from "./@redux/store";
//location and hidtory of route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
//persian date
export const persianDate = require("persian-date");

const IndexApp = () => {
    return (
        <Router history={history}>
            <Store>
                <App />
            </Store>
        </Router>
    );
};

const root = document.getElementById("root");

ReactDOM.render(<IndexApp />, root);

reportWebVitals();

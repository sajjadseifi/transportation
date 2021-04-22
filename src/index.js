import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//styles
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'rsuite/lib/'; // or 'rsuite/dist/styles/rsuite-default.css'
import 'bootstrap/scss/bootstrap.scss';
import "rsuite/dist/styles/rsuite-default.css";
import "./index.css";
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
                sddf
            </Store>
        </Router>
    );
};
const root = document.getElementById("root");

ReactDOM.render(<IndexApp />, root);

reportWebVitals();

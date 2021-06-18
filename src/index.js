import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//styles
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'rsuite/lib/'; // or 'rsuite/dist/styles/rsuite-default.css'
import 'bootstrap/scss/bootstrap.scss';
import "rsuite/dist/styles/rsuite-default.css";
import "./index.css";
import "./_style.scss";
import "./fontawesome.min.css";

//application 
import App from "./app/App";
//router app 
import { Router } from "react-router-dom";
//redux store
import Store from "./@redux/store";
//location and hidtory of route
import { createBrowserHistory } from "history";
import { SecurityProvider } from "./core/security";
import { roleType, securitySimpleOption } from "./constants";
export const history = createBrowserHistory();
//persian date
export const persianDate = require("persian-date");



const IndexApp = () => {
    return (
        <Router history={history}>
            <Store>
                <SecurityProvider
                    user={{
                        role: roleType.CUSTOMER,
                        levelInRole: 0
                    }}
                    options={securitySimpleOption}>
                    <App />
                </SecurityProvider>
            </Store>
        </Router>
    );
};
const root = document.getElementById("root");

ReactDOM.render(<IndexApp />, root);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import Store from "./@redux/store";
import { createBrowserHistory } from "history";
// import Cookies from "universal-cookie";
// import { momentLocalizer } from "react-big-calendar";
// import "./index.css";
// import "semantic-ui-css/semantic.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import "fa-icons";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "react-phone-input-2/lib/style.css";

// momentLocalizer();
// export const cookies = new Cookies();
// export const persianDate = require("persian-date");

export const history = createBrowserHistory();

const IndexApp = () => <Router history={history}><Store><App /></Store></Router>;
const root = document.getElementById("root");

ReactDOM.render(<IndexApp />,root);

reportWebVitals();

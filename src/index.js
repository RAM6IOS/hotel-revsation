import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation,
} from "react-router-dom";

import App from "./App";

ReactDOM.render(
   <Router>


  <App />


   </Router>,


    document.getElementById("root")
);

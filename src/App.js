import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Romse from "./pages/Romse";
import Room from "./pages/Room"

import Error from "./pages/Error";
import {
    Route,
    Switch,
} from "react-router-dom";
import Navber from "./Compnent/Navber";



function App() {
    return (
        <>
            <div className="App">
                <Navber />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/romse/" component={Romse}  />
                    <Route path="/rooms/:name" component={Room}  exact/>
                    <Route component={Error} />
                </Switch>
            </div>
        </>
    );
}

export default App;
//<Route component={Error} />

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Romse from "./pages/Romse";

import SinglRomse from "./pages/SinglRomse";
import Error from "./pages/Error";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation,
} from "react-router-dom";
import Navber from "./Compnent/Navber";
import  {roomname } from "./Rooms/roomnam";



function App() {
    return (
        <>
            <div className="App">
                <Navber />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/romse/" component={Romse} />

                    {roomname.map((romnames , index) => (
                        <Route exact path={romnames.tos} component={romnames.rooms} />
                    ))}
                    <Route component={Error} />
                </Switch>
            </div>
        </>
    );
}

export default App;
//<Route component={Error} />

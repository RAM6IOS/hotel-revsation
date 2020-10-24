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
import UesrContext from "./pages/UesrContext";
import Ditel from "./Compnent/ditel";

import Bigrooms from "./Ditels/bigrooms";

function App() {
    return (
        <>
            <div className="App">
                <Navber />
                <UesrContext.Provider value={Ditel}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/romse/" component={Romse} />
                        <Route
                            exact
                            path="/romse/:slug"
                            component={SinglRomse}
                        />
                        {Bigrooms.map((big, index) => (
                            <Route exact path={big.bat} component={big.rooms} />
                        ))}
                        <Route component={Error} />
                    </Switch>
                </UesrContext.Provider>
            </div>
        </>
    );
}

export default App;

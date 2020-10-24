import React, { useContext } from "react";

import Hero from "../Compnent/hero";
import Heroerror from "../Compnent/heroerror";
import "../Compnent/Navber.css";
import Serves from "../Compnent/serves.js";

import UserContext from "./UesrContext";
import Ditles from "../Compnent/bestRoms";

function Home() {
    const value = useContext(UserContext);

    return (
        <>
            <Hero></Hero>
            <Serves tetls={"Servees"} />

            <Ditles />
        </>
    );
}

export default Home;

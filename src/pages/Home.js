import React, { useContext , useState } from "react";

import Hero from "../Compnent/allroom";
import Heroerror from "../Compnent/heroerror";
import "../Compnent/Navber.css";
import Serves from "../Compnent/serves.js";


import Ditles from "../Compnent/luxuRoms";

function Home() {
    return (
        <>
            <Hero></Hero>
            <Serves tetls={"Servees"} />

            <Ditles />


        </>
    );
}

export default Home;

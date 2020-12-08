import React, { useContext , useState } from "react";

import Hero from "../Compnent/hero";
import Heroerror from "../Compnent/heroerror";
import "../Compnent/Navber.css";
import Serves from "../Compnent/serves.js";

import { Link } from "react-router-dom";

import Ditles from "../Compnent/bestRoms";

function Home() {
const [nem , setNem]= useState()

    return (
        <>
            <Hero></Hero>
            <Serves tetls={"Servees"} />

            <Ditles />

            
        </>
    );
}

export default Home;

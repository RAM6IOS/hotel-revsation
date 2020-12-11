import React from "react";

import "./Navber.css";

import Heroerror from "./heroerror";

export default function heroroms(hero) {
    return (
        <>
            <header className="imageromse">
                <Heroerror
                    titel={"OUR ROOMS"}
                    butons={"RETURN ROOMS"}
                    tos={"/"}
                />
            </header>
        </>
    );
}

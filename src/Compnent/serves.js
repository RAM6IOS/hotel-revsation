import React, { useState } from "react";
import Ditel from "./ditel";

import "./Servesstyle.css";

function serves(props) {
    

    return (
        <div className="bakyard">
            <h3>{props.tetls}</h3>

            <div className="container-fluid">
                <div className="row">
                    {Ditel.map((tetl, index) => (
                        <div key={index} className="col-sm-12 col-lg-3 col-md-6 cols">
                            <h5 className='icons'>{tetl.icon}</h5>
                            <h4>{tetl.names}</h4>
                            <p>{tetl.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default serves;

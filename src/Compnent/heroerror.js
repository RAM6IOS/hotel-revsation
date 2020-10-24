import React from "react";
import { Link } from "react-router-dom";



import "./Navber.css";

export default function heroerror(props) {
    return (
        <>
            <header >
                <div className="container">
                    <div className="child">
                        <h1>{props.titel}</h1>
                        <h4>{props.texst}</h4>
                        <Link to={props.tos}>
                            <p>{props.butons}</p>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
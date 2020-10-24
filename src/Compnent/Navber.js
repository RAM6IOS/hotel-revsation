import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { AiOutlineAlignRight } from "react-icons/ai";
import "./Navber.css";

function Navber() {
    return (
        <>
            <nav className="navbar navbar-expand-md  colors">
                <a className="navbar-brand" href="#">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <AiOutlineAlignRight></AiOutlineAlignRight>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link" href="#">
                                    Homse
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/romse">
                                <a className="nav-link linkss" href="#">
                                    Romse
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navber;

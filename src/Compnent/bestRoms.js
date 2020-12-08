import React ,{useState} from "react";
import Ditles from "../Data";
import "./Servesstyle.css";
import { Link } from "react-router-dom";

function BestRoms() {
    return (
        <>
            <div>
                <h3 className="LUXURIOUS">LUXURIOUS ROOMS</h3>

                <div className="container">
                    <div className="row">
                        {Ditles.map((ditl, index) => (
                            <div
                                class="card col-sm-12 "
                                style={{ width: "" }}
                                key={index}
                            >
                                <img
                                    class="card-img-top"
                                    src={ditl.imgs}
                                    alt="Card image"
                                    style={{ width: "100%" }}
                                />
                                <div class="card-body">
                        <h4 class="card-title">{ditl.title}</h4>

                                    <Link to={ditl.to}>
                                        <a
                                            href="#"
                                            class="btn btn-primary btns"
                                        >
                                            Ditls
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BestRoms;

import React, { useEffect, useState } from "react";
import "./Servesstyle.css";
import { Link } from "react-router-dom";
import { roomsData } from "../data/data";
function BestRoms() {
    const [data, setData] = useState();
    useEffect(() => {
        const results = roomsData.filter((i) => i.displayAtHomePage);
        setData(results);
    }, []);
    return (
        <>
            <div>
                <h3 className="LUXURIOUS">LUXURIOUS ROOMS</h3>

                <div className="container">
                    <div className="row">

                        {data?.map((data, index) => (
                            <div
                                class="card col-sm-12 "
                                style={{
                                    width: "",
                                    display: data.displayAtHomePage
                                        ? ""
                                        : "none",
                                }}
                                key={index}
                            >
                                <img
                                    class="card-img-top"
                                    src={data.carouselImages[0].src}
                                    alt={data.carouselImages[0].src}
                                    style={{ width: "100%" }}
                                />
                                <div class="card-body">
                                    <h4 class="card-title">{data.title}</h4>

                                    <Link to={`/rooms/${data.name}`}>
                                        <a class="btn btn-primary btns">
                                            Details
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

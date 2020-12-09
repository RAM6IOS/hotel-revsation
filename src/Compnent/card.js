import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { roomsData } from "../data/data";
const { Meta } = Card;

export default function card() {
    return (
        <>
            <div>
                <div class="row">
                    {roomsData.map((room, index) => (
                        <div class="col-sm-6 col-md-4 col-lg-3  margn">
                            <Card
                                className="widths"
                                cover={
                                    <img
                                        alt={room.carouselImages.alt}
                                        src={room.carouselImages[0].src}
                                    />
                                }
                            >
                                <Meta />
                                <h5>{room.tittle}</h5>

                                <button className="but">
                                    {" "}
                                    <Link to={`/rooms/${room.name}`}>
                                        Check
                                    </Link>
                                </button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

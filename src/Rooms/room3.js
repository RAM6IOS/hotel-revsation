import React, { useState } from "react";

import "antd/dist/antd.css";

import { Carousel, DatePicker, Space, Input } from "antd";
import "./Room1.css";
import PhoneInput from "react-phone-number-input";
import Room2 from "../images/room2.jpg";
import Room3 from "../images/room3.jpg";
import Room4 from "../images/room4.jpg";
import Room5 from "../images/room5.jpg";
import Room6 from "../images/room6.jpg";
import Room7 from "../images/room7.jpg";



const { RangePicker } = DatePicker;

//Akra Hotel
export default function room1() {
    return (
        <>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li
                        data-target="#demo"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                    <li data-target="#demo" data-slide-to="5"></li>
                </ul>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Room2} alt="Los Angeles" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room3} alt="Chicago" className="imagesizi" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room4} alt="New York" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room5} alt="New York" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room6} alt="New York" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room7} alt="New York" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>

            <div>
                <div class="row">
                    <div class="col-sm-6 bor bakyard">
                        <h3>Detailing</h3>
                        <div className="padeng">
                            <h4>Room Size 135 m²</h4> This suite comes with a
                            sofa, desk, espresso machine, laminated floors and
                            air conditioning. The suite is equipped with a
                            60-inch and a 42-inch smart LED TVs. Private
                            bathroom includes a shower, bathtub, hairdryer,
                            slippers, Molton Brown toiletries and bathrobes for
                            your comfort. You will also find a laptop-size
                            safety box, pillow menu, mini-bar, two 0.5 liter
                            bottled water and a tea & coffee setup with an
                            electric kettle.
                            <div>
                                <h4>In your privatebathroom: </h4>
                                <ol>
                                    <li>Free toiletries</li>
                                    <li>Shower</li>
                                    <li>Bathrobe</li>
                                    <li>Toilet</li>
                                </ol>
                            </div>
                            <div>
                                <h4>View:</h4>
                                <ol>
                                    <li>Ocean view</li>
                                    <li>Mountain view</li>
                                </ol>
                            </div>
                            <div>
                                <h4>Room Facilities: ​</h4>
                                <ol>
                                    <li>Upper floors accessible by elevator</li>
                                    <li>Linens</li>
                                    <li>Walk-in closet</li>
                                    <li>Minibar</li>
                                    <li>Air conditioning</li>
                                    <li>Safe</li>
                                </ol>
                            </div>
                            <div>
                                <p>
                                    <strong>Smoking:</strong>No smoking
                                </p>
                            </div>
                            <h4>Parking: ​</h4>
                            Private parking is possible on site (reservation is
                            not needed) and costs RUB 4,000 per day.
                        </div>
                    </div>
                    <div class="col-sm-6 bor bakyard">
                        <h3>Check</h3>
                        <div>
                            <Space direction="vertical" size={17}>
                                <RangePicker />
                                <Input placeholder="Name"></Input>
                                <Input placeholder="E-mail"></Input>
                                <Input placeholder="Phone Number"></Input>
                                <button>Check</button>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

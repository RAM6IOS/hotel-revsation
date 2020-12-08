import React, { useState } from "react";

import "antd/dist/antd.css";

import { Carousel, DatePicker, Space, Input } from "antd";
import "./Room1.css";
import PhoneInput from "react-phone-number-input";
import Room17 from "../images/room16.jpg";
import Room15 from "../images/room14.jpg";
import Room16 from "../images/room15.jpg";


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
                </ul>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Room17} alt="Los Angeles" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room15} alt="Chicago" />
                    </div>
                    <div class="carousel-item">
                        <img src={Room16} alt="New York" />
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
                <div class="row" >
                    <div class="col-sm-6 bor bakyard">
                        <h3>Detailing</h3>
                        <div className="padeng">
                            <h4>Room Size 42 m²</h4> Tastefully designed, the
                            spacious guest room includes a king bed or two
                            double beds, tea and coffee facilities. It includes
                            a flat-screen TV, free Wi-Fi and electronic room
                            control touch panels for controlling lighting and
                            curtains preferences from bed. The well-equipped
                            bathroom has a heated floor, a double sink, and a
                            separate rain shower and marble bathtub.
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
                            <p><strong>Smoking:</strong>No smoking</p>


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

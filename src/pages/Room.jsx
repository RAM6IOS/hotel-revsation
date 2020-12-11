import React, { useEffect, useState } from "react";

import "antd/dist/antd.css";

import {  DatePicker, Space, Input } from "antd";
import "../Rooms/Room1.css";
import Error from "../pages/Error";

import {roomsData} from "../data/data"

const { RangePicker } = DatePicker;

function Room(props) {
    const [data, setData] = useState()
    const [found, setFound] = useState(true);
    useEffect(()=> {
        const room = roomsData.find((i)=> i.name === props.match.params.name)
        if(!room) {
            console.log("if",room)
            setFound(false);
        }else{
            console.log("else", room)
            setData(room)
        }

    }, [data, props.match.params.name])
    if(found === false){ return <Error />}
    return (
        <>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li
                        data-target="#demo"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                {data?.carouselImages.map(image =>
                    <div  className={`carousel-item ${image.active ? 'active': ''}`} key={image.src}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                    )}

                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

            <div>
                <div className="row" >
                    <div className="col-sm-6 bor bakyard">
                        <h3>Detailing</h3>
                        <div className="padeng">
                            <h4>Room Size {data?.details.size} m²</h4> {data?.details.description}
                            <div>
                                <h4>In your privatebathroom: </h4>
                                <ol>
                                    {data?.details.privatebathroom?.map(i=>

                                    <li key={i}>{i}</li>
                                        )}

                                </ol>
                            </div>
                            <div>
                                    <p><strong>Smoking:</strong>{data?.details.smoking ? "Allowed" :"No smoking"}</p>


                            </div>
                            <h4>Parking: ​</h4>
                           {data?.details.parking}
                        </div>
                    </div>
                    <div className="col-sm-6 bor bakyard">
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

export default Room

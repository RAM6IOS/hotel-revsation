import React from 'react'
import { ditlesroom } from "../Data";
import "../App.css";
import {

    Link,

} from "react-router-dom";
import { Card, Avatar } from "antd";
const { Meta } = Card;

export default function card() {
  return (
      <>
          <div>
              <div class="row">
                  {ditlesroom.map((room, index) => (
                      <div class="col-sm-6 col-md-4 col-lg-3  margn">
                          <Card
                              className="widths"
                              cover={<img alt="example" src={room.imgs} />}
                          >
                              <Meta />
                              <h5>{room.tittle}</h5>

                              <button className="but"> <Link to={room.tos}>Check</Link></button>
                          </Card>
                      </div>
                  ))}
              </div>
          </div>
      </>
  );
}

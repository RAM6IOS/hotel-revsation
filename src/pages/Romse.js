import React, { useContext } from "react";
import Heroroms from "../Compnent/heroroms";
import { ditlesroom } from "../Data";
import "../App.css"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation,
} from "react-router-dom";
import { Card, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import Cards from "../Compnent/card"

const { Meta } = Card;

function Romse() {
    return (
        <>
            <div>
                <Heroroms />
            </div>
            <Cards/>

        </>
    );
}

export default Romse;
